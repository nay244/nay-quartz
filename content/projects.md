---
title: Projects
---
# Fun Things I've Worked On

A collection of personal and professional projects.

---

<div class="article-header">
<h1>Azure Firewall Migration</h1>
<p>Redesigned an enterprise hub-and-spoke firewall architecture in Azure — migrating from a 2-node Active-Passive PAN-OS cluster across 4 network zones to a 3-node Active-Active-Active cluster behind an Azure Internal Load Balancer with a unified 2-zone model.</p>
</div>

# Azure Firewall Migration

## Overview

A network infrastructure migration project modernising a production Azure NETHUB environment. The existing design used two PAN-OS VM-500 firewalls in an Active-Passive HA pair with four discrete network zones (Outside, DMZ, Inside, Partners) and per-zone floating IPs as next hops for all spoke VNETs. The proposed design replaces this with three PAN-OS VM-300 (D8s_v5) firewalls running Active-Active-Active behind an Azure Standard Internal Load Balancer, collapsing to two zones and a single ILB next-hop IP for every spoke.

## Architecture Changes

| Area | Current | Proposed |
|------|---------|----------|
| Firewall HA model | 2× VM-500, Active-Passive | 3× VM-300, Active-Active-Active behind Azure ILB |
| Zone model | 4 zones: Outside, DMZ, Inside, Partners | 2 zones: Outside, Inside |
| Spoke next hop | Per-zone floating IPs (3 distinct hops) | Single Azure ILB frontend IP |
| Internet egress | Via firewall policy / outside interface | Azure NAT Gateway on Outside subnet |
| On-premises path | ExpressRoute → NETHUB-Prem floating IP | ExpressRoute → Gateway Subnet (unchanged) |
| Firewall policy | Panorama 4-zone template stack | New Panorama 2-zone template stack |

**Unchanged:** Gateway Subnet, ExpressRoute circuits (×2 via Equinix Cloud Exchange), VNet peerings, Application Gateway (WAF).

## Key Design Decisions

**Azure ILB with HA Ports** — The ILB load balancing rule uses HA Ports (protocol: All, port: 0), which is what ensures 5-tuple flow symmetry for stateful inspection. Return traffic for a session always hits the same firewall that handled the forward flow. Standard per-port LB rules are not sufficient for a stateful firewall behind an ILB.

**Azure NAT Gateway** — Attached to the Outside subnet, NAT Gateway handles outbound internet SNAT at the Azure SDN layer for all three firewall outside interfaces. PAN-OS source NAT rules for internet-bound traffic are removed to prevent double-NAT.

**Zone consolidation** — The DMZ, Partners, and On-Prem zones are absorbed into a single Inside zone. All spoke VNETs regardless of their former zone classification now share one route table next-hop entry pointing to the ILB frontend IP, simplifying long-term route management from three maintenance surfaces to one.

## Migration Strategy

A **Phased Group Cutover** approach was selected (recommended over Big-Bang and Canary options) to limit blast radius while keeping the change window under one hour. The new firewalls are fully built and validated in a blue-green fashion before the change window opens. The cutover itself is route-table-only — no firewall rebuilds occur during the window.

**Build phase (Weeks 1–2):** Deploy 3× VM-300 D8s_v5 in NETHUB VNET, register to Panorama, build new 2-zone template stack, migrate security and NAT policies, provision Azure ILB (Standard SKU, HA Ports, health probe on TCP/22), provision Azure NAT Gateway.

**Pre-cutover testing (Week 2–3):** ILB health probe validation across all three firewalls, policy smoke tests via jump host, NAT Gateway internet egress test, ExpressRoute/on-premises reachability, ILB session symmetry validation.

**Change window (~45–60 min):**

| Phase | Scope | Window |
|-------|-------|--------|
| Phase 1 | DMZ VNETs (DMZ-1, DMZ-2, DMZ-3) → ILB IP | T+0 to T+15 min |
| Phase 2 | Partners VNETs (Partners-1, Partners-2) → ILB IP | T+15 to T+30 min |
| Phase 3 | Enterprise VNETs + Gateway Route Table → ILB IP | T+30 to T+55 min |
| Post | 72h soak, then decommission old VM-500s | T+55 → T+72h |

**Rollback:** The old VM-500 HA pair and all zone floating IPs remain live throughout the change window and 72-hour soak. Rollback at any phase = revert the affected spoke route tables back to the original zone floating IP. Target execution time: under 10 minutes. For a Phase 3 rollback, the Gateway Route Table is reverted first to restore the ExpressRoute path before touching spoke route tables.

## Stack

PAN-OS · Panorama · Azure Virtual Network · Azure Internal Load Balancer · Azure NAT Gateway · ExpressRoute · Azure Route Tables · Bitbucket

---

<div class="article-header">
<h1>ServiceNow Data Pipeline</h1>
<p>End-to-end data pipeline extracting ServiceNow ITSM records through AWS managed services, transforming via DBT, and delivering live Power BI dashboards — built on a medallion architecture.</p>
</div>

# ServiceNow Data Pipeline

![ServiceNow Data Pipeline Architecture](/static/servicenow_dp.png)

## Overview

A nine-stage production data pipeline that moves ServiceNow ITSM data (Incidents, Change Requests, Problems, CMDB) into Microsoft Power BI for operational reporting. The pipeline follows a **medallion architecture** (Bronze → Silver layers) and is fully event-driven — each successful extraction automatically triggers transformation and report refresh with no manual intervention.

## Pipeline Architecture

| Stage | Service | Role |
|-------|---------|------|
| 1 | ServiceNow REST API | Source system — table-level read via dedicated API service account |
| 2 | AWS AppFlow | Managed ETL connector; daily incremental extraction per table |
| 3 | Amazon Redshift (Bronze) | Raw landing zone — timestamped, unmodified source data |
| 4 | Amazon EventBridge | Event-driven trigger on AppFlow S3 success events |
| 5 | Amazon SQS | Message queue decoupling EventBridge from Jenkins |
| 6 | Jenkins + Bitbucket | CI/CD pipeline; polls SQS and executes DBT transformation jobs |
| 7 | Amazon Redshift (Silver) | Clean, modeled reporting layer managed by DBT |
| 8 | Microsoft Power Automate | HTTP-triggered dataset refresh orchestration |
| 9 | Microsoft Power BI Service | Semantic model, dashboards, and row-level security |

## Data Extraction & Ingestion

AWS AppFlow acts as the managed ETL connector between ServiceNow and Redshift, abstracting API authentication, pagination, and incremental load logic. One AppFlow flow is created per source table for independent scheduling and targeted reruns. The incremental load strategy uses a watermark field (`sys_updated_on`) to extract only new or changed records, minimizing API quota consumption.

AppFlow stages data in S3 before Redshift ingestion. All records land in the **Bronze schema** (`bronze.incident`, `bronze.change_request`, etc.) with ingestion timestamps for lineage tracking and reprocessing support.

## Transformation Layer

Jenkins polls SQS for flow-completion messages. On receipt, it pulls the latest DBT project from Bitbucket and executes the relevant DBT models against the Bronze schema. Transformed output is written to the **Silver schema** (`silver.servicenow_incidents`, etc.) — clean, typed, and joined to reference data.

DBT enforces data quality at run time using built-in tests (`unique`, `not_null`, `accepted_values`). On a successful DBT run, Jenkins sends an HTTP POST to a Power Automate webhook to trigger the Power BI dataset refresh, then deletes the SQS message.

## Reporting & Access Control

Power BI Desktop connects to the Redshift Silver schema via JDBC/ODBC through an on-premises data gateway (hosted on an EC2 instance in the same VPC). Reports and semantic models are published to a shared Power BI workspace. **Row-Level Security (RLS)** roles are defined in Power BI Desktop and validated with the "View as role" feature before go-live, ensuring each team sees only their relevant data.

## Key Design Decisions

- **One flow per table** — independent scheduling and error isolation; failures in one table do not cascade
- **SQS as buffer** — decouples EventBridge from Jenkins, guaranteeing delivery even during transient consumer downtime; Dead Letter Queue captures messages that exceed max receive count
- **Least-privilege IAM** — each stage uses a scoped service role (AppFlow role, DBT IAM user, M365 service account) with only the permissions required for that stage
- **Private networking** — Redshift clusters reside in a private subnet; the on-premises data gateway on EC2 allows Power BI Service to reach Silver without public cluster exposure

---

<div class="article-header">
<h1>MelodyCraft</h1>
<p>Autonomous pipeline to create song covers or voice-overs of any Youtube video using RVC v2 trained AI voices.</p>
</div>

# MelodyCraft AI

## The Autonomous Pipeline
The autonomous pipeline of the AICoverGen application is primarily orchestrated through the main.py script. This script integrates various components and functionalities to successfully run the application. Here's an overview of how the scripts work in conjunction:

1. YouTube Video Processing and Downloading:
   1. The get_youtube_video_id function in main.py extracts the video ID from a YouTube URL.
   2. TThe yt_download function then downloads the audio from the YouTube video.
2. Audio Processing:
   1. The preprocess_song function in main.py handles the preprocessing of the song. This includes downloading the song, converting it to stereo, and then seperating the vocals from the instrumentals using the MDX-Net model.
3. Vocal Conversion:
   1. The voice_change function in main.py is used for converting the voice in the audio, utilizing the RVC model.
4. Audio Effects and Mixing:
   1. The add_audio_effects function applies audio effects like reverb and compression.
   2. The combine_audio function then combines the AI vocals with the instrumental and backup vocals to produce the final audio output.
    
## Scripts and Functions
General breakdown of each python script involved in the program purpose.

* main.py: This script will handle the overall workflow. It will call functions from other scripts based on the input it receives (like a YouTube URL or a local audio file).<br/>
  
* downloads_models.py: This script is designed to download specific machine learning models required by the AICoverGen application. It targets two types of models: MDX (Music Demixing) models and RVC (Robust Voice Conversion) models.<br/>
  
* mdx.py: This script defines the core functionality for audio processing. It includes classes and methods for handling audio data, such as loading and processing audio files, performing Short-Time Fourier Transform (STFT) and its inverse, and managing the audio separation model.<br/> 
  
* rmvpe.py: This script is focused on implementing the vocal pitch estimation model. It defines various classes and methods that are essential for the model's operation, including data preprocessing, neural network layers, and inference methods. <br/>
  
* rvc.py: This script is responsible for configuring and executing a voice conversion process. It includes functions for loading models, setting up configurations, and running the voice conversion pipeline. <br/>
  
* my_utils.py: This script contains utility functions that are used across the project. The functions contained include operations like audio processing, data manipulation, or other general-purpose tasks that support the main functionality of the application.<br/>
  
* trainset_preprocess_pipeline_print.py: This script is designed for preprocessing audio data to prepare it for training machine learning models. It includes functions for slicing audio files, normalizing volume, and resampling. The script automates the process of converting large sets of audio data into a format suitable for training. <br/>

* vc_infer_pipeline.py: This script is used for voice conversion, transforming the voice in an input audio file to sound like a different target voice using pre-trained models. It includes steps for audio processing, feature extraction, and the conversion process itself. The output is an audio file where the input voice has been modified to resemble the target voice. <br/>

* webui.py: This script will provide a user interface for the AI song cover generation application. Utilizes Gradioto python library to create an interactive web interface. This interface allows users to input song from Youtube, select voice models, and adjust various parameters like pitch and reverb for the AI-generated cover song. The script also includes features for downloading and uploading voice models, as well as filtering and selecting models based on user preferences. <br/>

## Application UI

![MelodyCraft UI](/static/mc_homepage.png)

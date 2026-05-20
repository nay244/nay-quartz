---
title: Azure
---
# AZ-900 Microsoft Azure Fundamentals

Notes from studying the AZ-900 Microsoft Azure Fundamentals certification. This covers the core pillars of cloud computing, Azure's global infrastructure, services, identity & security, and governance.

## Topics

- [[azure#cloud-concepts|Cloud Concepts]]
- [[azure#azure-architecture|Azure Architecture]]
- [[azure#azure-services|Azure Services]]
- [[azure#identity--security|Identity & Security]]
- [[azure#cost--governance|Cost & Governance]]

---

<div class="article-header">
<h1>Cloud Concepts</h1>
<p>The foundational concepts of cloud computing — service models, deployment models, shared responsibility, and the key benefits that define cloud adoption.</p>
</div>

# Cloud Concepts

## Service Models

| Model | Full Name | Description | Azure Example |
|---|---|---|---|
| **IaaS** | Infrastructure as a Service | You manage OS, middleware, runtime, apps. Provider manages hardware. | Azure Virtual Machines |
| **PaaS** | Platform as a Service | Provider manages OS and infrastructure. You manage apps and data. | Azure App Service |
| **SaaS** | Software as a Service | Provider manages everything. You use the software. | Microsoft 365 |

> **Key Exam Point:** IaaS = you patch the OS. PaaS = Microsoft patches the OS. Azure Virtual Machines = IaaS. Azure App Service = PaaS. Microsoft 365 = SaaS.

## Deployment Models

- **Public Cloud** — Resources owned and operated by a third-party provider, shared across multiple customers. Pay-as-you-go pricing.
- **Private Cloud** — Resources used exclusively by one organization. May be hosted on-premises or by a third party.
- **Hybrid Cloud** — Combines public and private clouds, allowing data and apps to move between them.

## CapEx vs. OpEx

| | CapEx (Capital Expenditure) | OpEx (Operational Expenditure) |
|---|---|---|
| **Definition** | Upfront investment in physical infrastructure | Pay-as-you-go, ongoing costs |
| **Example** | Buying servers, building a data center | Paying monthly for cloud resources |
| **Cloud model** | Traditional on-premises | Cloud computing |

> Cloud computing shifts IT spending from **CapEx to OpEx**. The **consumption-based model** means you pay only for what you use — no upfront costs, no wasted capacity.

## Shared Responsibility Model

Defines what **Microsoft** manages vs. what **you** (the customer) manage depending on the service type.

| Responsibility | On-Premises | IaaS | PaaS | SaaS |
|---|---|---|---|---|
| Physical infrastructure | Customer | **Microsoft** | **Microsoft** | **Microsoft** |
| Network controls | Customer | Customer | **Microsoft** | **Microsoft** |
| Operating system | Customer | Customer | **Microsoft** | **Microsoft** |
| Applications | Customer | Customer | Customer | **Microsoft** |
| Data & identity | Customer | Customer | Customer | Customer |

## Benefits of Cloud Services

| Benefit | Definition |
|---|---|
| **High Availability** | Systems remain operational even when components fail. Measured by SLAs (99.9%, 99.99%). Azure guarantees uptime via Availability Zones and redundant infrastructure. |
| **Scalability** | Ability to handle increased load. *Vertical scaling* = add more power to existing VMs. *Horizontal scaling* = add more instances. |
| **Elasticity** | Automatically scale resources up when demand increases, and back down when it decreases — never over-provision or under-provision. |
| **Reliability** | Resilience through decentralized, distributed design. Deploy in multiple regions so a single failure doesn't take down everything. |
| **Predictability** | *Performance predictability*: auto-scaling, load balancing. *Cost predictability*: forecast spending with Azure Cost Management and pricing tools. |
| **Security** | Cloud providers offer tools and policies to meet security requirements. You choose your level of control. |
| **Governance** | Audit and policy enforcement built in. Templates ensure resources meet corporate standards. |
| **Manageability** | Manage resources via portal, CLI, APIs, or PowerShell. Auto-scaling, monitoring, and alerting included. |

---

<div class="article-header">
<h1>Azure Architecture</h1>
<p>Azure's global physical infrastructure and the logical management hierarchy used to organize and govern resources at scale.</p>
</div>

# Azure Architecture

## Physical Infrastructure

| Component | Description |
|---|---|
| **Data Centers** | Physical facilities housing servers, storage, and networking. Azure has 300+ datacenters globally. Customers never interact directly with them. |
| **Availability Zones (AZ)** | Physically separate datacenters within a single Azure region. Each zone has independent power, cooling, and networking. Deploying across AZs gives a **99.99% VM SLA**. Protects against datacenter-level failures. |
| **Azure Regions** | Geographic areas containing one or more datacenters. Examples: East US, West Europe, Southeast Asia. Azure has 60+ regions worldwide. Choose region closest to users for lowest latency. |
| **Region Pairs** | Each region is paired with another region in the same geography (e.g., East US ↔ West US). If a major outage occurs, Microsoft prioritizes restoring one region in the pair. Replication distance ≥ 300 miles ensures geo-redundancy. |
| **Sovereign Regions** | Isolated instances of Azure for compliance: **Azure Government** (US federal agencies), **Azure China 21Vianet** (operated by a local partner). Data stays within national boundaries. |

## Management Infrastructure (Logical)

Azure organizes resources in a hierarchy. From broadest to narrowest:

- **Management Groups** — Containers for multiple subscriptions. Apply governance (policies, RBAC) across all subscriptions in the group. Up to 6 levels of nesting.
- **Subscriptions** — A unit of billing and access management. Every Azure resource lives in a subscription. An Azure account can have multiple subscriptions (e.g., one per department).
- **Resource Groups** — Logical containers for Azure resources. All resources must belong to a resource group. Deleting a resource group deletes all resources inside it.
- **Resources** — Individual Azure services: VMs, storage accounts, databases, etc.

---

<div class="article-header">
<h1>Azure Services</h1>
<p>Core Azure compute, networking, and storage services — the building blocks of any Azure-hosted application or workload.</p>
</div>

# Azure Services

## Compute Options

| Service | Type | When to Use |
|---|---|---|
| **Azure Virtual Machines (VMs)** | IaaS | Full OS control, lift-and-shift migrations, custom environments |
| **VM Scale Sets** | IaaS | Auto-scale groups of identical VMs based on demand or schedule |
| **Availability Sets** | IaaS | Distribute VMs across fault domains & update domains to avoid single-point failures within a datacenter |
| **Azure Virtual Desktop** | IaaS | Cloud-hosted Windows desktops accessible from any device (VDI) |
| **Azure App Service** | PaaS | Host web apps, APIs, and mobile backends without managing infrastructure |
| **Azure Functions** | PaaS/Serverless | Event-driven, short-lived functions. Pay per execution. No server management. |
| **Azure Container Instances (ACI)** | PaaS | Run containers without managing VMs or orchestrators. Fastest way to run a container on Azure. |
| **Azure Kubernetes Service (AKS)** | PaaS | Managed Kubernetes for orchestrating containerized apps at scale |

## Networking Services

| Service | Purpose |
|---|---|
| **Azure Virtual Network (VNet)** | Fundamental networking building block. Provides an isolated, private network in Azure. Segment with subnets. Control traffic with network security groups (NSGs). |
| **VNet Peering** | Connects two VNets so resources can communicate privately without going over the public internet — even across regions. |
| **Azure VPN Gateway** | Sends encrypted traffic between Azure VNet and on-premises networks over the public internet. Use for site-to-site or point-to-site VPN. |
| **Azure ExpressRoute** | Private, dedicated connection between on-premises and Azure (not over the public internet). Higher reliability, speed, and lower latency than VPN. |
| **Azure DNS** | Host your DNS domains in Azure. Provides name resolution using Azure infrastructure. Supports private DNS zones for internal resources. |
| **Public Endpoints** | Resources accessible over the internet via a public IP. |
| **Private Endpoints** | Resources accessible only within a private VNet via a private IP. Enhances security by keeping traffic off the public internet. |

> **VPN vs ExpressRoute:** VPN Gateway = encrypted tunnel over the public internet (lower cost, easier setup). ExpressRoute = private dedicated circuit (more reliable, faster, more expensive). Use ExpressRoute for mission-critical, high-bandwidth workloads.

## Storage Account Types & Services

| Storage Type | Purpose | Use Cases |
|---|---|---|
| **Blob Storage** | Object storage for unstructured data | Images, videos, backups, log files, data for analytics |
| **Azure Files** | Fully managed file shares in the cloud (SMB/NFS) | Lift-and-shift of on-premises file servers, shared app configs |
| **Queue Storage** | Message queuing between app components | Decouple application components, async processing |
| **Table Storage** | NoSQL key/attribute store | Flexible datasets, user data, IoT telemetry |
| **Azure Disks** | Block storage for VMs (managed disks) | OS disks, data disks for Virtual Machines |

## Storage Access Tiers (Blob)

| Tier | Access Frequency | Storage Cost | Access Cost |
|---|---|---|---|
| **Hot** | Frequently accessed | Higher | Lower |
| **Cool** | Infrequently accessed (≥30 days) | Lower | Higher |
| **Cold** | Rarely accessed (≥90 days) | Lower | Higher |
| **Archive** | Rarely accessed, flexible latency (≥180 days) | Lowest | Highest (rehydration needed) |

## Redundancy Options

| Option | Copies | Protection |
|---|---|---|
| **LRS** (Locally Redundant) | 3 copies in 1 datacenter | Hardware failures within a datacenter |
| **ZRS** (Zone Redundant) | 3 copies across 3 AZs in 1 region | Datacenter/zone failures |
| **GRS** (Geo Redundant) | 3 copies locally + 3 copies in paired region | Regional disasters |
| **GZRS** (Geo Zone Redundant) | ZRS primary + GRS secondary | Zone + regional disasters (highest durability) |

## Data Movement Options

- **AzCopy** — Command-line tool to copy blobs or files to/from a storage account. Good for scripted/automated transfers.
- **Azure Storage Explorer** — GUI application to manage storage accounts. Works on Windows, macOS, and Linux.
- **Azure File Sync** — Syncs on-premises Windows Server file shares with Azure Files. Cache frequently accessed files locally.
- **Azure Migrate** — Centralized hub for assessing and migrating on-premises servers, databases, and apps to Azure.
- **Azure Data Box** — Physical device for offline bulk data transfer. Order a device, copy data to it, ship it to Microsoft. Ideal for large datasets (TBs–PBs) where network transfer isn't practical.

---

<div class="article-header">
<h1>Identity & Security</h1>
<p>Azure's identity management, authentication methods, access control, and security services that protect resources and workloads.</p>
</div>

# Identity & Security

## Microsoft Entra ID (formerly Azure AD)

Microsoft's cloud-based **identity and access management (IAM)** service. Every Azure account uses Entra ID. It authenticates users and authorizes access to Azure resources and other services (Microsoft 365, third-party apps).

- **Microsoft Entra ID** — Cloud-native IAM. Used for authentication, SSO, and application access management.
- **Microsoft Entra Domain Services** — Provides managed domain services (LDAP, Kerberos, NTLM) in the cloud — no need to deploy and manage domain controllers. Ideal for lift-and-shift of legacy apps that require domain join.

## Authentication Methods

| Method | Description |
|---|---|
| **SSO (Single Sign-On)** | Users sign in once and access multiple applications without re-authenticating. Reduces password fatigue. Azure Entra ID acts as the identity provider. |
| **MFA (Multi-Factor Authentication)** | Requires two or more verification factors: something you know (password), something you have (phone), something you are (fingerprint). Significantly reduces identity attack risk. |
| **Passwordless** | Replaces passwords entirely with something you have (Windows Hello, FIDO2 key, Microsoft Authenticator app). Most secure authentication option. |

## Conditional Access

**Microsoft Entra Conditional Access** — Policies that control who can access resources and under what conditions. Evaluate signals like user identity, location, device state, and application risk.

Example: require MFA when accessing from outside the corporate network.

## Azure Role-Based Access Control (RBAC)

RBAC controls *what* users can do with Azure resources. Assign users, groups, or service principals a **role** at a specific **scope** (management group, subscription, resource group, or resource).

- **Owner** — Full access + can delegate access to others.
- **Contributor** — Create and manage resources, but cannot grant roles to others.
- **Reader** — View existing resources only.
- **User Access Administrator** — Manage user access to Azure resources.

> **RBAC vs Resource Locks:** RBAC controls *who can do what*. Resource Locks prevent *accidental changes/deletes* — even an Owner cannot delete a resource with a Delete lock without first removing the lock.

## Security Frameworks & Models

| Framework | Description |
|---|---|
| **Zero Trust** | Never trust, always verify. Assume breach. Explicitly verify every access request (identity, device, location). Limit blast radius with least-privilege access. |
| **Defense in Depth** | Layered security strategy. 7 layers: Physical → Identity → Perimeter → Network → Compute → Application → Data. If one layer is breached, others provide protection. |
| **External Identities** | Azure B2B (invite partners, guests) and B2C (customer-facing apps with social login). Let external users access your resources without managing their credentials. |

## Microsoft Defender for Cloud

A **security posture management** and **threat protection** service. Provides a unified security score, security recommendations, and threat detection for Azure and hybrid workloads. Monitors VMs, containers, databases, and more. Formerly called Azure Security Center.

---

<div class="article-header">
<h1>Cost & Governance</h1>
<p>Tools and practices for managing Azure costs, enforcing organizational standards, and maintaining governance across subscriptions and resources.</p>
</div>

# Cost & Governance

## Factors That Affect Azure Costs

- **Resource type** — Different resources have different rates (e.g., VM vs. storage account).
- **Consumption** — Pay-as-you-go OR reserved (commit 1 or 3 years for up to ~72% savings).
- **Region** — Prices vary by Azure region due to operational costs.
- **Bandwidth** — Data transferred *into* Azure (ingress) is free. Data *out* of Azure (egress) is charged.
- **Subscriptions** — Different subscription types (free, pay-as-you-go, Enterprise) have different pricing.

## Cost Management Tools

| Tool | Purpose |
|---|---|
| **Azure Pricing Calculator** | Estimate the cost of deploying specific Azure services before you commit. Configure VMs, storage, and more to see pricing projections. |
| **Total Cost of Ownership (TCO) Calculator** | Estimate cost *savings* of migrating from on-premises to Azure. Compares on-premises costs (hardware, power, facilities, IT labor) vs. Azure costs. |
| **Azure Cost Management + Billing** | Monitor, analyze, and optimize actual Azure spending. Set budgets and alerts. View cost breakdown by resource, resource group, or subscription. |
| **Azure Advisor** | Free personalized recommendations for cost, security, reliability, operational excellence, and performance. Identifies idle/underused resources to reduce spend. |

## Tags

**Resource tags** are name-value pairs (metadata) you attach to Azure resources for organization.

Examples: `Environment: Production`, `Department: Finance`, `CostCenter: 12345`

- Enable cost allocation by department or project.
- Filter resources in billing reports.
- Tags are *not* inherited by child resources automatically.
- Azure Policy can enforce tagging standards.

## Azure Policy

Enforce organizational standards and assess compliance at scale. Azure Policy evaluates resources and flags those that don't comply with your rules.

Policies can:
- **Audit** — Report non-compliance without blocking deployment.
- **Deny** — Block non-compliant resources from being created.
- **Deploy if not exist** — Auto-remediate by deploying a required configuration.

Example: "All VMs must be deployed in East US region."

- Policies are inherited from parent scope (management group → subscription → resource group).
- **Policy Initiatives** (formerly Policy Sets): Group multiple policies together to achieve a broader compliance goal (e.g., HIPAA, ISO 27001).

## Resource Locks

Prevent accidental deletion or modification of critical Azure resources.

| Lock Type | Effect |
|---|---|
| **Delete** | Users can read and modify a resource, but cannot delete it. |
| **ReadOnly** | Users can read a resource, but cannot modify or delete it. Similar to a Reader RBAC role. |

> **Important:** Resource locks override RBAC. Even an **Owner** cannot delete a locked resource without first removing the lock. Apply locks at the resource group level to protect all resources within it.

## Microsoft Purview

A unified **data governance** and **compliance** solution. Helps organizations discover, classify, and govern data across on-premises, multi-cloud, and SaaS environments.

- **Data Map** — Automatically discover and classify data assets.
- **Data Catalog** — Business glossary and data lineage.
- **Compliance Manager** — Assess and improve compliance posture against regulations (GDPR, HIPAA).
- **Information Protection** — Apply sensitivity labels and data loss prevention policies.

## Azure Management Interfaces

| Tool | Purpose |
|---|---|
| **Azure Portal** | Web-based GUI at portal.azure.com. Full-featured visual interface for managing all Azure resources. Best for one-off tasks, learning, and visual exploration. |
| **Azure Cloud Shell** | Browser-based shell providing Bash (Azure CLI) or PowerShell from within the Azure Portal. No local installation needed. Authenticated automatically. |
| **Azure CLI** | Cross-platform command-line tool (bash syntax). Use for scripting and automation on Linux/macOS/Windows. |
| **Azure PowerShell** | Module for PowerShell (Windows-native syntax). Use for scripting and automation, especially in Windows-centric environments. |

## Infrastructure as Code (IaC)

Managing and provisioning infrastructure through machine-readable definition files rather than manual configuration. Benefits: repeatability, versioning, consistency, and automation.

| Tool | Description |
|---|---|
| **ARM Templates** | Azure's native IaC format (JSON). Declarative — describe the desired state, and Azure deploys it. Idempotent (deploy multiple times, same result). |
| **Bicep** | A simpler, human-readable language that compiles to ARM templates. Preferred by Microsoft for new ARM-based deployments. |
| **Terraform** | Third-party (HashiCorp) IaC tool that works across multiple cloud providers including Azure. Uses HCL (HashiCorp Configuration Language). |

## Azure Resource Manager (ARM)

The **deployment and management service** for Azure. Every interaction with Azure resources goes through ARM — whether from the Portal, CLI, PowerShell, or REST APIs.

ARM provides: authentication, authorization, grouping, tagging, locking, templates, and activity logging.

## Azure Arc

Extends Azure management to **resources outside of Azure** — including on-premises servers, Kubernetes clusters, and databases running in other clouds (AWS, GCP). Arc lets you apply Azure Policy, RBAC, monitoring, and security to non-Azure resources using the same Azure tools.

> **Azure Arc Use Case:** A company has on-premises servers and wants to manage them with Azure tools (Policy, RBAC, Security Center) without moving to the cloud. **Azure Arc** is the answer.

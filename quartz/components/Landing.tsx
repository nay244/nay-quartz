import { QuartzComponentConstructor } from "./types"
import landingStyle from "./styles/landing.scss"

export const TOTAL_CARDS = 6
export const CARDS = {
  "about-me": (
    <a href={"/about-me"}>
      <div class="card card-1">
        <p class="card-title">About Me</p>
        <p class="card-subhead">Node 1</p>
        <img src="/static/1-illo.png" class="card-illustration-1" />
      </div>
    </a>
  ),
  "knowledge-base": (
    <a href={"/knowledge-base"}>
      <div class="card card-2">
        <p class="card-title">Knowledge Base</p>
        <p class="card-subhead">Node 2</p>
        <img src="/static/2-illo.png" class="card-illustration-2" />
      </div>
    </a>
  ),
  "career": (
    <a href={"/career"}>
      <div class="card card-3">
        <p class="card-title">Career</p>
        <p class="card-subhead">Node 3</p>
        <img src="/static/3-illo.png" class="card-illustration-3" />
      </div>
    </a>
  ),
  "projects": (
    <a href={"/projects"}>
      <div class="card card-4">
        <p class="card-title">Projects</p>
        <p class="card-subhead">Node 4</p>
        <img src="/static/4-illo.png" class="card-illustration-4" />
      </div>
    </a>
  ),
  "language-learning": (
    <a href={"/language-learning"}>
      <div class="card card-5">
        <p class="card-title">Language Learning</p>
        <p class="card-subhead">Node 5</p>
        <img src="/static/5-illo.png" class="card-illustration-5" />
      </div>
    </a>
  ),
  "wgu": (
    <a href={"/wgu"}>
      <div class="card card-6">
        <p class="card-title">WGU</p>
        <p class="card-subhead">Node 6</p>
        <img src="/static/6-illo.png" class="card-illustration-6" />
      </div>
    </a>
  ),
}

const CARD_DEFS = [
  { slug: "about-me",          title: "About Me",          node: "Node 1", n: 1 },
  { slug: "knowledge-base",    title: "Knowledge Base",    node: "Node 2", n: 2 },
  { slug: "career",            title: "Career",            node: "Node 3", n: 3 },
  { slug: "projects",          title: "Projects",          node: "Node 4", n: 4 },
  { slug: "language-learning", title: "Language Learning", node: "Node 5", n: 5 },
  { slug: "wgu",               title: "WGU",               node: "Node 6", n: 6 },
]

export default (() => {
  function LandingComponent() {
    return (
      <div>
        <div class="content-container">
          <p class="landing-header">Welcome to My Personal Repository</p>
          <p class="page-subhead">
            Quick Links •{" "}
            <a href="https://www.linkedin.com/in/naaay-naing/" target="_blank">
              LinkedIn
            </a>{" "}
            •{" "}
            <a href="https://github.com/nay244" target="_blank">
              GitHub
            </a>
          </p>

          <div class="issue-container">
            {CARD_DEFS.map(({ slug, title, node, n }) => (
              <a href={`./${slug}`}>
                <div class={`card card-${n}`}>
                  <p class="card-title">{title}</p>
                  <p class="card-subhead">{node}</p>
                  <img src={`./static/${n}-illo.png`} class={`card-illustration-${n}`} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }

  LandingComponent.css = landingStyle
  return LandingComponent
}) satisfies QuartzComponentConstructor

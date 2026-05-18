import { QuartzComponentConstructor } from "./types"
import landingStyle from "./styles/landing.scss"

export const TOTAL_CARDS = 6
export const CARDS = {
  "about-me": (
    <a href={"./about-me"}>
      <div class="card card-1">
        <p class="card-title">About Me</p>
        <p class="card-subhead">Node 1</p>
        <img src="./static/1-illo.png" class="card-illustration-1" />
      </div>
    </a>
  ),
  "knowledge-base": (
    <a href={"./knowledge-base"}>
      <div class="card card-2">
        <p class="card-title">Knowledge Base</p>
        <p class="card-subhead">Node 2</p>
        <img src="./static/2-illo.png" class="card-illustration-2" />
      </div>
    </a>
  ),
  "career": (
    <a href={"./career"}>
      <div class="card card-3">
        <p class="card-title">Career</p>
        <p class="card-subhead">Node 3</p>
        <img src="./static/3-illo.png" class="card-illustration-3" />
      </div>
    </a>
  ),
  "projects": (
    <a href={"./projects"}>
      <div class="card card-4">
        <p class="card-title">Projects</p>
        <p class="card-subhead">Node 4</p>
        <img src="./static/4-illo.png" class="card-illustration-4" />
      </div>
    </a>
  ),
  "language-learning": (
    <a href={"./language-learning"}>
      <div class="card card-5">
        <p class="card-title">Language Learning</p>
        <p class="card-subhead">Node 5</p>
        <img src="./static/5-illo.png" class="card-illustration-5" />
      </div>
    </a>
  ),
  "wgu": (
    <a href={"./wgu"}>
      <div class="card card-6">
        <p class="card-title">WGU</p>
        <p class="card-subhead">Node 6</p>
        <img src="./static/6-illo.png" class="card-illustration-6" />
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

const MARQUEE_TEXT =
  "the digital garden · the knowledge nook · the learning lab · the idea nursery · the thought grove · the memory archive · the discovery den · the wisdom well · the reading room · the curious corner · "

export default (() => {
  function LandingComponent() {
    const marqueeContent = Array(4).fill(MARQUEE_TEXT).join("")
    return (
      <div>
        <div class="content-container">

          {/* Terminal hero prompt */}
          <div class="hero-prompt">
            <span class="prompt-symbol">~/garden $</span>
            &nbsp;whoami
            <span class="prompt-cursor" />
          </div>

          <p class="landing-header">Welcome to My Personal Repository</p>

          <div class="landing-intro">
            <p>
              Hi, I am <a href="./about-me">Nay Naing</a>.
            </p>
            <p>
              This site will serve as a companion on my journey to a well-examined life. It's where
              I weave together my thoughts, my learning, and my memories to create a narrative
              that's uniquely mine.
            </p>
            <div class="callout" data-callout="info">
              <div class="callout-title">
                <div class="callout-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                <div class="callout-title-inner">
                  <p>Favorite Quote</p>
                </div>
              </div>
              <p>
                "<u>
                  <em>
                    Whenever you find yourself doubting how far you can go, just remember how far
                    you have come. Remember everything you have faced, all the battles you have won,
                    and all the fears you have overcome.
                  </em>
                </u>
                ." —{" "}
                <strong>
                  <a href="https://www.goodreads.com/en/book/show/31997446" target="_blank">
                    N.R. Walker
                  </a>
                </strong>{" "}
                (2016)
              </p>
            </div>
          </div>

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

        {/* Bottom marquee strip */}
        <div class="marquee marquee-bottom">
          <p>{marqueeContent}</p>
        </div>
      </div>
    )
  }

  LandingComponent.css = landingStyle
  return LandingComponent
}) satisfies QuartzComponentConstructor

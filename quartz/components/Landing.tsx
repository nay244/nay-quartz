import { QuartzComponentConstructor } from "./types"
import landingStyle from "./styles/landing.scss"

export const TOTAL_CARDS = 9

export const CARDS = {
  "about-me": (
    <a href={"./about-me"}>
      <div class="card card-1">
        <p class="card-title">About Me</p>
        <p class="card-subhead">Node 01</p>
        <img src="./static/node-01-about.png" class="card-illustration-1" />
      </div>
    </a>
  ),
  "career": (
    <a href={"./career"}>
      <div class="card card-2">
        <p class="card-title">Career</p>
        <p class="card-subhead">Node 02</p>
        <img src="./static/node-03-career.png" class="card-illustration-2" />
      </div>
    </a>
  ),
  "projects": (
    <a href={"./projects"}>
      <div class="card card-3">
        <p class="card-title">Projects</p>
        <p class="card-subhead">Node 03</p>
        <img src="./static/node-04-projects.png" class="card-illustration-3" />
      </div>
    </a>
  ),
  "knowledge-base": (
    <a href={"./knowledge-base"}>
      <div class="card card-4">
        <p class="card-title">Knowledge Base</p>
        <p class="card-subhead">Node 04</p>
        <img src="./static/node-02-knowledge.png" class="card-illustration-4" />
      </div>
    </a>
  ),
  "azure": (
    <a href={"./azure"}>
      <div class="card card-5">
        <p class="card-title">Azure</p>
        <p class="card-subhead">Node 05</p>
        <img src="./static/node-05-azure.svg" class="card-illustration-5" />
      </div>
    </a>
  ),
  "blog": (
    <a href={"./blog"}>
      <div class="card card-6">
        <p class="card-title">Blog</p>
        <p class="card-subhead">Node 06</p>
        <img src="./static/node-blog.png" class="card-illustration-6" />
      </div>
    </a>
  ),
  "language-learning": (
    <a href={"./language-learning"}>
      <div class="card card-7">
        <p class="card-title">Language Learning</p>
        <p class="card-subhead">Node 07</p>
        <img src="./static/node-05-language.png" class="card-illustration-7" />
      </div>
    </a>
  ),
  "wgu": (
    <a href={"./wgu"}>
      <div class="card card-8">
        <p class="card-title">WGU</p>
        <p class="card-subhead">Node 08</p>
        <img src="./static/node-06-wgu.png" class="card-illustration-8" />
      </div>
    </a>
  ),
  "index-maps": (
    <a href={"./index-maps"}>
      <div class="card card-9">
        <p class="card-title">Index & Maps</p>
        <p class="card-subhead">Node 09</p>
        <img src="./static/node-index.png" class="card-illustration-9" />
      </div>
    </a>
  ),
}

const CARD_DEFS = [
  { slug: "about-me",          title: "About Me",          node: "Node 01", n: 1, img: "node-01-about.png"    },
  { slug: "career",            title: "Career",             node: "Node 02", n: 2, img: "node-03-career.png"   },
  { slug: "projects",          title: "Projects",           node: "Node 03", n: 3, img: "node-04-projects.png" },
  { slug: "knowledge-base",    title: "Knowledge Base",     node: "Node 04", n: 4, img: "node-02-knowledge.png"},
  { slug: "azure",             title: "Azure",              node: "Node 05", n: 5, img: "node-05-azure.svg"    },
  { slug: "blog",              title: "Blog",               node: "Node 06", n: 6, img: "node-blog.png"        },
  { slug: "language-learning", title: "Language Learning",  node: "Node 07", n: 7, img: "node-05-language.png" },
  { slug: "wgu",               title: "WGU",                node: "Node 08", n: 8, img: "node-06-wgu.png"      },
  { slug: "index-maps",        title: "Index & Maps",       node: "Node 09", n: 9, img: "node-index.png"       },
]

const MARQUEE_TEXT =
  "the digital garden · the knowledge nook · the learning lab · the idea nursery · the thought grove · the memory archive · the discovery den · the wisdom well · the reading room · the curious corner · "

export default (() => {
  function SiteHeader() {
    const buildDate = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    return (
      <header class="site-header">
        <div class="site-header-left">
          {/* Logo: neon N floral monogram */}
          <div class="site-logo" aria-label="Nay logo">
            <img src="./static/icon.png" alt="Nay logo" width="48" height="48" style="border-radius:0;margin:0;display:block;" />
          </div>
          <div class="site-wordmark">
            <span class="site-name">Nay's Digital Garden</span>
          </div>
        </div>
        <div class="site-header-right">
          <span class="site-status-dot" aria-hidden="true" />
          <span class="site-status-text">online · last build {buildDate}</span>
        </div>
      </header>
    )
  }

  function LandingComponent() {
    const marqueeContent = Array(4).fill(MARQUEE_TEXT).join("")
    return (
      <div>
        <div class="site-header-band">
          <div class="content-container" style="padding-bottom:0">
            <SiteHeader />
          </div>
        </div>

        <div class="content-container">
          {/* Terminal hero prompt */}
          <div class="hero-prompt">
            <span class="prompt-symbol">~/nay@digital-garden $</span>
            &nbsp;welcome
            <span class="prompt-cursor" />
          </div>

          <p class="landing-header">Hi, I am <a href="./about-me">Nay Naing</a>.</p>

          <div class="landing-intro">
            <p>
              This site will serve as a companion on my journey to a well-examined life. It's where
              I weave together my thoughts, my learning, and my memories to create a narrative
              that's uniquely mine.
            </p>
            <div class="article-header quote-block">
              <h1>Favorite Quote</h1>
              <p>
                "<u>
                  <em>
                    Whenever you find yourself doubting how far you can go, just remember how far
                    you have come. Remember everything you have faced, all the battles you have won,
                    and all the fears you have overcome.
                  </em>
                </u>
                "
                <br />
                <span class="quote-attribution">
                  — <strong>
                    <a href="https://www.goodreads.com/en/book/show/31997446" target="_blank">
                      N.R. Walker
                    </a>
                  </strong>{" "}
                  (2016)
                </span>
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
            {CARD_DEFS.map(({ slug, title, node, n, img }) => (
              <a href={`./${slug}`}>
                <div class={`card card-${n}`}>
                  <p class="card-title">{title}</p>
                  <p class="card-subhead">{node}</p>
                  <img src={`./static/${img}`} class={`card-illustration-${n}`} />
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

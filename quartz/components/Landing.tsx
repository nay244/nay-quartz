import { QuartzComponentConstructor } from "./types"
import landingStyle from "./styles/landing.scss"

export const CARDS: Record<string, JSX.Element> = {}

const SECTIONS = [
  {
    slug: "/Diary",
    label: "Diary",
    description: "Life & reflections",
    colorClass: "card-1",
  },
  {
    slug: "/Japanese",
    label: "Japanese",
    description: "Language learning",
    colorClass: "card-2",
  },
  {
    slug: "/WGU",
    label: "WGU",
    description: "Course notes",
    colorClass: "card-3",
  },
  {
    slug: "/Data-Analysis",
    label: "Data Analysis",
    description: "Python & Excel",
    colorClass: "card-4",
  },
]

export default (() => {
  function LandingComponent() {
    return (
      <div class="landing-wrapper">
        <div class="content-container">
          <p class="landing-header">Nay</p>
          <p class="page-subhead">
            A companion on my journey to a well-examined life
          </p>

          <div class="issue-container">
            {SECTIONS.map(({ slug, label, description, colorClass }) => (
              <a href={slug}>
                <div class={`card ${colorClass}`}>
                  <p class="card-title">{label}</p>
                  <p class="card-subhead">{description}</p>
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

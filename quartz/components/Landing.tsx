import { QuartzComponentConstructor } from "./types"
import landingStyle from "./styles/landing.scss"

export const CARDS: Record<string, JSX.Element> = {}

export default (() => {
  function LandingComponent() {
    return (
      <div>
        <div class="content-container">
          <p class="landing-header">Welcome to Socratica</p>
          <p class="page-subhead">
            This is a guide •{" "}
            <a href="https://www.socratica.info/" target="_blank">
              Back to main site
            </a>{" "}
            •{" "}
            <a href="https://github.com/Socratica-Org/toolbox" target="_blank">
              Contribute
            </a>{" "}
            •{" "}
            <a href="https://toolbox.socratica.info/credits" target="_self">
              Credits
            </a>
          </p>

          <div class="issue-container">
            {Object.values(CARDS)}
          </div>
        </div>
      </div>
    )
  }

  LandingComponent.css = landingStyle
  return LandingComponent
}) satisfies QuartzComponentConstructor

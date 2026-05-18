import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Nay",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "google",
      tagId: "G-PBC0Y59ZMD"
    },
    baseUrl: "naynaing.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: "Source Serif 4",
        body: "IBM Plex Sans",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#0a0a0f",
          lightgray: "#2a2a3a",
          gray: "#e0e0e0",
          darkgray: "#e0e0e0",
          dark: "#e0e0e0",
          secondary: "#00ff88",
          tertiary: "#7dffbe",
          highlight: "rgba(0, 255, 136, 0.10)",
        },
        darkMode: {
          light: "#0a0a0f",
          lightgray: "#2a2a3a",
          gray: "#e0e0e0",
          darkgray: "#e0e0e0",
          dark: "#e0e0e0",
          secondary: "#00ff88",
          tertiary: "#7dffbe",
          highlight: "rgba(0, 255, 136, 0.10)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents({ maxDepth: 2 }),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "local" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config

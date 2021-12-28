const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/workspaces/gatsby-advanced-blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/workspaces/gatsby-advanced-blog/src/pages/404.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/workspaces/gatsby-advanced-blog/src/pages/index.jsx"))),
  "component---src-templates-categorized-list-jsx": hot(preferDefault(require("/workspaces/gatsby-advanced-blog/src/templates/CategorizedList.jsx"))),
  "component---src-templates-list-jsx": hot(preferDefault(require("/workspaces/gatsby-advanced-blog/src/templates/List.jsx"))),
  "component---src-templates-portfolio-jsx": hot(preferDefault(require("/workspaces/gatsby-advanced-blog/src/templates/Portfolio.jsx"))),
  "component---src-templates-portfolios-jsx": hot(preferDefault(require("/workspaces/gatsby-advanced-blog/src/templates/Portfolios.jsx"))),
  "component---src-templates-post-jsx": hot(preferDefault(require("/workspaces/gatsby-advanced-blog/src/templates/Post.jsx"))),
  "component---src-templates-resume-jsx": hot(preferDefault(require("/workspaces/gatsby-advanced-blog/src/templates/Resume.jsx"))),
  "component---src-templates-tagged-list-jsx": hot(preferDefault(require("/workspaces/gatsby-advanced-blog/src/templates/TaggedList.jsx")))
}


const path = require('path')
const { createPostUrlFromSlug, urlify } = require('../../utils')

module.exports = ({ graphql, boundActionCreators: { createPage } }) => {
  const blogPostTemplate = path.resolve(
    'src/templates/markdown/postTemplate.js'
  )
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges
      .filter(({ node: { frontmatter: { slug } } }) => slug)
      .forEach(({ node }) => {
        console.log('--------filteredData', node)
        createPage({
          path: createPostUrlFromSlug(node.frontmatter.slug),
          component: blogPostTemplate,
          context: {
            slug: node.frontmatter.slug
          }, // additional data can be passed via context
        })
      })
  })
}

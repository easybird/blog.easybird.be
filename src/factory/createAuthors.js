const path = require('path')
const createPostUrlFromAuthorName = require('../utils')
  .createPostUrlFromAuthorName

module.exports = ({ graphql, boundActionCreators: { createPage } }) =>
  new Promise((resolve, reject) => {
    const blogAuthorTemplate = path.resolve('src/templates/blog-author.js')

    resolve(
      graphql(`
        {
          allContentfulAuthor {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulAuthor.edges.forEach(edge => {
          createPage({
            path: createPostUrlFromAuthorName(edge.node.slug),
            component: blogAuthorTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
      })
    )
  })

const path = require('path')
const createPostUrlFromCategory = require('../utils').createPostUrlFromCategory

module.exports = ({ graphql, boundActionCreators: { createPage } }) =>
  new Promise((resolve, reject) => {
    const blogCategoryTemplate = path.resolve('src/templates/blog-category.js')
    resolve(
      graphql(`
        {
          allContentfulCategory {
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
        result.data.allContentfulCategory.edges.forEach(edge => {
          createPage({
            path: createPostUrlFromCategory(edge.node.slug),
            component: blogCategoryTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
      })
    )
  })

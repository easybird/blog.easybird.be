const path = require('path')
const { createPostUrlFromSlug, urlify } = require('../utils')
const createTags = require('./createTags')

module.exports = ({ graphql, boundActionCreators: { createPage } }) =>
  new Promise((resolve, reject) => {
    const tags = {}
    const blogPostTemplate = path.resolve('src/templates/blog-post.js')

    resolve(
      graphql(`
        {
          allContentfulPost(limit: 100) {
            edges {
              node {
                id
                slug
                tags
              }
            }
          }
        }
      `)
        .then(result => {
          if (result.errors) {
            reject(result.errors)
          }
          result.data.allContentfulPost.edges.forEach(edge => {
            createPage({
              path: createPostUrlFromSlug(edge.node.slug),
              component: blogPostTemplate,
              context: {
                slug: edge.node.slug,
              },
            })
            if (edge.node.tags) {
              edge.node.tags.forEach(tag => {
                tags[urlify(tag)] = tag
              })
            }
          })
        })
        .then(() => {
          createTags(createPage, tags)
        })
    )
  })

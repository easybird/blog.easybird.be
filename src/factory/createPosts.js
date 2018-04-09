const path = require('path')
const { createPostUrlFromSlug, urlify } = require('../utils')
const createTags = require('./createTags')
const jsonToFrontMatter = require('json-to-frontmatter-markdown').default

function createMarkdownFileFromPost(postUrl, edge, graphql) {
  const { slug } = edge.node

  return graphql(
    `
      query blogPostQuery($slug: String!) {
        contentfulPost(slug: { eq: $slug }) {
          id
          slug
          title {
            title
          }
          subtitle
          intro {
            intro
          }
          author {
            name
          }
          category {
            title
          }
          tags
          featuredImage {
            resolutions {
              src
            }
          }
          date
          body {
            body
          }
        }
      }
    `,
    { slug }
  ).then(result => {
    const {
      title,
      subtitle,
      intro,
      author,
      category,
      tags,
      featuredImage,
      date,
      body,
    } = result.data.contentfulPost
    return jsonToFrontMatter({
      frontmatterMarkdown: {
        frontmatter: [
          {
            slug,
            title: title.title,
            subtitle,
            intro: intro.intro,
            authors: author.map(({ name }) => name),
            categories: category.map(({ title: authorTitle }) => authorTitle),
            tags,
            featuredImage: featuredImage.resolutions.src,
            date,
          },
        ],
        body: body.body,
      },
      path: path.join(__dirname, '../..', 'content', 'posts'),
      fileName: `${slug}.md`,
    })
  })
}

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
            return reject(result.errors)
          }
          return Promise.all(
            result.data.allContentfulPost.edges.map(edge => {
              if (edge.node.tags) {
                edge.node.tags.forEach(tag => {
                  tags[urlify(tag)] = tag
                })
              }
              const postUrl = createPostUrlFromSlug(edge.node.slug)
              return Promise.all([
                createMarkdownFileFromPost(postUrl, edge, graphql),
                createPage({
                  path: postUrl,
                  component: blogPostTemplate,
                  context: {
                    slug: edge.node.slug,
                  },
                }),
              ])
            })
          )
        })
        .then(() => createTags(createPage, tags))
    )
  })

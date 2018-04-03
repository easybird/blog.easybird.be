const path = require('path')
const { createTagUrl } = require('../utils')

module.exports = (createPage, tags) => {
  const tagTemplate = path.resolve('src/templates/blog-tag.js')
  const tagOverviewTemplate = path.resolve('src/templates/tag-overview.js')

  createPage({
    path: '/tags/',
    component: tagOverviewTemplate,
    context: {
      tags,
    },
  })
  Object.keys(tags).forEach(tag => {
    createPage({
      path: createTagUrl(tags[tag]),
      component: tagTemplate,
      context: {
        tag: tags[tag],
      },
    })
  })
}

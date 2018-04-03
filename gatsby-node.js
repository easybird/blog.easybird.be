const {
  createPosts,
  createAuthors,
  createCategories,
  createTags,
} = require('./src/factory')

exports.createPages = params =>
  Promise.all([
    createPosts(params),
    createAuthors(params),
    createCategories(params),
  ])

const {
  createPosts,
  createAuthors,
  createCategories,
  createTags,
} = require('./src/factory')
const {
  createPosts: createPostsFromMarkdown,
} = require('./src/factory/markdown')

exports.createPages = params =>
  Promise.all([
    createPosts(params),
    createAuthors(params),
    createCategories(params),
  ]).then(() => {
    return Promise.all([createPostsFromMarkdown(params)])
  })

function urlify(url) {
  if (!url) throw new Error(`url is mandatory! ${url}`)
  return url.split(' ').join('-')
}

module.exports = {
  createPostUrlFromSlug: slug => `/posts/${urlify(slug)}`,
  createPostUrlFromAuthorName: slug => `/authors/${urlify(slug)}`,
  createPostUrlFromCategory: slug => `/categories/${urlify(slug)}`,
  createTagUrl: tag => `/tags/${urlify(tag)}`,
  urlify,
}

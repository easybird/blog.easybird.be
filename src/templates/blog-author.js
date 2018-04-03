import React, { Component } from 'react'
import Img from 'gatsby-image'
import PostOverview from '../components/PostOverview'

class BlogAuthor extends Component {
  render() {
    const {
      slug,
      profilePhoto,
      biography,
      post,
    } = this.props.data.contentfulAuthor
    return (
      <div>
        <h1
          style={{
            borderBottom: '1px solid #ccc',
            paddingBottom: '0.5rem',
          }}
        >
          {slug}
        </h1>
        <div>
          <Img sizes={profilePhoto.sizes} />
        </div>
        <hr />
        <div
          dangerouslySetInnerHTML={{
            __html: biography.childMarkdownRemark.html,
          }}
        />
        {post && <PostOverview nodes={post} />}
      </div>
    )
  }
}

export default BlogAuthor

export const pageQuery = graphql`
  query blogAuthorQuery($slug: String!) {
    contentfulAuthor(slug: { eq: $slug }) {
      ...AuthorFragment
      post {
        ...IndexPostFragment
      }
    }
  }
`

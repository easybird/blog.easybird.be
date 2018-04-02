import React, { Component } from 'react'
import Img from 'gatsby-image'
import PostOverview from '../components/PostOverview'

class BlogCategory extends Component {
  render() {
    console.log(this.props)
    const {
      title,
      post,
      shortDescription,
      icon,
    } = this.props.data.contentfulCategory
    return (
      <div>
        <h1
          style={{
            borderBottom: '1px solid #ccc',
            paddingBottom: '0.5rem',
          }}
        >
          {title}
        </h1>
        <div>
          <Img sizes={icon.sizes} />
        </div>
        <hr />
        <h3>{shortDescription && shortDescription.shortDescription}</h3>
        <PostOverview nodes={post} />
      </div>
    )
  }
}

export default BlogCategory

export const pageQuery = graphql`
  query blogCategoryQuery($slug: String!) {
    contentfulCategory(slug: { eq: $slug }) {
      ...CategoryFragment
      post {
        ...IndexPostFragment
      }
    }
  }
`

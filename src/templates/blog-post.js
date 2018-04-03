import React, { Component } from 'react'
import Img from 'gatsby-image'

class BlogPost extends Component {
  render() {
    const {
      title: { title },
      subTitle,
      intro: { intro },
      date,
      featuredImage,
      body,
    } = this.props.data.contentfulPost
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
        <h4>{subTitle}</h4>
        <p>{date}</p>
        <div>
          <Img sizes={featuredImage.sizes} />
        </div>
        <p>{intro}</p>
        <hr />
        <div
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        />
      </div>
    )
  }
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      ...IndexPostFragment
    }
  }
`

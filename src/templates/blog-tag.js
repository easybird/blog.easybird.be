import React, { Component } from 'react'
import Img from 'gatsby-image'
import PostOverview from '../components/PostOverview'

class BlogTag extends Component {
  render() {
    const { data: { allContentfulPost: { edges } } } = this.props
    return (
      <div>{edges && edges.node && <PostOverview nodes={edges.node} />}</div>
    )
  }
}

export default BlogTag

export const pageQuery = graphql`
  query blogTagQuery($tag: String!) {
    allContentfulPost(filter: { tags: { in: [$tag] } }) {
      edges {
        node {
          ...IndexPostFragment
        }
      }
    }
  }
`

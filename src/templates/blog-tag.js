import React, { Component } from 'react'
import Img from 'gatsby-image'
import PostOverview from '../components/PostOverview'

class BlogCategory extends Component {
  render() {
    console.log(this.props)
    const { data: { allContentfulPost: { edges } } } = this.props
    return (
      <div>
        <PostOverview nodes={edges} />
      </div>
    )
  }
}

export default BlogCategory

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

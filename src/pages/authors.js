import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import { createPostUrlFromAuthorName } from '../utils'
import Img from 'gatsby-image'

const AuthorPage = ({ data: { allContentfulAuthor: { edges } } }) => (
  <div>
    {edges.map(({ node }) => (
      <div key={node.id}>
        <h1>
          <Link to={createPostUrlFromAuthorName(node.name)}>{node.name}</Link>
        </h1>
        <Img sizes={node.profilePhoto.sizes} />
        <div>{node.biography && node.biography.biography}</div>
        <div
          dangerouslySetInnerHTML={{
            __html: node.biography && node.biography.childMarkdownRemark.html,
          }}
        />
        <hr />
      </div>
    ))}
  </div>
)

export default AuthorPage

export const query = graphql`
  query AuthorContent {
    allContentfulAuthor {
      edges {
        node {
          ...AuthorFragment
        }
      }
    }
  }
`

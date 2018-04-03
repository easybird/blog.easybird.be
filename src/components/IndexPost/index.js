import React, { PropTypes } from 'react'
import Link, { navigateTo } from 'gatsby-link'
import {
  createPostUrlFromSlug,
  createPostUrlFromAuthorName,
  createPostUrlFromCategory,
  createTagUrl,
} from '../../utils'
import './index.css'

const tagStyle = { marginRight: '8px' }

const IndexPost = ({ node }) => (
  <div className="node" to={createPostUrlFromSlug(node.slug)}>
    <Link to={createPostUrlFromSlug(node.slug)}>
      <div className="title">
        <h4>{node.title.title}</h4>
      </div>
      {node.featuredImage && (
        <div className="image">
          <img src={node.featuredImage.resolutions.src} />
        </div>
      )}
    </Link>
    <div className="info-block">
      {node.author && (
        <div className="info">
          <span className="info-title">Author:</span>
          {node.author.map(anAuthor => (
            <Link to={createPostUrlFromAuthorName(anAuthor.name)}>
              {anAuthor.name}
            </Link>
          ))}
        </div>
      )}
      {node.category && (
        <div className="info">
          <span className="info-title">Category:</span>
          {node.category.map(aCategory => (
            <Link to={createPostUrlFromCategory(aCategory.title)}>
              {aCategory.title}
            </Link>
          ))}
        </div>
      )}
    </div>

    {node.tags && (
      <div className="tags">
        {node.tags.map(tag => (
          <Link style={tagStyle} to={createTagUrl(tag)}>
            {tag}
          </Link>
        ))}
      </div>
    )}
  </div>
)

export default IndexPost

export const query = graphql`
  fragment IndexPostFragment on ContentfulPost {
    id
    slug
    title {
      title
    }
    subtitle
    intro {
      intro
    }
    author {
      name
    }
    category {
      title
    }
    tags
    featuredImage {
      resolutions {
        src
      }
      sizes(maxWidth: 800) {
        ...GatsbyContentfulSizes
      }
    }
    date
    body {
      childMarkdownRemark {
        html
      }
    }
  }
`

// export const query = graphql`
//   fragment IndexPostFragment on ContentfulPost {
//     id
//     title {
//       title
//     }
//     body {
//       body
//     }
//     slug
//     date
//     tags
//     author {
//       name
//     }
//     category {
//       title
//     }
//     featuredImage {
//       resolutions {
//         src
//       }
//     }
//   }
// `

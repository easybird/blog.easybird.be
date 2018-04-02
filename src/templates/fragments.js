export const categoryFragment = graphql`
  fragment CategoryFragment on ContentfulCategory {
    id
    slug
    title
    shortDescription {
      shortDescription
    }
    icon {
      sizes(maxWidth: 800) {
        ...GatsbyContentfulSizes
      }
    }
  }
`

export const authorFragment = graphql`
  fragment AuthorFragment on ContentfulAuthor {
    id
    slug
    name
    biography {
      childMarkdownRemark {
        html
      }
    }
    profilePhoto {
      sizes(maxWidth: 800) {
        ...GatsbyContentfulSizes
      }
    }
  }
`

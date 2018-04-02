import React, { Component } from 'react'
import { createTagUrl } from '../utils'
import Link from 'gatsby-link'

class TagOverview extends Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.pathContext.tags).map(tagKey => (
          <h1>
            <Link to={createTagUrl(tagKey)}>
              {this.props.pathContext.tags[tagKey]}
            </Link>
          </h1>
        ))}
      </div>
    )
  }
}

export default TagOverview

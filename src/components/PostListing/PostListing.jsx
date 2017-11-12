import React from "react";
import Link from "gatsby-link";
import { formatDate, parseDate } from "../../helpers/dateHelper";

class PostListing extends React.Component {
  getPostList() {
    return this.props.postEdges
      .map(postEdge => ({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: parseDate(postEdge.node.frontmatter.date),
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      }))
      .sort((a, b) => a.date < b.date);
  }

  render() {
    const postList = this.getPostList();

    return (
      <div>
        {postList.map(post => (
          <Link to={post.path} key={post.title}>
            <h1>{`${formatDate(post.date)} - ${post.title}`}</h1>
          </Link>
        ))}
      </div>
    );
  }
}

export default PostListing;

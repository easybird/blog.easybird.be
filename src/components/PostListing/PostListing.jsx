import React from "react";
import { parseDate } from "../../helpers/dateHelper";
import { ContainerDiv, ListingDiv } from "../../layouts/styles";
import PostListCard from "./PostListCard";

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
      <ContainerDiv>
        <ListingDiv>
          {postList.map(post => <PostListCard post={post} />)}
        </ListingDiv>
      </ContainerDiv>
    );
  }
}

export default PostListing;

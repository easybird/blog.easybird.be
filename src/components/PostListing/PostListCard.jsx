import React from "react";
import Link from "gatsby-link";
import { formatDate } from "../../helpers/dateHelper";
import {
  ListingCard,
  getListingImgDiv,
  ListingImg,
  ListingText,
  ListingTile,
  ListingExcerpt,
  ListingTitle,
} from "../../layouts/styles";

const PostListCard = ({ post }) => {
  let ListingImgDiv = null;
  if (post.cover) {
    ListingImgDiv = getListingImgDiv(post.cover);
  }

  return (
    <ListingCard>
      <Link to={post.path} key={post.title}>
        {ListingImg && (
          <ListingImgDiv className={"thumbnail"}>
            <ListingImg alt={post.title} src={post.cover} />
          </ListingImgDiv>
        )}
        <ListingTile>
          <ListingText>{formatDate(post.date)}</ListingText>
          <ListingText>{`${post.timeToRead} min read`}</ListingText>
        </ListingTile>
        <ListingTitle>{post.title}</ListingTitle>
        <ListingExcerpt>
          <ListingText>{post.excerpt}</ListingText>
        </ListingExcerpt>
      </Link>
    </ListingCard>
  );
};

export default PostListCard;

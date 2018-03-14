import React from "react";
import Helmet from "react-helmet";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import { ContainerDiv, HeroDiv, ContentDiv, HeroImg } from "../layouts/styles";
import SiteTitle from "../components/common/SiteTitle";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <ContainerDiv>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <SiteTitle title={config.siteTitle} />
        <article>
          <ContentDiv>
            <h1>{post.title}</h1>
          </ContentDiv>
          {post.cover && (
            <HeroDiv>
              <HeroImg src={post.cover} alt="cover" />
            </HeroDiv>
          )}
          <ContentDiv dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <ContentDiv className="post-meta">
            <PostTags tags={post.tags} />
            <SocialLinks postPath={slug} postNode={postNode} />
          </ContentDiv>
          <ContentDiv>
            <UserInfo config={config} />
            <Disqus postNode={postNode} />
          </ContentDiv>
        </article>
      </ContainerDiv>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
      }
    }
  }
`;

import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostThumb from "../components/postThumb"
import PinnedPost from "../components/pinnedPost"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Blog" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      {/* <Bio /> */}

      {posts.map(post => {
        return post.frontmatter.pin ? (
          <PinnedPost
            title={post.frontmatter.title}
            subtitle={post.frontmatter.description}
            thumbnail={post.frontmatter.thumbnail}
            link={post.fields.slug}
            tag={post.frontmatter.tag}
          />
        ) : (
          <></>
        )
      })}
      <h5>Recent Posts</h5>
      <ol className="postthumb-wrapper-ol">
        {posts.map(post => {
          return post.frontmatter.pin ? (
            <></>
          ) : (
            <li>
              <PostThumb
                title={post.frontmatter.title}
                subtitle={post.frontmatter.description}
                thumbnail={post.frontmatter.thumbnail}
                link={post.fields.slug}
                tag={post.frontmatter.tag}
              />
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tag
          pin
        }
      }
    }
  }
`

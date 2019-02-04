import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { DiscussionEmbed } from "disqus-react";
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const showWikiWarning = this.props.location.pathname.indexOf("/wiki") >= 0
    const disqusShortname = this.props.data.site.siteMetadata.disqusShortname
    const siteUrl = this.props.data.site.siteMetadata.siteUrl
    const disqusConfig = {
      url: post.frontmatter.disqusUrl || (siteUrl + this.props.location.pathname),
      identifier: post.frontmatter.disqusIdentifier || post.id,
      title: post.frontmatter.title,
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        {showWikiWarning &&
            <p
              style={{
                border: `solid 1px #ccc`,
                padding: `10px`,
              }}
            >
              Please note: This page is imported from my wiki, which hasn't been updated in over 10 years. Some of
              the formatting was lost during the import. I'll try to get around to fixing it someday.
            </p>
        }
        <h1>{post.frontmatter.title}</h1>
        {post.frontmatter.date &&
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
              marginTop: rhythm(-1),
            }}
          >
            {post.frontmatter.date}
          </p>
        }
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        disqusShortname
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        disqusIdentifier
        disqusUrl
      }
    }
  }
`

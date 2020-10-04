import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <h3>A little about me, and what this site is about</h3>
      <div className="about-box">
        <p>Hi, I'm Nuwan. I'm a junior Software Engineer based in Seoul.</p>
        <p>
          While learning better ways to design and architect systems, I'd like
          to keep this blog as a journal to share my thoughts. Obligatory
          disclaimer, opinions here represent my own, and not my employers'.
        </p>
        <p>
          If you'd like to reach me, send me a mail at{" "}
          <a href="mailto:hi@itsmenuwan.dev" className="simple-link">
            hi@itsmenuwan.dev
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

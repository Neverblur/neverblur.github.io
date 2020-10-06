import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <h4>A little about me, and what this site is about..</h4>
      <div className="about-box">
        <p>Hi, I'm Nuwan. I'm a junior Software Engineer based in Seoul.</p>
        <p>
          While learning better ways to design and architect systems, I'd like
          to keep this blog as a journal to share my thoughts. I think the term
          "Engineering" comes to Software when there's process involved. There's
          great pleasure in designing a robust solution to a problem, and quick
          "hacks" also have their own place.
        </p>
        <p>
          Obligatory disclaimer, opinions here represent my own, and not my
          employer's.
        </p>
        <p>
          If you'd like to talk more about what I write, or even to say a quick
          hi, send me a mail at{" "}
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

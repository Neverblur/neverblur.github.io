import React from "react"
import { navigate } from "gatsby"
import Img from "gatsby-image"

const PostThumb = ({ title, subtitle, thumbnail, link, tag }) => {
  let featuredImgFluid = thumbnail.childImageSharp.fluid

  return (
    <div className="postthumb-container" onClick={() => navigate(link)}>
      <Img fluid={featuredImgFluid} />
      <p className="post-tag">#{tag}</p>
      <p className="postthumb-title">{title}</p>
      <p className="postthumb-subtitle">{subtitle}</p>
    </div>
  )
}

export default PostThumb

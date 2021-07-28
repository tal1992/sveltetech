import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'
import './index.scss'
import { StaticImage } from "gatsby-plugin-image"
import javascript from '../../../assets/javascript.png';


export const ThumbnailItem = ({ node }) => {
  let imgpath = `../../../assets/javascript.png`;
  return(
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <StaticImage 
      src="../../../assets/javascript.png"
      alt={node.frontmatter.title || node.fields.slug}       
      placeholder="blurred"
      layout="fixed"
      width={100}
      height={100} />

    <div key={node.fields.slug}>
      <h2>{node.frontmatter.title || node.fields.slug}</h2>
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </div>
  </Link>
  )
}

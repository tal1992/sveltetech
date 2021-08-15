import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'
import './index.scss'
import { StaticImage } from "gatsby-plugin-image"
import javascript from '../../../assets/javascript.png';


export const ThumbnailItem = ({ node }) => {
  let imgpath = `../../../assets/javascript.png`;
  // console.log(node.frontmatter.category)
  return(
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
  {node.frontmatter.category === 'javascript' ?
    <StaticImage 
      src="../../../assets/javascript.webp"
      alt={node.frontmatter.title || node.fields.slug}       
      placeholder="blurred"
      layout="fixed"
      width={100}
      height={100} /> : 
      node.frontmatter.category === 'react' ?
    <StaticImage 
      src="../../../assets/react.png"
      alt={node.frontmatter.title || node.fields.slug}       
      placeholder="blurred"
      layout="fixed"
      width={100}
      height={100} /> :
      <StaticImage 
      src="../../../assets/svelte.png"
      alt={node.frontmatter.title || node.fields.slug}       
      placeholder="blurred"
      layout="fixed"
      width={100}
      height={100} />      
  }

    <div key={node.fields.slug}>
      <h2>{node.frontmatter.title || node.fields.slug}</h2>
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </div>
  </Link>
  )
}

import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export const Header = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    isRoot && (
      <div>
      <h1 className="home-header">
        <Link to={`/`} className="link">
          {title}
        </Link>
      </h1>
      <p>People come to Web development from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.
      Like any other technology, Javsscript and its libraries does have a learning curve. With practice and some patience, you will get the hang of it. We explain the most important concepts in a detailed, beginner-friendly way. 
      </p>
      </div>
    )
  )
}

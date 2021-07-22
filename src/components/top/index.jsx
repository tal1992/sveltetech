import React from 'react'
import { Link } from 'gatsby'
import { TwitterProfile } from '../social-share/twitter-profile'
import { Linkedin } from '../social-share/linkedin';

import './index.scss'

export const Top = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    <div className="top">
      {(
        <Link to={`/`} className="link">
          {title}
        </Link>
      )}
      <TwitterProfile />
      <Linkedin />
    </div>
  )
}

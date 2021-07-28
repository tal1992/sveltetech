import React from 'react'

import './index.scss'

export const Linkedin = ({ onClick }) => (
  <a
    className="resp-sharing-button__link linkedin"
    href="https://www.linkedin.com/in/iamtalvinder/"
    rel="noopener"
    aria-label="Follow on Linkedin"
    onClick={onClick}
    target="_blank"
  >
    <div className="resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--large">
      <div
        aria-hidden="true"
        className="resp-sharing-button__icon resp-sharing-button__icon--solid"
      >
      <svg version="1.1" viewBox="0 0 350 350" xmlns="http://www.w3.org/2000/svg">
      <desc>Created with Fabric.js 1.7.22</desc>
      <g transform="translate(-1.9444 -1.9444) scale(3.89)" strokeLinecap="round">
        <path d="M 0 6.447 C 0 2.887 2.978 0 6.651 0 h 76.698 C 87.022 0 90 2.887 90 6.447 v 77.106 C 90 87.114 87.022 90 83.349 90 H 6.651 C 2.978 90 0 87.114 0 83.553 V 6.447 z" fill="#069"/>
        <path d="m20.485 29.151c4.74 0 7.691-3.121 7.691-7.021-0.088-3.988-2.95-7.022-7.601-7.022-4.65 0-7.69 3.034-7.69 7.022 0 3.9 2.95 7.021 7.512 7.021h0.088z" fill="#fff"/>
        <path d="m27.282 75.339v-40.64h-13.594v40.64h13.594z" fill="#fff"/>
        <path d="m34.804 75.339h13.594v-22.695c0-1.215 0.088-2.428 0.447-3.296 0.983-2.427 3.219-4.94 6.975-4.94 4.919 0 6.887 3.727 6.887 9.19v21.741h13.592v-23.302c0-12.483-6.706-18.291-15.65-18.291-7.333 0-10.553 4.073-12.342 6.847h0.091v-5.894h-13.594c0.178 3.814 0 40.64 0 40.64z" fill="#fff"/>
      </g>
      </svg>
      </div>
    </div>
  </a>
)

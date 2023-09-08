import React from 'react';
import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">Srushti Maske</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://bit.ly/3RctGep" alt="" />
    </div>
  )
}

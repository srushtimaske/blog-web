import React from 'react';
import { Link } from 'react-router-dom';
import "./topbar.css"

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                <li className="topListItem"><Link className="link" to="/about">ABOUT</Link></li>
                <li className="topListItem"><Link className="link" to="/contact">CONTACT</Link></li>
                <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                <li className="topListItem">{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <img className="topImg" src="https://scontent.fnag10-1.fna.fbcdn.net/v/t39.30808-6/372920090_2253633581487177_3410445083966306627_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=W9kcG6t0WlEAX8AcJ-K&_nc_ht=scontent.fnag10-1.fna&oh=00_AfCh6Zt-2uTIVunUvhX8jfZVF4k92YTBeM3534o-AfXdTg&oe=64F41DBB" alt="" />
            ) : (
              <ul className="topList">
                <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
                <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
            </ul>
            )
          }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

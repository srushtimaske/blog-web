import React from 'react';
import "./sidebar.css"


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://scontent.fbom9-1.fna.fbcdn.net/v/t39.30808-6/376830567_2259496860900849_3982363567619832649_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=LKw6-QVtltAAX9Q63R7&_nc_ht=scontent.fbom9-1.fna&oh=00_AfDX4qndqojZbHp3edIMRJDgZlj-Asf0iyWuOfgXbX6vyQ&oe=65005810" alt="" />
            <span className="sidebarTitle">Srushti Maske</span>
            <p>I'm thrilled to announce that I'm embarking on a new journey—creating my very own blog! In this space, I aim to share my thoughts, experiences, and passions with all of you. As for a little glimpse into who I am, I have a deep love for reading books, immersing myself in the world of music, losing track of time in the magic of movies, and finding my heart in the realm of sports. These interests have been my constant companions, shaping my perspective and adding color to the canvas of my life. Through my blog, I hope to connect with like-minded individuals and explore the endless possibilities that these passions bring to each of us. So, join me on this exciting journey as we delve into the world of books, melodies, films, and the thrill of sports, all wrapped up in my personal perspective and experiences.
            </p>
            
        </div>
        <div className="sidebarItem">
           <span className="sidebarTitle">CATAGORIES</span> 
           <ul className="sidebarList">
            <li className="sidebarListItems">Life</li>
            <li className="sidebarListItems">Music</li>
            <li className="sidebarListItems">Style</li>
            <li className="sidebarListItems">Sport</li>
            <li className="sidebarListItems">Tech</li>
            <li className="sidebarListItems">Photography</li>
           </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
  )
}

import React from 'react';
import "./post.css"
import Posts from '../posts/Posts';

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://i.ytimg.com/vi/oE7KaGG48Fs/mqdefault.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                MY FIRST POST
            </span>
            <hr />
            <span className="postDate">
                1 hr ago
            </span>
        </div>
        <p className="postDesc">
In my very first blog post, I'm thrilled to invite you into my world as a Computer Science and Engineering student at BNCOE Pusad. College life is a thrilling journey, and it's here at this esteemed institution that I've embarked on a path to explore the ever-expanding universe of technology.

BNCOE Pusad isn't just a place of learning; it's a vibrant ecosystem brimming with creativity, innovation, and camaraderie. From the cutting-edge laboratories where ideas take shape to the engaging lectures that ignite our intellectual curiosity, every day at BNCOE brings new challenges and opportunities.

As a computer science enthusiast, I'm immersed in a world of coding, algorithms, and the boundless possibilities of software engineering. Together with my fellow students and dedicated professors, I'm on a quest to unravel the mysteries of technology and contribute to the digital revolution.
        </p>
    </div>
  )
}


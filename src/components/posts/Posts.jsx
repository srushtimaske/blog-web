import React from 'react';
import Post from "../Post/Post"
import "./posts.css"
import Post01 from '../Post/Post01';

export default function Posts() {
  return (
    <div className="posts">
        <Post/>

        <Post01/>
    </div>
  )
}

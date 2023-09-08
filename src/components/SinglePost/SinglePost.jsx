
import "./singlePost.css"
import React from 'react';
export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://bit.ly/4613dol" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                First Post
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Roshan Mungane</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
        </div>
        <p className="singlePostDesc">
        This is my first poem I think it is important to remember that everyone's first poem is different. Some people may write a poem that is very polished and professional, while others may write a poem that is more raw and emotional. There is no right or wrong way to write a poem, as long as it comes from the heart.
        </p>
    </div>
  )
}

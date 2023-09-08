import React from 'react';
import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://scontent.fnag10-1.fna.fbcdn.net/v/t39.30808-6/372916965_2254231751427360_2642459319826563544_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=s9Y03IZr7icAX-XU-W7&_nc_ht=scontent.fnag10-1.fna&oh=00_AfAiLwXgqlQkfXJGLC1vop2ehPE0u4oI5JPEznab9tt9Bg&oe=64F502D6" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-regular fa-square-plus"></i>  
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story...!" type="text" className="writeInput writeText">
                </textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

import React from 'react';
import "./post.css"
import Posts from '../posts/Posts';

export default function Post01() {
  return (
    <div className="post">
        <img className="postImg" src="https://www.mapsofindia.com/ci-moi-images/my-india/2015/04/history-of-indian-cinema.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Movie</span>
            </div>
            <span className="postTitle">
                Bollywood
            </span>
            <hr />
            <span className="postDate">
                1 hr ago
            </span>
        </div>
        <p className="postDesc">
        I'm delving into the captivating world of cinema, with a special focus on my deep fascination for Bollywood. Movies have a unique ability to transport us to different worlds, evoke powerful emotions, and spark meaningful conversations. For me, Bollywood holds a special place, known for its vibrant storytelling, memorable music, and iconic performances. Whether it's the enchanting romances, gripping dramas, or the foot-tapping dance numbers, Bollywood movies offer a diverse and dynamic cinematic experience. Join me as we embark on a cinematic journey, exploring the magic of storytelling, the impact of visual artistry, and the cultural significance of Bollywood in the global film landscape.
        </p>
    </div>
  )
}
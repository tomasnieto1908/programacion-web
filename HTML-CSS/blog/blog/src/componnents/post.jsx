import React from "react";
import "./post.css";

function Post({ title, description, image }) {
  return (
    <div className="post">
      <img src={image} alt={title} className="post-image" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Post;

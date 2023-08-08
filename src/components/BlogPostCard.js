import React from 'react';
import '../assets/css/BlogPostCard.css';

function BlogPostCard({ featuredImage, heading, shortDescription }) {
  return (
    <div className="blog-post-card">
      <img src={featuredImage} alt="Blog Post" className="thumbnail" />
      <div className="content">
        <h2 className="heading">{heading}</h2>
        <p className="short-description">{shortDescription}</p>
      </div>
    </div>
  );
}

export default BlogPostCard;
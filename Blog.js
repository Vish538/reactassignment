import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <section className="blog">
        <br></br>
      <h2>Blog</h2>
      <div className="blog-post">
        <h3>How to Master JavaScript</h3>
        <p>Published on March 2022</p>
        <p>Learn the best practices for mastering JavaScript...</p>
      </div>
      <div className="blog-post">
        <h3>UI/UX Design Trends for 2023</h3>
        <p>Published on January 2023</p>
        <p>Discover the latest UI/UX design trends for this year...</p>
      </div>
    </section>
  );
}

export default Blog;

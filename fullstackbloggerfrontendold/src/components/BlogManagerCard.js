import React from "react";

const BlogManagerCard = (props) => {
  const { blog, deleteBlog, fetchBlogAndShow } = props;
  return (
    <div className="blogPost">
      <p>
        <span>
          <strong> ID: </strong>
          <br />
        </span>
        {blog.id}
      </p>
      <p>
        <span>
          <strong> Title: </strong>
          <br />
        </span>
        {blog.title}
      </p>
      <p>
        <span>
          <strong> Author: </strong>
          <br />
        </span>
        {blog.author}
      </p>
      <p>
        <span>
          <strong> Created At: </strong>
          <br />
        </span>
        {blog.createdAt}
      </p>
      {/* <p>
        <span>
          <strong> Last Modified: </strong>
          <br />
        </span>
        {blog.lastModified}
      </p> */}
      <button
        onClick={async () => {
          await deleteBlog(blog.id);
        }}
      >
        Delete
      </button>
      <br />
      <button
        onClick={async () => {
          await fetchBlogAndShow();
        }}
      >
        Edit Blog
      </button>
    </div>
  );
};

export default BlogManagerCard;

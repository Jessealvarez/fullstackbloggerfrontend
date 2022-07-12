import React from "react";
import { useState } from "react";
const PostBlogPage = () => {
  // * Add three new state variables:
  //   * title {string}
  //   * author {string}
  //   * text {string}
  // * Add the following input fields:
  //   * title
  //     * Should be a text input field
  //   * author
  //     * Should be a text input field
  //   * text
  //     * Should be a <textarea> field
  // * Hook up all input fields to their corresponding state variables
  // * Add a <button> called Submit
  // * The Submit button should call props.blogSubmit(blogData) onClick and then programatically redirect to the home page.
  const [blogTitle, setBlogTitle] = useState("title");
  const [blogAuthor, setBlogAuthor] = useState("author");
  const [blogText, setBlogText] = useState("text");
  return (
    <div>
      <label>Title</label>
      <input
        type="text"
        placeholder="Insert Title"
        onChange={(e) => setBlogTitle(e.target.value)}
      ></input>
      <br />
      <label>Author</label>
      <input
        type="text"
        placeholder="Insert Author"
        onChange={(e) => setBlogAuthor(e.target.value)}
      ></input>
      <br />
      <label>Text</label>
      <input
        type="text"
        placeholder="Insert Text"
        onChange={(e) => setBlogText(e.target.value)}
      ></input>
      <br />
      <button
        type="submit"
        onClick={() => {
          props.blogSubmit({
            title: blogTitle,
            author: blogAuthor,
            text: blogText,
          });
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default PostBlogPage;

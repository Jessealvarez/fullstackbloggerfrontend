import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validateBlog from "../Utilities/Validation";

const PostBlogPage = ({ blogSubmit }) => {
  const [blogTitle, setBlogTitle] = useState("title");
  const [blogAuthor, setBlogAuthor] = useState("author");
  const [blogText, setBlogText] = useState("text");
  const [resMessg, setResMssg] = useState("");
  const navigate = useNavigate();
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
        onClick={async () => {
          const validateBlogEntry = validateBlog({
            title: blogTitle,
            author: blogAuthor,
            text: blogText,
          });
          if (validateBlogEntry.isValid === false) {
            setResMssg(validateBlogEntry.mssg);
          }
          if (validateBlogEntry.isValid === true) {
            const { success, message } = await blogSubmit({
              title: blogTitle,
              author: blogAuthor,
              text: blogText,
            });
            setResMssg(message);
            if (success === true) {
              navigate("/");
            }
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default PostBlogPage;

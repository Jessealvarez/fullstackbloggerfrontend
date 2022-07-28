import React from "react";

const validateBlog = (blog) => {
  if (blog.title && blog.author && blog.text) {
    return { isValid: true };
  }
  const missingTitle = blog.title ? (
    ""
  ) : (
    <div>
      <br /> - Title
    </div>
  );
  const missingAuthor = blog.author ? (
    ""
  ) : (
    <div>
      <br /> - Author
    </div>
  );
  const missingText = blog.text ? (
    ""
  ) : (
    <div>
      <br /> - Text
    </div>
  );
  const newMissingMessage = (
    <div>
      Please include:
      {missingTitle}
      {missingAuthor}
      {missingText}
    </div>
  );
  return { isValid: false, mssg: newMissingMessage };
};

export default validateBlog;

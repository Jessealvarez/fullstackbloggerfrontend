import React from "react";

const BlogsPage = ({
  blogs,
  sortField,
  setSortField,
  setSortOrder,
  filterField,
  setFilterField,
  filterValue,
  setFilterValue,
  limit,
  setLimit,
  page,
  setPage,
}) => {
  return (
    <div className="blogs-page">
      <h1>Blogs Page</h1>
      <label>Sort Field:</label>
      <select>
        <option
          value="title"
          onChange={(e) => {
            const newSortField = e.target.value;
            setSortField(newSortField);
          }}
        >
          Title
        </option>
        <option
          value="author"
          onChange={(e) => {
            const newSortField = e.target.value;
            setSortField(newSortField);
          }}
        >
          Author
        </option>
        <option value="created">Created At</option>
      </select>
      <br />
      <label>Sort Order:</label>
      <select>
        <option
          value="ASC"
          onChange={(e) => {
            const newSortOrder = e.target.value;
            setSortOrder(newSortOrder);
          }}
        >
          ASC
        </option>
        <option
          value="DESC"
          onChange={(e) => {
            const newSortField = e.target.value;
            setSortField(newSortField);
          }}
        >
          DESC
        </option>
      </select>
      <br />
      <label>Filter Field:</label>
      <select>
        <option
          value="filter-title"
          onChange={(e) => {
            const newFilterField = e.target.value;
            setFilterField(newFilterField);
          }}
        >
          Title
        </option>
        <option
          value="filter-author"
          onChange={(e) => {
            const newFilterField = e.target.value;
            setFilterField(newFilterField);
          }}
        >
          Author
        </option>
      </select>
      <br />
      <label>Post Limit:</label>
      <input
        type="number"
        //so that an int less than ONE cant be input
        min="1"
        value={limit}
        onChange={(e) => {
          const newLimit = e.target.value;
          setLimit(newLimit);
        }}
      ></input>
      <br />
      <input
        placeholder="Page"
        type="number"
        min="1"
        value={page}
        onChange={(e) => {
          const newPage = e.target.value;
          setPage(newPage);
        }}
      ></input>
      <div>
        {blogs.map((blog) => {
          return <BlogPost blog={blog} key={blog.id} />;
        })}
      </div>
    </div>
  );
};

const BlogPost = ({ blog }) => {
  return (
    <div className="blogPost">
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
          <strong> Category: </strong>
          <br />
        </span>
        {blog.category}
      </p>
      <p>
        <span>
          <strong> Text: </strong>
          <br />
        </span>
        {blog.text}
      </p>
    </div>
  );
};

export default BlogsPage;

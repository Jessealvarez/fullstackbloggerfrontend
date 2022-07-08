import React from "react";

const BlogsPage = ({
  blogs,
  sortField,
  setSortField,
  sortOrder,
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
      <select
        value={sortField}
        onChange={(event) => {
          const newSortField = event.target.value;
          setSortField(newSortField);
        }}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="created">Created At</option>
      </select>
      <br />
      <label>Sort Order:</label>
      <select
        value={sortOrder}
        onChange={(event) => {
          const newSortOrder = event.target.value;
          setSortOrder(newSortOrder);
        }}
      >
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
      <br />
      <label>Filter Field:</label>
      <select
        value={filterField}
        onChange={(event) => {
          const newFilterField = event.target.value;
          setFilterField(newFilterField);
        }}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      <br />
      <label>Filter Value: </label>
      <input
        type="text"
        value={filterValue}
        onChange={(event) => {
          const newFilterValue = event.target.value;
          setFilterValue(newFilterValue);
        }}
      ></input>
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

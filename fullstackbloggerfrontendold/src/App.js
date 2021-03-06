import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

//Pages
import BlogsPage from "./Pages/Blogs";
import PostBlogPage from "./Pages/PostBlogPage";

const urlEndpoint = "http://localhost:4000";

function App() {
  const [serverJSON, setServerJSON] = useState({ message: [] });
  const [sortField, setSortField] = useState("title");
  const [sortOrder, setSortOrder] = useState("ASC");
  const [filterField, setFilterField] = useState("title");
  const [filterValue, setFilterValue] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const blogSubmit = async (blog) => {
    const url = `${urlEndpoint}/blogs/blog-submit?sortOrder=desc&sortField=id`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    const responseJSON = await response.json();
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = `${urlEndpoint}/blogs/all-blogs?sortField=${sortField}&sortOrder=${sortOrder}&filterField=${filterField}&filterValue=${filterValue}&limit=${limit}&page=${page}`;

      const apiResponse = await fetch(url);
      const apiJSON = await apiResponse.json();
      setServerJSON(apiJSON);
      return;
    };
    fetchData();
  }, [sortField, sortOrder, filterField, filterValue, limit, page]);
  return (
    <div className="App">
      <header className="header">
        <Routes>
          <Route
            path="/blogs"
            element={
              <BlogsPage
                blogs={serverJSON.message}
                sortField={sortField}
                setSortField={setSortField}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                filterField={filterField}
                setFilterField={setFilterField}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                limit={limit}
                setLimit={setLimit}
                page={page}
                setPage={setPage}
              />
            }
          ></Route>
          <Route
            path="/post-blog"
            element={<PostBlogPage blogSubmit={blogSubmit} />}
          ></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;

//In the JSX of App, nest a new <Route> in <Routes> with the path="/blogs" with the element={<BlogsPage message={serverJSON.message}/>}.

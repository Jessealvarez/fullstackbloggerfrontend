import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

//Pages
import BlogsPage from "./Pages/Blogs";

const urlEndpoint = "http://localhost:4000";

function App() {
  const [serverJSON, setServerJSON] = useState({ message: [] });

  useEffect(() => {
    const fetchData = async () => {
      const url = `${urlEndpoint}/blogs/all-blogs`;
      const apiResponse = await fetch(url);
      const apiJSON = await apiResponse.json();
      setServerJSON(apiJSON);
      return;
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="header">
        <Routes>
          <Route
            path="/blogs"
            element={<BlogsPage blogs={serverJSON.message} />}
          ></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;

//In the JSX of App, nest a new <Route> in <Routes> with the path="/blogs" with the element={<BlogsPage message={serverJSON.message}/>}.

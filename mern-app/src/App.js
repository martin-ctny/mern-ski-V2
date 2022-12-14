import "./App.css";
import PostList from "./App/PostList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardDetails from "./App/CardDetails";
import { useEffect, useState } from "react";
import postsService from "./setup/services/post.service";

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await postsService.getPosts();
    setPosts(response);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostList posts={posts} />} />
          <Route path="/posts/:_id" element={<CardDetails posts={posts} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import PostList from "./App/pages/PostList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardDetails from "./App/pages/CardDetails";
import { useEffect, useState } from "react";
import postsService from "./setup/services/post.service";
import ShopList from "./App/pages/ShopList";
import ShopPW from "./App/pages/ShopPW";
import ShopsForm from "./App/components/ShopsForm";
import Header from "./App/layout/Header";

import AllBookings from "./App/components/AllBookings";

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
        <Header>
          <Routes>
            <Route path="/" element={<PostList posts={posts} />} />
            <Route path="/posts/:_id" element={<CardDetails posts={posts} />} />
            <Route path="/shops" element={<ShopList />} />
            <Route path="/shops/:id" element={<ShopPW />} />
            <Route path="/shops/editform/:idShop" element={<ShopsForm />} />
            <Route path="/shops/postform/:idPost" element={<ShopsForm />} />
            <Route path="/shops/booking/:id" element={<AllBookings />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </>
  );
}

export default App;

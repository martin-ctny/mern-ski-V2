import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import postsService from "../../setup/services/post.service";
import shopsService from "../../setup/services/shop.service";

const BookingList = () => {
  const { id } = useParams();
  const [shop, setShop] = useState({});
  const [postsID, setPostsID] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchShop = async () => {
    try {
      const response = await shopsService.getShop(id);
      setShop(response);
    } catch (err) {
      console.log(err);
    }
  };

  const postIDList = () => {
    shop.posts &&
      shop.posts.map((post) => {
        console.log(post._id);
        setPostsID([...postsID, post._id]);
      });
  };

  const postsList = () => {
    postsID.map(async (post) => {
      const response = await postsService.getOnePost(post);
      setPosts([...posts, response.booking]);
    });
    setLoading(false);
  };
  useEffect(() => {
    fetchShop();
    console.log(shop);
  }, []);

  useEffect(() => {
    postIDList();
  }, [shop]);
  useEffect(() => {
    postsList();
  }, [postsID]);

  return (
    <div>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div>
          {posts.map((post) =>
            post.map((book) => <p>{book.telephoneNumber}</p>)
          )}
          {posts.map((post) => post.map((book) => <p>{book._id}</p>))}
          {posts.map((post) => post.map((book) => <p>{book.createdAt}</p>))}
        </div>
      )}
    </div>
  );
};

export default BookingList;

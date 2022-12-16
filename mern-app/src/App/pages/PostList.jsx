import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SizeSearch from "../components/SizeSearch";
import StyleSearch from "../components/StyleSearch";
import WeightSearch from "../components/WeightSearch";

const PostList = ({ posts }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState([]);
  const naviguate = useNavigate();

  const handleClick = (e, _id) => {
    e.preventDefault();
    console.log(_id);
    naviguate(`/posts/${_id}`);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    if (e.target.value.length > 0) {
      setIsSearch(true);
      const filteredTitle = posts.filter((post) =>
        post.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearch(filteredTitle);
    } else {
      setIsSearch(false);
      setSearch([]);
    }
  };

  return (
    <div className="map">
      <input onChange={handleSearch} type="text" placeholder="rechercher" />
      <WeightSearch
        setIsSearch={setIsSearch}
        posts={posts}
        setSearch={setSearch}
      />
      <StyleSearch
        setIsSearch={setIsSearch}
        posts={posts}
        setSearch={setSearch}
      />
      <SizeSearch
        setIsSearch={setIsSearch}
        posts={posts}
        setSearch={setSearch}
      />
      {isSearch
        ? search.map((post) => (
            <div className="card" key={post.id}>
              <img src={post.imageUrl} alt="" />
              <div className="right">
                <h2>{post.title}</h2>
                <h2>poids : {post.weight}</h2>
                <h2>style : {post.style}</h2>
                <h2>{post.price}€ / J</h2>
                <h2>{post.size} cm</h2>
                <h3>{post.description}</h3>
                <h3>{post._id}</h3>
                <button onClick={(e) => handleClick(e, post._id)}>
                  Détails
                </button>
              </div>
            </div>
          ))
        : posts.map((post) => (
            <div className="card" key={post.id}>
              <img src={post.imageUrl} alt="" />
              <div className="right">
                <h2>{post.title}</h2>
                <h2>poids : {post.weight}</h2>
                <h2>style : {post.style}</h2>
                <h2>{post.price}€ / J</h2>
                <h2>{post.size} cm</h2>
                <h3>{post.description}</h3>
                <h3>{post._id}</h3>
                <button onClick={(e) => handleClick(e, post._id)}>
                  Détails
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default PostList;

import { useNavigate } from "react-router-dom";
import postsService from "../setup/services/post.service";
import UpdateLogo from "./UpdateLogo";

const PostsShopList = ({ shop, fetchShop }) => {
  const navigate = useNavigate();
  const handleClick = async (e, _id) => {
    e.preventDefault();
    try {
      await postsService.deletePost(_id);
      fetchShop();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreate = () => {
    navigate(`/shops/postform/${shop._id}`);
  };
  const handleUpdate = (e, _id) => {
    navigate(`/shops/editform/${_id}`);
  };
  return (
    <div>
      <UpdateLogo shop={shop} fetchShop={fetchShop} />
      <button onClick={handleCreate}>Creer un post</button>

      {shop.posts.map((post) => (
        <div className="card" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.price}</p>
          <p>{post.style}</p>
          <button onClick={(e) => handleUpdate(e, post._id)}>Update</button>
          <button onClick={(e) => handleClick(e, post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostsShopList;

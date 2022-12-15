import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import postsService from "../setup/services/post.service";

const ShopsForm = () => {
  const navigate = useNavigate();
  const { idShop } = useParams();
  const { idPost } = useParams();
  const [credantials, setCredantials] = useState({});
  const [editMode] = useState(idShop ? true : false);

  const fetchPost = async () => {
    const response = await postsService.getOnePost(idShop);
    setCredantials(response);
  };
  useEffect(() => {
    console.log(idShop);
    console.log(idPost);
    if (editMode) {
      fetchPost();
    } else {
      credantials.shop = idPost;
    }
  }, [idShop]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editMode ? "updatePost" : "createPost";
    console.log(credantials);
    try {
      if (editMode) {
        await postsService.updatePost(idShop, credantials);
        navigate(`/shops/${credantials.shop}`);
      } else {
        await postsService.createPost(credantials);
        navigate(`/shops/${idPost}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setCredantials({ ...credantials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="title"
          id="tilte"
          placeholder="Title : "
        />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="imageUrl"
          id="imageUrl"
          placeholder="imageUrl : "
        />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="weight"
          id="weight"
          placeholder="weight : "
        />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="size"
          id="size"
          placeholder="size : "
        />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="style"
          id="style"
          placeholder="style : "
        />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="price"
          id="price"
          placeholder="price : "
        />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="description"
          id="description"
          placeholder="description : "
        />
        <button>{editMode ? "Modifier" : "Creer"}</button>
      </form>
    </div>
  );
};

export default ShopsForm;

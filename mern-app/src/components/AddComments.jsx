import { useState } from "react";

import postsService from "../setup/services/post.service";

const AddComments = ({ fetchPost, id }) => {
  const [newComments, setNewComments] = useState({
    username: "",
    description: "",
    starts: "",
    post: id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComments({ ...newComments, [name]: value });
    console.log(id);
  };

  const handleClick = (e) => {
    postsService.postComments(newComments).then((res) => {
      console.log(res);
    });
    setNewComments({ ...newComments, posts: id });
    fetchPost();
  };

  return (
    <form>
      <input
        type="text"
        name="username"
        onChange={(e) => handleChange(e)}
        placeholder="Votre Nom"
      />
      <input
        type="text"
        name="description"
        onChange={(e) => handleChange(e)}
        placeholder="Commentaire"
      />
      <input
        type="text"
        name="starts"
        onChange={(e) => handleChange(e)}
        placeholder="stars"
      />
      <button type="submit" onClick={handleClick}>
        Ajouter un commentaire
      </button>
    </form>
  );
};

export default AddComments;

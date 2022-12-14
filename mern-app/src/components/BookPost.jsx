import { useState } from "react";
import { useParams } from "react-router-dom";
import postsService from "../setup/services/post.service";

const BookPost = () => {
  const { _id } = useParams();

  const [booking, setBooking] = useState({
    telephoneNumber: "",
    post: _id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postsService.postBooking(booking).then((res) => {
      console.log(res);
    });
    setBooking({ ...booking, post: _id });
  };

  return (
    <form action="submit">
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        name="telephoneNumber"
        placeholder="Entrez votre numéro de telephone"
      />
      <button onClick={handleSubmit}>Réserver</button>
    </form>
  );
};

export default BookPost;

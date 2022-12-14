// import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AddComments from "../components/AddComments";
import BookPost from "../components/BookPost";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import postsService from "../setup/services/post.service";

const CardDetails = ({ posts }) => {
  const naviguate = useNavigate();

  const [post, setPost] = useState({});

  const { _id } = useParams();

  const fetchPost = async () => {
    try {
      const response = await postsService.getOnePost(_id);
      setPost(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
    console.log(post);
  }, []);

  const Back = () => {
    naviguate(`/`);
  };

  return (
    <div className="details">
      <button onClick={Back}>Retour</button>
      <div className="all-comments">
        <AddComments id={_id} fetchPost={fetchPost} />
        {post.comments &&
          post.comments.map((comment) => (
            <div className="comment" key={comment.id}>
              <h3>{comment.username}</h3>
              <h3>{comment.description}</h3>
              <h3>{comment.starts}</h3>
            </div>
          ))}
      </div>
      <div className="card-detail">
        <div className="">
          <img src={post.imageUrl} alt="" />
          <div className="right">
            <h2>{post.title}</h2>
            <h2>{post.weight}</h2>
            <h2>{post.style}</h2>
            <h2>{post.price}€ / J</h2>
            <h2>{post.size} cm</h2>
            <h3>{post.description}</h3>
          </div>
        </div>
        <BookPost />
      </div>
    </div>
  );
};

export default CardDetails;

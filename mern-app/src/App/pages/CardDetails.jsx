// import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AddComments from "../components/AddComments";
import BookPost from "../components/BookPost";
import StarsMedium from "../components/StarMedium";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import postsService from "../../setup/services/post.service";

const CardDetails = () => {
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
  }, []);

  const Back = () => {
    naviguate(`/`);
  };

  return (
    <div className="details">
      <button className="btn" onClick={Back}>
        Retour
      </button>
      <div className="all-comments">
        <AddComments id={_id} fetchPost={fetchPost} />
        {post.comments &&
          post.comments.map((comment) => (
            <div className="comment" key={comment.id}>
              <div className="topComment">
                <h3>{comment.username}</h3>
                <h3>{comment.starts} étoiles</h3>
              </div>
              <h3>{comment.description}</h3>
            </div>
          ))}
      </div>
      <div className="card-detail">
        <div className="">
          <img src={post.imageUrl} alt="" />
          <div className="rightDetails">
            <StarsMedium post={post} />
            <h2>{post.title}</h2>
            <h2>{post.weight} kg</h2>
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

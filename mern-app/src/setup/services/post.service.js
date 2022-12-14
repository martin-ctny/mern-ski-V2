import instance from "./api.service";

const getPosts = async () => {
  const response = await instance.get("/posts");
  return response.data;
};
const getOnePost = async (id) => {
  const response = await instance.get(`/posts/${id}`);
  return response.data;
};

const postComments = async (credentials) => {
  const response = await instance.post("/comments", credentials);
  return response.data;
};
const postBooking = async (credentials) => {
  const response = await instance.post("/booking", credentials);
  return response.data;
};

const postsService = {
  getPosts,
  getOnePost,
  postComments,
  postBooking,
};

export default postsService;

import instance from "./api.service";

const getShops = async () => {
  const response = await instance.get("/shops");
  return response.data;
};

const getShop = async (id) => {
  const response = await instance.get(`/shops/${id}`);
  return response.data;
};

const shopsService = {
  getShops,
  getShop,
};

export default shopsService;

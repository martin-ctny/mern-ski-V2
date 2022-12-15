import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Password from "../components/Password";
import PostsShopList from "../components/PostsShopList";
import shopsService from "../../setup/services/shop.service";

const ShopPW = () => {
  const { id } = useParams();
  const [shop, setShop] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  const fetchShop = async () => {
    try {
      const response = await shopsService.getShop(id);
      setShop(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchShop();
  }, []);

  return (
    <div>
      {isConnected !== true ? (
        <Password shop={shop} setIsConnected={setIsConnected} />
      ) : (
        <PostsShopList shop={shop} fetchShop={fetchShop} />
      )}
    </div>
  );
};

export default ShopPW;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Password from "../components/Password";
import shopsService from "../setup/services/shop.service";

const ShopPW = () => {
  const { id } = useParams();
  const [shop, setShop] = useState([]);

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

  return <Password shop={shop} />;
};

export default ShopPW;

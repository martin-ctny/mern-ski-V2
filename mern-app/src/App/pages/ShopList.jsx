import { useEffect } from "react";
import { useState } from "react";
import MapShops from "../components/MapShops";
import shopService from "../../setup/services/shop.service";

const ShopList = () => {
  const [shopList, setShopList] = useState([]);

  const fetchShopList = async () => {
    try {
      const response = await shopService.getShops();
      setShopList(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchShopList();
  }, []);

  return <MapShops shopList={shopList} />;
};

export default ShopList;

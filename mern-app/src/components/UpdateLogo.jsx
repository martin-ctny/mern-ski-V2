import { useState } from "react";
import shopsService from "../setup/services/shop.service";

const UpdateLogo = ({ shop, fetchShop }) => {
  const [logo, setLogo] = useState("");
  const [update, setUpdate] = useState(false);

  const handleClick = () => {
    setUpdate(true);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setLogo(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await shopsService.updateShop(shop._id, { logo });
      setUpdate(false);
      fetchShop();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <img src={shop.logo} alt="" />

      {update !== true ? (
        <button onClick={handleClick}> Modifier</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="logo"
            id="logo"
            placeholder="entrez le lien du logo"
          />
          <button> Modifier le logo</button>
        </form>
      )}
    </div>
  );
};

export default UpdateLogo;

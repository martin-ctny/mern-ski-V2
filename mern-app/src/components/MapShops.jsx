import { useNavigate } from "react-router-dom";

const MapShops = ({ shopList }) => {
  const navigate = useNavigate();

  const handleClick = (e, _id) => {
    navigate(`/shops/${_id}`);
  };
  return (
    <div>
      {shopList.map((shop) => (
        <div key={shop.id}>
          <img src={shop.image_url} alt={shop.name} />
          <p>{shop.adress}</p>
          <button onClick={(e) => handleClick(e, shop._id)}>
            accedez au shop
          </button>
        </div>
      ))}
    </div>
  );
};

export default MapShops;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import shopsService from "../../setup/services/shop.service";
import bookingService from "../../setup/services/booking.service";

const AllBookings = () => {
  const { id } = useParams();
  const [shop, setShop] = useState({});

  useEffect(() => {
    fetchShop();
  }, []);

  const fetchShop = async () => {
    try {
      const response = await shopsService.getShop(id);
      setShop(response);
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = async (e, _id) => {
    e.preventDefault();
    console.log(_id);
    // try {
    //   await bookingService.deleteBooking(_id);
    //   fetchShop();
    // } catch (err) {
    //   console.log(err);
    // }
    try {
      await bookingService.deleteBooking(_id);
      fetchShop();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {shop.booking &&
        shop.booking.map((booking) => (
          <div className="booking" key={booking._id}>
            <h2>{booking._id}</h2>
            <p>{booking.telephoneNumber}</p>
            <p>Date : {booking.createdAt}</p>
            <button onClick={(e) => handleClick(e, booking._id)}>delete</button>
          </div>
        ))}
    </div>
  );
};

export default AllBookings;

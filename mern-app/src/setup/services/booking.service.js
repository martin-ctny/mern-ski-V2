import instance from "./api.service";

const deleteBooking = async (id) => {
  try {
    const response = await instance.delete(`/booking/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const bookingService = {
  deleteBooking,
};

export default bookingService;

const baseURL = "http://localhost:5000/bookings/";

export const getBookings = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const postBooking = (booking) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(booking),
    headers: { "content-type": "application/json" },
  }).then((res) => res.json());
};

export const deleteBooking = (id) => {
  return fetch(baseURL + id, {
    method: "DELETE",
  });
};

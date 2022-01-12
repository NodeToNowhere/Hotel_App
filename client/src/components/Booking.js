import { FaTimes } from "react-icons/fa";
import { deleteBooking } from "./BookingsService";

const Booking = ({ booking, removeBooking, onToggle }) => {
  return (
    <div
      className={`booking ${booking.checked_in ? "checked" : ""}`}
      onDoubleClick={() => onToggle(booking._id)}
    >
      <h3>
        {booking.name}{" "}
        <FaTimes
          onClick={() =>
            deleteBooking(booking._id).then(() => {
              removeBooking(booking._id); //Added deleteBooking then updated state
            })
          }
        />
      </h3>
      <p>{booking.email}</p>
    </div>
  );
};

export default Booking;

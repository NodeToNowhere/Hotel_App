import { FaTimes } from "react-icons/fa";

const Booking = ({ booking, onDelete }) => {
  return (
    <div>
      <h3>
        {booking.name} <FaTimes onClick={() => onDelete(booking.id)} />
      </h3>
      <p>{booking.email}</p>
    </div>
  );
};

export default Booking;

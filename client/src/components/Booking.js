import { FaTimes } from "react-icons/fa";

const Booking = ({ booking, onDelete, onToggle }) => {
  return (
    <div className={`booking ${booking.checked_in ? "checked" : ""}`}
    onDoubleClick={() => onToggle(booking._id)}>
      <h3>
        {booking.name} <FaTimes onClick={() => onDelete(booking.id)} />
      </h3>
      <p>{booking.email}</p>
    </div>
  );
};

export default Booking;

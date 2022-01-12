import Booking from "./Booking";

const Bookings = ({ bookings, onDelete, onToggle }) => {
  return (
    <>
      {bookings.map((booking) => (
        <Booking
          key={booking.id}
          booking={booking}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Bookings;

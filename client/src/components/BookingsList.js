import Booking from "./Booking";

const BookingList = ({ bookings, removeBooking, onToggle }) => {
  // console.log(bookings[0]._id)
  return (
    <>
      {bookings.map((booking) => (
        <Booking
          key={booking._id}
          booking={booking}
          removeBooking={removeBooking}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default BookingList;

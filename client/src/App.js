import { useEffect, useState } from "react";
import Header from "./components/Header";
import { getBookings } from "./components/BookingsService";
import BookingsList from "./components/BookingsList";
import AddNewBooking from "./components/AddNewBooking";

function App() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings().then((allBookings) => {
      setBookings(allBookings);
    });
  }, []);

  const addBooking = (booking) => {
    const temp = bookings.map((b) => b);
    temp.push(booking);
    setBookings(temp);
  };

  const removeBooking = (id) => {
    const temp = bookings.map((s) => s);
    const indexToDel = temp.map((s) => s._id).indexOf(id);
    temp.splice(indexToDel, 1);
    setBookings(temp);
  };

  const toggleCheckIn = (id) => {
    setBookings(
      bookings.map((booking) =>
        booking._id === id
          ? { ...booking, checked_in: !booking.checked_in }
          : booking
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddNewBooking addBooking={addBooking} />

      {bookings.length > 0 ? (
        <BookingsList
          bookings={bookings}
          removeBooking={removeBooking}
          onToggle={toggleCheckIn}
        />
      ) : (
        "No Bookings to show"
      )}
    </div>
  );
}

export default App;

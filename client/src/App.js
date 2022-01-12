import { useEffect, useState } from "react";
import Header from "./components/Header";
import { getBookings } from "./components/BookingsService";
import BookingsList from "./components/BookingsList";
import AddNewBooking from "./components/AddNewBooking";

function App() {
  const [showAddGuest, setShowAddGuest] = useState(false);
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
    const temp = bookings.map((b) => b);
    const indexToDel = temp.map((b) => b._id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setBookings(temp);
  };

  const toggleCheckIn = (id) => { 
    setBookings(
      bookings.map((booking) => 
        booking._id === id ? {...booking, checked_in: !booking.checked_in}
       : booking ) 
    )
    
  }



  return (
    <div className="container">
      <Header onAdd={addBooking} showAddGuest={showAddGuest} />
      <AddNewBooking onAdd={addBooking}/>

      {bookings.length > 0 ? (
        <BookingsList bookings={bookings} onDelete={removeBooking} onToggle={toggleCheckIn} />
      ) : (
        "No Bookings to show"
      )}
    </div>
  );
}

export default App;

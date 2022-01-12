import { useEffect, useState } from "react";
import Header from "./components/Header";
import { getBookings } from './BookingsService';
// import './App.css';


function App() {
  
  const [showAddGuest, setShowAddGuest] = useState(false)
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    getBookings()
    .then((allBookings) => {
      setBookings(allBookings);
    })
  }, []);

  const addBooking = (booking) => {
    const temp = bookings.map(b => b);
    temp.push(booking);
    setBookings(temp);
  }

  const removeBooking = (id) => {
    const temp = bookings.map(b => b);
    const indexToDel = temp.map(b => b.id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setBookings(temp);
  }
  
  return (
    <div className="container">
      <Header onAdd={ addBooking } showAddGuest={ showAddGuest }/>
      
    </div>
  );
}

export default App;

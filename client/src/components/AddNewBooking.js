import { useState } from "react";
import { postBooking } from "./BookingsService";
// import PropTypes from "prop-types";

const AddNewBooking = ({ addBooking }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checked_in, setChecked_in] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      alert("Please enter a name");
      return;
    }

    if (!email) {
      alert("Please enter an email");
      return;
    }
    addBooking({ name, email, checked_in });

    postBooking({ name, email, checked_in }).then((data) => {
      addBooking(data); // This drove me mental - Eventually realised you can wrap the info into as an object and pass in too postBooking!!....

      setName("");
      setEmail("");
      setChecked_in(false);
    });
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          placeholder="Add Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Email</label>
        <input
          type="text"
          placeholder="Add Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Is guest checked in?</label>
        <input
          type="checkbox"
          checked={checked_in}
          value={checked_in}
          onChange={(e) => setChecked_in(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Booking" className="btn btn-block" />
    </form>
  );
};

export default AddNewBooking;

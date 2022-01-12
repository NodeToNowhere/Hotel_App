import { useState } from "react";

const addBooking = ({ onAdd }) => {
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
    onAdd({ name, email, checked_in})

    setName('')
    setEmail('')
    setChecked_in(false)
  };
};

return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={checked_in}
          value={checked_in}
          onChange={(e) => setChecked_in(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default addBooking;
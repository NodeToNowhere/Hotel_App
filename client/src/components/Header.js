import React from "react";

const Header = ({ onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>Hotel California Bookings</h1>
      {/* <Button color={showAdd ? 'red' : 'green'} text={showAdd ? "close" : "add"} onClick={onAdd}/> */}
    </header>
  );
};

export default Header;

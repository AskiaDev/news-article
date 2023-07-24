import React from "react";

const Navbar = (props) => {
  return (
    <div className="nav">
      <div className="nav-actions">
        <input type="checkbox" />
        <button className="btn btn-publish">Publish</button>
        <button className="btn btn-delete" onClick={props.onDelete}>
          Delete
        </button>
      </div>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default Navbar;

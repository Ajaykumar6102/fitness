import React from "react";
import { Link } from "react-router-dom";

const Neo = ({ books }) => {
  // Get the ID of the last entry
  const lastEntryId = books.length > 0 ? books[books.length - 1]._id : null;

  return (
    <div>
      <div className="bookList">
        <h1>Book List</h1>
        {lastEntryId && <p>Last Entry ID: {lastEntryId}</p>}
        <Link to={`/`}>
          <button className="add">Add Member</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Neo;

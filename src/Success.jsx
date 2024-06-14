import React from 'react'
import { Link } from "react-router-dom";

const Success = ({ books }) => {
  // Check if books is defined and not null
  if (!books || books.length === 0) {
    return (
      <div>
        <h1>No books found</h1>
        <Link to={`/`}>
          <button>Go to home</button>
        </Link>
      </div>
    );
  }

  const lastEntryId = books[books.length - 1]._id;
  const lastEntry = books[books.length - 1];

  return (
    <div>
      <div>
        <h1>Data registered successfully</h1>
        {lastEntryId && <p>Your Id: {lastEntryId}</p>}
        {lastEntry && <p>Title: {lastEntry.title}</p>}
        <Link to={`/ajay/${lastEntryId}`}>
          <button>Go to home</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Success;

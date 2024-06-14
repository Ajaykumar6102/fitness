import React from "react";
import { Link } from "react-router-dom";

const Home = ({ books }) => {
  return (
    <div>
      <div className="bookList">
        <h1>Member List</h1>
        <table>
          <thead>
            <tr>
              <th>sno</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Pack</th>
              <th>Coach</th>
              <th>Mode</th>
              <th>Operations</th>       
            </tr>
          </thead>
          <tbody>
            {books.slice().reverse().map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publishYear}</td>
                <td>{book.Pack}</td>
                <td>{book.coach}</td>
                <td>{book.mode}</td>
                <td>
                  <div className="op">
                    <Link to={`/books/show/${book._id}`}>
                      <span>show</span>
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <span>edit</span>
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <span>delete</span>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={`/`}>
          <button className="add">Add Member</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const CreateBook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [coach, setCoach] = useState("")
  const [errorMessage, setErrorMessage] = useState("");

  const saveBook = () => {
    // Check if author's email contains "@" symbol
    if (!author.includes("@")) {
      setErrorMessage("Invalid email format");
      return;
    }

    const data = {
      title,
      author,
      publishYear,
    };
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="form">
      <h1>Add Member</h1>
      <label><h2>Name</h2></label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <label><h2>Email</h2></label>
      <input
        type="email"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
          setErrorMessage(""); // Clear error message when input changes
        }}
      />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <label><h2>Password</h2></label>
      <input
        type="password"
        value={publishYear}
        onChange={(e) => setPublishYear(e.target.value)}
      />
      <button onClick={saveBook}>Save</button>
    </div>
  );
};

export default CreateBook;

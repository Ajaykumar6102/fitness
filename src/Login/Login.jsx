import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [author, setAuthor] = useState("");
  const [title,setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:5555/books?author=${author}`);
      console.log("Response data:", response.data); // Log the response data
      const userData = response.data.data; // Access the array of books from the 'data' property

      
      console.log("Publish Year entered:", title);
      console.log("User Data:", userData);

      if (userData.length === 0) {
        setErrorMessage("Data not found");
      } else {
        const matchedUser = userData.find(user => user.title === title);
        if (!matchedUser) {
          setErrorMessage("Author or Publish Year is not matched");
        } else {
          navigate(`/home/${matchedUser._id}`);
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("An error occurred while logging in. Please try again later.");
    }
  };

  return (
    <div className="form">
      <h2>Login</h2>
      <label><h2>Email</h2></label>
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <label><h2>Password</h2></label>
      <input type="password" value={title} onChange={(e) => setTitle(e.target.value)} />

    

      <button onClick={handleLogin}>Login</button>
      <p>{errorMessage}</p>
      <div>
        <Link to="/ajay">New User? Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
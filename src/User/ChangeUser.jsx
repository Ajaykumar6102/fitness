import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

export const ChangeUser = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [publishYear, setPublishYear] = useState();
  const [Pack, setPack] = useState();
  const [coach, setCoach] = useState();
  const [mode, setMode] = useState();
  const [fees, setFees] = useState(0); // State to store the calculated fees

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    axios.get(`http://localhost:5555/books/${id}`).then((res) => {
      setTitle(res.data.title);
      setAuthor(res.data.author);
      setPublishYear(res.data.publishYear);
      setPack(res.data.Pack);
      setCoach(res.data.coach);
      setMode(res.data.mode);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    // Calculate fees based on mode and pack
    let calculatedFees = 0;
    if (mode === "Basic") {
      calculatedFees = 25 * Pack;
    } else if (mode === "Premium") {
      calculatedFees = 30 * Pack;
    } else if (mode === "Professional") {
      calculatedFees = 45 * Pack;
    }
    setFees(calculatedFees);
  }, [mode, Pack]); // Recalculate fees when mode or pack changes

  const editBook = () => {
    const data = {
      title,
      author,
      publishYear,
      Pack,
      coach,
      mode,
    };
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => console.log(err.message));
  };
  
  return (
    <div className="form">
      <h1>Edit Member</h1>
      <label>Name</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>email</label>
      <input
        type="email"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label>password</label>
      <input
        type="text"
        value={publishYear}
        onChange={(e) => setPublishYear(e.target.value)}
      />
      <label>pack</label>
      <input
        type="text"
        value={Pack}
        onChange={(e) => setPack(e.target.value)}
      />
      <label>coach</label>
      <input
        type="text"
        value={coach}
        onChange={(e) => setCoach(e.target.value)}
      />
      <label>Mode</label>
      <input
        type="text"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      />
      <label>Fees</label>
      <input
        type="text"
        value={fees}
        readOnly
      />
      <button onClick={editBook}>edit Member</button>
    </div>
  );
};

export default ChangeUser;

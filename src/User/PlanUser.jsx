import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

export const PlanUser = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [coach, setCoach] = useState("");
  const [Pack, setPack] = useState("");
  const [mode, setMode] = useState("");
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
  }, [id]);

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
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="form">
      <center>
        <h1>Welcome {title}</h1>
      </center>
      <h2>Choose your plan </h2>

      <label>Name</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label><h2>Pack (in months)</h2></label>
      <select value={Pack} onChange={(e) => setPack(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <label><h2>Coach</h2></label>
      <div>
        <label>
          <input
            type="radio"
            value="Mike Hussie"
            checked={coach === "Mike Hussie"}
            onChange={(e) => setCoach(e.target.value)}
          />
          Mike Hussie
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Mohammed Harris"
            checked={coach === "Mohammed Harris"}
            onChange={(e) => setCoach(e.target.value)}
          />
          Mohammed Harris
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Abarajith"
            checked={coach === "Abarajith"}
            onChange={(e) => setCoach(e.target.value)}
          />
          Abarajith
        </label>
      </div>
      <label><h2>Mode</h2></label>
      <div>
        <label>
          <input
            type="radio"
            value="basic"
            checked={mode === "basic"}
            onChange={(e) => setMode(e.target.value)}
          />
          Basic
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Premium"
            checked={mode === "Premium"}
            onChange={(e) => setMode(e.target.value)}
          />
          Premium
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Professional"
            checked={mode === "Professional"}
            onChange={(e) => setMode(e.target.value)}
          />
          Professional
        </label>
      </div>

      <button onClick={editBook}>Edit Member</button>
    </div>
  );
};

export default PlanUser;

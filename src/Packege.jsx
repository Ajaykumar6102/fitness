import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import axios from "axios";

export const Package = () => {
    const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [Pack, setPack] = useState("");
  const [loading, setLoading] = useState(true);
  const [lastEntry, setLastEntry] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5555/books").then((res) => {
      if (res.data.length > 0) {
        const lastEntryData = res.data[res.data.length - 1];
        setLastEntry(lastEntryData);
        setTitle(lastEntryData.title);
        setAuthor(lastEntryData.author);
        setPublishYear(lastEntryData.publishYear);
        setPack(lastEntryData.Pack);
      }
      setLoading(false);
    }).catch((err) => {
      console.error("Error fetching data:", err);
      setLoading(false);
    });
  }, []);

  const editBook = () => {
    const data = {
      title,
      author,
      publishYear,
      Pack,
    };
    axios
      .put(`http://localhost:5555/books/${lastEntry._id}`, data)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => console.log(err.message));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="form">
      <h1>Edit Member</h1>
      <label>Name</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Email</label>
      <input
        type="email"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        value={publishYear}
        onChange={(e) => setPublishYear(e.target.value)}
      />
      <label>Pack</label>
      <input
        type="text"
        value={Pack}
        onChange={(e) => setPack(e.target.value)}
      />
      <button onClick={editBook}>Edit Member</button>
    </div>
  );
};

export default Package;


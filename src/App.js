import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import axios from "axios";
import ShowBook from "./pages/ShowBook";
import Header from "./header/Header";
import Hero from "./Hero/Hero";
import Register from "./Register";
import Programs from "../src/Programs/Programs.jsx";
import Strength from "./Strength/Strength.jsx";
import Reasons from "./Reasons/Reasons.jsx";
import Plans from "./Plans/Plans.jsx";
import Testimonials from "./Testimonials/Testimonials.jsx";
import Login from "./Login/Login.jsx";
import Pack from "./Pack/Pack.jsx";
import Neo from "./neo.jsx";
import Success from "./Success.jsx";
import Package from "./Packege.jsx";
import User from "./User/User.jsx";
import ViewUser from "./User/ViewUser.jsx";
import ChangeUser from "./User/ChangeUser.jsx";
import DestroyUser from "./User/DestroyUser.jsx";
import PlanUser from "./User/PlanUser.jsx";
import Code from "./Code/Code.jsx";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:5555/books");
        const fetch_data = response.data.data;
        setBooks(fetch_data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetch();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Hero  />}></Route>  
        <Route path="/registeration" element={<Home books={books} setBooks={setBooks} />}></Route>
        <Route path="/books/show/:id" element={<ShowBook />}></Route>
        <Route path="/books/edit/:id" element={<EditBook />}></Route>
        <Route path="/ajay" element={<CreateBook />}></Route>
        <Route path="/books/delete/:id" element={<DeleteBook />}></Route>

        <Route path="/home/:id" element={<User/>}></Route>c

        <Route path="/neo" element={<Neo books={books} setBooks={setBooks} />}></Route>

        <Route path="/success" element={<Success books={books} setBooks={setBooks} />}></Route>

        <Route path="/view/:id" element={<ViewUser />}></Route>

        <Route path="/code" element={<Code />}></Route>

        <Route path="/change/:id" element={<ChangeUser />}></Route> 

        <Route path="/plans/:id" element={<PlanUser />}></Route> 

        <Route path="/destroy/:id" element={<DestroyUser />}></Route>

        <Route path="/re" element={<Register />}></Route> 
        <Route path="/programs" element={<Programs/>}></Route>
        <Route path="/programs/strengthTraining" ></Route>
        <Route path="/programs/cardio" element={<Strength/>}></Route>
        <Route path="/why" element={<Reasons />}></Route>
        <Route path="/plans" element={<Plans/>}></Route>
        <Route path="/home/testimonials" element={<Testimonials/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;


// <Routes>
//<Route
//path="/"
//element={<Home books={books} setBooks={setBooks} />}></Route>
//<Route path="/plans" element={<Plans/>}></Route>
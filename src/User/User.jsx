import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/books/${id}`);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="form">
      <h2>User Details</h2>
      <p>Name: {userData.author}</p>
      <p>Email: {userData.publishYear}</p>
      <p>Password: {userData.title}</p>

      <button> <Link to={`/view/${id}`}>
                      <span>show</span>
                    </Link>
      </button>
      <button> <Link to={`/plans/${id}`}>
                      <span>Plans</span>
                    </Link>
      </button>              
      <button> <Link to={`/change/${id}`}>
                      <span>View Profile</span>
                    </Link>
      </button>
      <button> <Link to={`/destroy/${id}`}>
                      <span>delete</span>
                    </Link>
      </button>
     
      <Link to="/">Go to Home</Link>

    </div>
  );
};

export default User;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDatabase, ref, child, get, update } from "firebase/database";
import { app } from "../firebase";

function Edit() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ firstName: "", lastName: "" });

  useEffect(() => {
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, `details/users/${userId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        setUserData(snapshot.val());
      } else {
        console.log("No data available");
      }
    });
  }, [userId]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const updates = {};
    updates[`details/users/${userId}`] = userData;

    update(ref(db), updates)
      .then(() => {
        console.log("Data updated successfully");
        navigate("/read");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h1 className="text-center mb-4" style={{ fontWeight: "bold", color: "#444" }}>Edit User</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#e9ecef", 
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
        }}
      >
        <div className="form-group mb-4">
          <label htmlFor="firstName" style={{ fontWeight: "600", color: "#555" }}>First Name</label>
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            className="form-control"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #6c757d", 
              boxShadow: "0 1px 3px rgba(108, 117, 125, 0.1)",
              color: "#333", 
              backgroundColor: "#ffffff" 
            }}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="lastName" style={{ fontWeight: "600", color: "#555" }}>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            className="form-control"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #6c757d", 
              boxShadow: "0 1px 3px rgba(108, 117, 125, 0.1)",
              color: "#333", 
              backgroundColor: "#ffffff" 
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff", 
            color: "#fff",
            fontWeight: "600",
            transition: "background-color 0.3s, box-shadow 0.3s",
            boxShadow: "0 3px 8px rgba(0, 123, 255, 0.2)"
          }}
          onMouseOver={(e) => (e.target.style.boxShadow = "0 4px 12px rgba(0, 123, 255, 0.3)")}
          onMouseOut={(e) => (e.target.style.boxShadow = "0 3px 8px rgba(0, 123, 255, 0.2)")}
        >
          Update User
        </button>
      </form>
    </div>
  );
}

export default Edit;

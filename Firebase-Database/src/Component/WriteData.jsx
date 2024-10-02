import React, { useState } from "react";
import { getDatabase, ref, set, push } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase";

function WriteData() {
  const navigate = useNavigate();
  const [inpData1, setInpData1] = useState("");
  const [inpData2, setInpData2] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'details/users');
    const newDbRef = push(dbRef);
    set(newDbRef, {
      firstName: inpData1,
      lastName: inpData2,
    })
      .then(() => {
        alert("Data Saved Successfully");
        navigate("/read");
      })
      .catch(() => alert("Error saving data!"));
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#444" }}>Add New User</h2>
      <div 
        className="card" 
        style={{ 
          padding: "30px", 
          borderRadius: "10px", 
          backgroundColor: "#f0f4f8", 
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" 
        }}
      >
        <div className="form-group mb-3">
          <label htmlFor="firstName" style={{ fontWeight: "600", color: "#333" }}>First Name</label>
          <input
            type="text"
            name="firstName"
            value={inpData1}
            onChange={(e) => setInpData1(e.target.value)}
            className="form-control"
            placeholder="Enter First Name"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #4CAF50",
              boxShadow: "0 2px 5px rgba(76, 175, 80, 0.1)",
              color: "#333",
              backgroundColor: "#ffffff" 
            }}
          />
        </div>
        
        <div className="form-group mb-4">
          <label htmlFor="lastName" style={{ fontWeight: "600", color: "#333" }}>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={inpData2}
            onChange={(e) => setInpData2(e.target.value)}
            className="form-control"
            placeholder="Enter Last Name"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #2196F3", 
              boxShadow: "0 2px 5px rgba(33, 150, 243, 0.1)",
              color: "#333", 
              backgroundColor: "#ffffff"
            }}
          />
        </div>

        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={saveData}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#4CAF50", 
              color: "#fff",
              fontWeight: "600",
              transition: "background-color 0.3s"
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
          >
            Save User
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteData;

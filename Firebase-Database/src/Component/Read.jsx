import { child, get, getDatabase, ref } from "firebase/database";
import React, { useState } from "react";
import app from "../firebase";
import { useNavigate } from "react-router-dom";

function Read() {
  const [userArray, setUserArray] = useState([]);
  const navigate = useNavigate();

  const dispData = async () => {
    const dbRef = ref(getDatabase(app));
    await get(child(dbRef, "details/users"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUserArray(Object.entries(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEdit = (userId) => {
    navigate(`/edit-user/${userId}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#333' }}>User Data</h1>
      
      <button
        className="btn btn-primary mb-4"
        onClick={dispData}
        style={{
          backgroundColor: "#007bff",
          borderColor: "#007bff",
          padding: "10px 20px",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
        Display Data
      </button>

      {userArray.length > 0 ? (
        <ul className="list-group">
          {userArray.map(([userId, user]) => (
            <li
              key={userId}
              className="list-group-item d-flex justify-content-between align-items-center mb-3"
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
                padding: "20px",
              }}
            >
              <div>
                <h5 style={{ marginBottom: '0', fontWeight: '600', color: '#333' }}>{user.firstName} {user.lastName}</h5>
              </div>

              <div>
                <button
                  className="btn btn-success mr-3"
                  onClick={() => handleEdit(userId)}
                  style={{
                    padding: "8px 15px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  style={{
                    padding: "8px 15px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">No user data available.</p>
      )}
    </div>
  );
}

export default Read;

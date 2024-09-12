import React from "react";

function Todolist({ task, id, handleEditTasks, handleDeleteTasks }) {
  return (
    <>
      <li
        className="d-flex justify-content-between w-50 m-auto align-items-center bg-light p-3 rounded shadow-sm mb-3"
        style={{
          borderLeft: "4px solid #007bff",
          backgroundColor: "#f8f9fa",
        }}
      >
        <span
          className="fw-bold text-dark"
          style={{
            fontSize: "1.2rem",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {task}
        </span>
        <div className="btn-group">
          <button
            className="btn btn-sm btn-outline-primary px-3"
            onClick={() => handleEditTasks(task, id)}
          >
           Edit
          </button>
          <button
            className="btn btn-sm btn-outline-danger px-3"
            onClick={() => handleDeleteTasks(id)}
          >
           Remove
          </button>
        </div>
      </li>
    </>
  );
}

export default Todolist;

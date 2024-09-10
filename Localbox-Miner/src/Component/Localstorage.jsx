import React, { useEffect, useState } from "react";

function Localstorage() {
  const [task, setTask] = useState("");
  const [item, setItem] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [edit, setEdit] = useState(null);

//   useEffect(() => {
//     const storeitem = JSON.parse(localStorage.getItem("tasks")) || [];
//       if (storeitem) {
//         setItem(storeitem)
//     }
//   }, []);


// Localstorage SetItem

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(item));
  }, [item]);



  function handle(e) {
    setTask(e.target.value);
  }

   // Add or update task

  function addhandle() {
    if (edit !== null) {
      const updatedItems = [...item];
      updatedItems[edit] = task;
      setItem(updatedItems);
      setEdit(null);
    } else {
      setItem([...item, task]);
    }
    setTask("");
  }

   // Edit task
  function edithandle(idx) {
    setTask(item[idx]);
    setEdit(idx);
  }

   // Remove task
  function removehanle(idx) {
    const remove = [...item];
    remove.splice(idx, 1);
    setItem(remove);
  }

  const data = item.map((task, idx) => (
    <div key={task}>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span className="task-text">{task}</span>
        <div>
          <button
            type="button"
            onClick={() => edithandle(idx)}
            className="btn btn-outline-dark mx-5"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => removehanle(idx)}
            className="btn  btn-outline-dark"
          >
            Delete
          </button>
        </div>
      </li>
      <hr />
    </div>
  ));
  return (
    <>
      <div
        className="container my-5 p-5 border border-black rounded-5"
        style={{
          maxWidth: "600px",
          backgroundColor: "#bdc3c7 ",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <h2 className="text-center mb-4">
          <b>
            <i>
              <u>Todo List With LocalStorage</u>
            </i>
          </b>
        </h2>
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a task"
            value={task}
            onChange={handle}
          />
          <button type="button" onClick={addhandle} className="btn btn-dark ">
            {edit !== null ? "Update Task" : "Add Task"}
          </button>
        </div>
        <ul>
          <b>{data}</b>
        </ul>
      </div>
    </>
  );
}

export default Localstorage;


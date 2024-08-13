import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [item, setItem] = useState([]);
  const [edit, setEdit] = useState(null); 

  function handle(e) {
    setTask(e.target.value);
  }

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

  function edithandle(idx) {
    setTask(item[idx]);
    setEdit(idx); 
  }

  function removehanle(idx) {
    const remove = [...item];
    remove.splice(idx, 1);
    setItem(remove);
  }

  const data = item.map((task, idx) => (
    <div className="">
    <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
      <span className="task-text">{task}</span>
      <div >
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
    <div className="container my-5 p-5 border border-black rounded-5" style={{ maxWidth: '600px',backgroundColor:"#bdc3c7 " ,boxShadow : "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
      <h2 className="text-center mb-4"><b><i><u>Todo List</u></i></b></h2>
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task"
          value={task}
          onChange={handle}
        />
        <button
          type="button"
          onClick={addhandle}
          className="btn btn-dark "
        > 
          {edit  !== null ? "Update Task" : "Add Task"}
        </button>
      </div>
      <ul>
         <li className="list-group-item text-center"><b>{data}</b></li>
      </ul>
    </div>
  );
}

export default Todo;



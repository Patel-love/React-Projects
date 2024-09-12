import React, { useEffect, useState } from "react";
import Todolist from "./Todolist";

function Show({ addItems, setAddItems }) {
  let [editId, setEditId] = useState(null);

  useEffect(() => {
    let getTodoData = JSON.parse(localStorage.getItem("todoData")) || null;
    setAddItems(getTodoData);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(addItems));
  }, [addItems]);

  const handleEditTasks = (editTask, idx) => {
    setEditId(idx);
    let updateValue = prompt("update value", editTask);
    if (updateValue.trim() === "") {
      alert("please update your task");
    } else {
      const updatedItems = addItems.map((task, index) =>
        index === editId ? updateValue.trim() : task
      );
      setAddItems(updatedItems);
    }
  };

  const handleDeleteTasks = (id) => {
    setAddItems(addItems.filter((__, idx) => idx !== id));
    localStorage.setItem(
      "todoData",
      JSON.stringify(addItems.filter((__, idx) => idx !== id))
    );
  };

  return (
    <>
      <ul className="text-center list-unstyled m-auto d-flex flex-column mt-3">
        {/* rendring list */}
        {addItems.map((task, id) => {
          return (
            <Todolist
              task={task}
              key={id}
              id={id}
              handleEditTasks={handleEditTasks}
              handleDeleteTasks={handleDeleteTasks}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Show;

// import React from "react";

// function Show() {
//   const view = JSON.parse(localStorage.getItem("Card"));
//   console.log(JSON.parse(localStorage.getItem("Card")));
//   console.log("----",localStorage.getItem("Card"));

//   //   view.map((product) => {
//   //     <li
//   //       key={product.id}
//   //       style={{
//   //         padding: "10px 0px 10px 0px",
//   //         textAlign: "center",
//   //         borderRadius: "10px",
//   //         margin: "10px",
//   //         boxShadow:
//   //           "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
//   //       }}
//   //     >
//   //       <div className="card" style={{ width: "18rem" }}>
//   //         <img
//   //           src={product.image}
//   //           style={{ height: "230px", objectFit: "contain", width: "230px" }}
//   //           alt={product.title}
//   //         />
//   //         <div className="card-body">
//   //           <h3>{product.title.slice(0, 35)}</h3>
//   //           <p>{product.description.slice(0, 35)}</p>
//   //           <h3>
//   //             <a href="#" style={{ color: "black", textDecoration: "none" }}>
//   //               ₹{product.price}
//   //             </a>
//   //           </h3>
//   //           <button
//   //             className="btn btn-outline-primary"
//   //             onClick={() => {
//   //               localStorage.setItem("Card", JSON.stringify(product));
//   //             }}
//   //           >
//   //             Add
//   //           </button>
//   //         </div>
//   //       </div>
//   //     </li>;
//   //   });
//   //   const view = (product) => (
//   //     <li
//   //       key={product.id}
//   //       style={{
//   //         padding: "10px 0px 10px 0px",
//   //         textAlign: "center",
//   //         borderRadius: "10px",
//   //         margin: "10px",
//   //         boxShadow:
//   //           "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
//   //       }}
//   //     >
//   //       <div className="card" style={{ width: "18rem" }}>
//   //         <img
//   //           src={product.image}
//   //           style={{ height: "230px", objectFit: "contain", width: "230px" }}
//   //           alt={product.title}
//   //         />
//   //         <div className="card-body">
//   //           <h3>{product.title.slice(0, 35)}</h3>
//   //           <p>{product.description.slice(0, 35)}</p>
//   //           <h3>
//   //             <a href="#" style={{ color: "black", textDecoration: "none" }}>
//   //               ₹{product.price}
//   //             </a>
//   //           </h3>
//   //           <button
//   //             className="btn btn-outline-primary"
//   //             onClick={() => {
//   //               localStorage.setItem("Card", JSON.stringify(product));
//   //             }}
//   //           >
//   //             Add
//   //           </button>
//   //         </div>
//   //       </div>
//   //     </li>
//   //   )
//   return (
//     <>
//       <div className="d-flex justify-content-center align-items-centerbg-light">
//         {view ? (
//           <div className="card" style={{ width: "18rem" }}>
//             <div className="card-body">
//                 <img src={view.image} style={{width:"100%",height:"250px",objectFit:"contain"}} alt="" />
//               <p className="card-text">
//                 <b>category:</b> {view.name}
//               </p>
//               <p className="card-text">
//                 <b>Price:</b> {view.price}
//               </p>
//               <p className="card-text">
//                 <b>Description:</b> {view.description}
//               </p>
//             </div>
//           </div>
//         ) : (
//           <div className="text-center">
//             <p >
//              Error.............
//             </p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Show;

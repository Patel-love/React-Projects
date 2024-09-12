
import React, { useEffect } from 'react'

function Todo({ userValue, setUserValue, addItems, setAddItems }) {
    const handlerInput = (e) => {
        setUserValue(e.target.value);
      };
    
      useEffect(() => {
        localStorage.setItem("todoData", JSON.stringify(addItems));
        console.log(addItems);
      }, [addItems]);

      
      const handlerAddTask = () => {
        if (userValue === "") {
          alert("please enter your Value");
        } else {
          setAddItems([...addItems, userValue]);
          setUserValue("");
        }
      };
    
  return (
    <>
     <h1 className="h1 text-center mt-5 mb-5 bg-warning-info w-50 m-auto p-3 fw-bold">
        Todo App
      </h1>
      <div className="input d-flex justify-content-center bg-dark p-4 mb-5 w-50 m-auto">
        <input
          type="text"
          className="form-control w-25 fw-medium mt-3 mb-3"
          id="formGroupExampleInput"
          value={userValue}
          placeholder="Add todo items..."
          onChange={handlerInput}
        />
        <div>
         <button className='btn btn-outline-primary mx-3 mt-3'  onClick={handlerAddTask}>ADD</button>
        </div>
      </div>
    
    </>
  )
}

export default Todo




























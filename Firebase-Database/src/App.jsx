import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WriteData from "./Component/WriteData";
import Read from "./Component/Read";
import Edit from "./Component/Edit";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WriteData />,
    },
    {
      path: "/read",
      element: <Read />,
    },
    {
      path: "/edit-user/:userId",  
      element: <Edit/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
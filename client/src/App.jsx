import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
  },
  {
    path: "/about",
    element: (
      <div>
        <h1>About Page</h1>
        <p>This is the about page of the application.</p>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

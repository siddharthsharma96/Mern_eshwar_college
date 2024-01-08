import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Expenses from "./Expense";
import ExpenseForm from "./ExpenseForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Expenses />,
      },
      {
        path: "/add-expense",
        element: <ExpenseForm operation={"Add"} />,
      },
      {
        path: "/edit/:id",
        element: <ExpenseForm operation={"Edit"} />,
      },
      {
        path: "/analytics",
        element: (
          <div className="layout-container__wrapper">
            <p>Analytics</p>
          </div>
        ),
      },
      {
        path: "*",
        element: (
          <div className="layout-container__wrapper">
            <p>Page Not Found</p>
          </div>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

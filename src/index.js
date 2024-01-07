import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ExpenseForm from "./ExpenseForm";
import Expenses from "./Expense";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Expenses /> },
      {
        path: "/add-expense",
        element: <ExpenseForm operation={"Add"}></ExpenseForm>,
      },
      {
        path: "/edit/:id",
        element: <ExpenseForm operation={"Edit"}></ExpenseForm>,
      },
      {
        path: "/analytics",
        element: (
          <div class="layout-container__wrapper">
            <p>Analytics</p>
          </div>
        ),
      },
      {
        path: "*",
        element: (
          <div class="layout-container__wrapper">
            <p>Not Found</p>
          </div>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

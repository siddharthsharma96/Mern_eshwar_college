import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import Expenses from "./Expense";

const Body = ({ activeItem }) => {
  const [a, setA] = useState();
  useEffect(() => {
    const b = async () => {
      const response = await fetch("http://localhost:8000/expenses");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setA(data);
      }
    };
    b();
  }, []);
  return (
    <div class="layout-container">
      {/* {activeItem === 0 ? (
        <Expenses details={a}></Expenses>
      ) : activeItem === 1 ? (
        <ExpenseForm></ExpenseForm>
      ) : activeItem === 2 ? (
        <div class="layout-container__wrapper">
          <p>Analytics</p>
        </div>
      ) : (
        <div class="layout-container__wrapper">
          <p>Page Not Found</p>
        </div>
      )} */}
      <Routes>
        <Route path="/" element={<Expenses details={a} />} />
        <Route path="/expenses" element={<Expenses details={a} />} />
        <Route path="/add-expense" element={<ExpenseForm />} />
        <Route
          path="/analytics"
          element={
            <div class="layout-container__wrapper">
              <p>Analytics</p>
            </div>
          }
        />
        {/* Add more routes as needed */}
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </div>
  );
};
export default Body;

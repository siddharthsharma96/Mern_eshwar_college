import { useState, useEffect } from "react";
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
  const details = [
    {
      day: "1",
      month: "Jan",
      title: "Fee",
      type: "credit",
      currency: "200 INR",
    },
    {
      day: "20",
      month: "Feb",
      title: "Travell",
      type: "Debit",
      currency: "50000 INR",
    },
    {
      day: "1",
      month: "March",
      title: "Salary",
      type: "credit",
      currency: "200000 INR",
    },
  ];
  return (
    <div class="layout-container">
      {activeItem === 0 ? (
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
      )}
    </div>
  );
};
export default Body;

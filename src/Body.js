import ExpenseForm from "./ExpenseForm";
import Expenses from "./Expense";

const Body = ({ activeItem }) => {
  return (
    <div className="layout-container">
      {activeItem === 0 ? (
        <Expenses></Expenses>
      ) : activeItem === 1 ? (
        <ExpenseForm></ExpenseForm>
      ) : activeItem === 2 ? (
        <div className="layout-container__wrapper">
          <p>Analytics</p>
        </div>
      ) : (
        <div className="layout-container__wrapper">
          <p>Page Not Found</p>
        </div>
      )}
    </div>
  );
};
export default Body;

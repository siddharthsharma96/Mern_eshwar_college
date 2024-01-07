import { useState, useEffect } from "react";
import BodyListItem from "./Bodylistitem";
const Expenses = () => {
  const [details, setDetails] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/expenses");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setDetails(data);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="layout-container__wrapper">
      <div className="flexbox flexbox-justify-between flexbox-align-baseline">
        <h3>Expenses</h3>
        <span className="pill info">INR 770</span>
      </div>
      <hr />

      <div className="layout-container__expenses">
        <ul>
          {details && details.length > 0 ? (
            <>
              <BodyListItem details={details[0]}></BodyListItem>
              <BodyListItem details={details[1]}></BodyListItem>
              <BodyListItem details={details[2]}></BodyListItem>
            </>
          ) : null}
        </ul>
      </div>
    </div>
  );
};
export default Expenses;

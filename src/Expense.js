import BodyListItem from "./Bodylistitem";
import { useState, useEffect } from "react";
const Expenses = () => {
  // console.log(details);
  const [details, setDetails] = useState();
  useEffect(() => {
    const b = async () => {
      const response = await fetch("http://localhost:8000/expenses");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setDetails(data);
      }
    };
    b();
  }, []);
  return (
    <div class="layout-container__wrapper">
      <div class="flexbox flexbox-justify-between flexbox-align-baseline">
        <h3>Expenses</h3>
        <span class="pill info">INR 770</span>
      </div>
      <hr />

      <div class="layout-container__expenses">
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

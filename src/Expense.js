import BodyListItem from "./Bodylistitem";
const Expenses = ({ details }) => {
  console.log(details);
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
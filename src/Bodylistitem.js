import { useNavigate } from "react-router-dom";

const BodyListItem = ({ details }) => {
  const navigate = useNavigate();
  const RedirectHandler = () => {
    navigate(`/edit/${details.id}`);
  };
  return (
    <li class="flexbox flexbox-justify-between">
      <div class="flexbox">
        <div class="flexbox flexbox-column flexbox-align-center date">
          <div class="month">{details.month}</div>
          <div class="day">{details.day}</div>
        </div>
        <div class="flexbox flexbox-align-center">
          <h3 class="title">{details.title}</h3>
          <span class="type-pill">{details.type}</span>
        </div>
      </div>
      <div class="flexbox flexbox-align-center">
        <div class="pill">{details.currency}</div>
        <button class="actions" onClick={RedirectHandler}>
          <span class="material-icons edit">edit</span>
        </button>
        <button class="actions">
          <span class="material-icons delete">delete</span>
        </button>
      </div>
    </li>
  );
};
export default BodyListItem;

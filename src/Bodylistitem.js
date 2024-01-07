const BodyListItem = ({ details }) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <li class="flexbox flexbox-justify-between">
      <div class="flexbox">
        <div class="flexbox flexbox-column flexbox-align-center date">
          <div class="month">
            {monthNames[new Date(details.date).getMonth()]}
          </div>
          <div class="day">{new Date(details.date).getDate()}</div>
        </div>
        <div class="flexbox flexbox-align-center">
          <h3 class="title">{details.title}</h3>
          <span class="type-pill">{details.type}</span>
        </div>
      </div>
      <div class="flexbox flexbox-align-center">
        <div class="pill">{details.currency}</div>
        <button class="actions">
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

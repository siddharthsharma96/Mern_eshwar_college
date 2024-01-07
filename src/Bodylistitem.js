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
    <li className="flexbox flexbox-justify-between">
      <div className="flexbox">
        <div className="flexbox flexbox-column flexbox-align-center date">
          <div className="month">
            {monthNames[new Date(details.date).getMonth()]}
          </div>
          <div className="day">{new Date(details.date).getDate()}</div>
        </div>
        <div className="flexbox flexbox-align-center">
          <h3 className="title">{details.title}</h3>
          <span className="type-pill">
            {details.type === 1 ? "Credit" : "Debit"}
          </span>
        </div>
      </div>
      <div className="flexbox flexbox-align-center">
        <div className="pill">{details.currency}</div>
        <button className="actions">
          <span className="material-icons edit">edit</span>
        </button>
        <button className="actions">
          <span className="material-icons delete">delete</span>
        </button>
      </div>
    </li>
  );
};
export default BodyListItem;

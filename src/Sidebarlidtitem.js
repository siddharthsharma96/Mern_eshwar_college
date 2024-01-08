import { NavLink } from "react-router-dom";

const SidebarListItem = ({ text, iconName, path, updateActiveItem, id }) => {
  const handler = (e, index = 0) => {
    updateActiveItem(index);
  };
  return (
    <li
      onClick={(ev) => {
        handler(ev, id);
      }}
    >
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <span className="material-icons">{iconName}</span>
        <span>{text}</span>
      </NavLink>
    </li>
  );
};
export default SidebarListItem;

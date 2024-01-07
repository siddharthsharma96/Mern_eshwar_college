import { NavLink } from "react-router-dom";

const SidebarListItem = ({
  text,
  iconName,
  classe,
  updateActiveItem,
  id,
  path,
}) => {
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
        <span class="material-icons">{iconName}</span>
        <span>{text}</span>
      </NavLink>
    </li>
  );
};
export default SidebarListItem;

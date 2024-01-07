import { Link, NavLink } from "react-router-dom";
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
        {/* <a class={classe} href="javascript:void(0)"> */}
        <span class="material-icons">{iconName}</span>
        <span>{text}</span>
        {/* </a> */}
      </NavLink>
    </li>
  );
};
export default SidebarListItem;

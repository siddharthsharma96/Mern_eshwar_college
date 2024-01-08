import SidebarListItem from "./Sidebarlidtitem";

const Sidebar = ({ activeItem, updateActiveItem }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-container__brand">Expense Tracker</div>
      <div className="sidebar-container__list">
        <ul>
          <SidebarListItem
            id={0}
            text={"expenses"}
            iconName={"insights"}
            path={"/"}
            // classe={activeItem === 0 ? "active" : ""}
            updateActiveItem={updateActiveItem}
          ></SidebarListItem>
          <SidebarListItem
            id={1}
            text={"add-expense"}
            iconName={"note_add"}
            path={"/add-expense"}
            // classe={activeItem === 1 ? "active" : ""}
            activeItem={activeItem}
            updateActiveItem={updateActiveItem}
          ></SidebarListItem>
          <SidebarListItem
            id={2}
            text={"analytics"}
            iconName={"analytics"}
            path={"/analytics"}
            // classe={activeItem === 2 ? "active" : ""}
            updateActiveItem={updateActiveItem}
          ></SidebarListItem>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;

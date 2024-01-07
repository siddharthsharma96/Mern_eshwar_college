import SidebarListItem from "./Sidebarlidtitem";

const Sidebar = ({ activeItem, updateActiveItem }) => {
  return (
    <div class="sidebar-container">
      <div class="sidebar-container__brand">Expense Tracker</div>
      <div class="sidebar-container__list">
        <ul>
          <SidebarListItem
            id={0}
            text={"expenses"}
            iconName={"insights"}
            path="/expenses"
            classe={activeItem === 0 ? "active" : ""}
            updateActiveItem={updateActiveItem}
          ></SidebarListItem>
          <SidebarListItem
            id={1}
            text={"add-expense"}
            path={"/add-expense"}
            iconName={"note_add"}
            classe={activeItem === 1 ? "active" : ""}
            activeItem={activeItem}
            updateActiveItem={updateActiveItem}
          ></SidebarListItem>
          <SidebarListItem
            id={2}
            text={"analytics"}
            iconName={"analytics"}
            path={"/analytics"}
            classe={activeItem === 2 ? "active" : ""}
            updateActiveItem={updateActiveItem}
          ></SidebarListItem>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;

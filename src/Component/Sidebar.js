import SidebarListItem from "../ChildComponents/Sidebarlidtitem";

const Sidebar = ({ activeItem, updateActiveItem }) => {
  const utils = [
    {
      id: 0,
      text: "expenses",
      iconName: "insights",
      path: "/",
      updateActiveItem: updateActiveItem,
    },
    {
      id: 1,
      text: "add-expense",
      iconName: "note_add",
      path: "/add-expense",
      updateActiveItem: updateActiveItem,
    },
    {
      id: 2,
      text: "analytics",
      iconName: "analytics",
      path: "/analytics",
      updateActiveItem: updateActiveItem,
    },
  ];
  console.log(utils);
  return (
    <div className="sidebar-container">
      <div className="sidebar-container__brand">Expense Tracker</div>
      <div className="sidebar-container__list">
        <ul>
          {utils.map((e) => {
            return (
              <SidebarListItem
                id={e.id}
                text={e.text}
                iconName={e.iconName}
                path={e.path}
                // classe={activeItem === 0 ? "active" : ""}
                updateActiveItem={e.updateActiveItem}
              ></SidebarListItem>
            );
          })}
          {/* <SidebarListItem
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
          ></SidebarListItem> */}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;

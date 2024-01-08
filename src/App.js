import { useState } from "react";
import "./App.css";
import SideBar from "./Sidebar";
// import Body from "./Body";
import { Outlet } from "react-router-dom";

function App() {
  const [activeItem, setActiveItem] = useState(0);
  const updateActiveItem = (params) => {
    setActiveItem(params);
  };

  return (
    <div className="flexbox">
      <SideBar
        activeItem={activeItem}
        updateActiveItem={updateActiveItem}
      ></SideBar>
      <div className="layout-container">
        <Outlet />
      </div>
      {/* <Body activeItem={activeItem}></Body> */}
    </div>
  );
}

export default App;

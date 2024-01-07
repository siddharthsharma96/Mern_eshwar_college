import { useState } from "react";
import "./App.css";
import SideBar from "./Sidebar";
import Body from "./Body";

function App() {
  const [activeItem, setActiveItem] = useState(0);
  const updateActiveItem = (params) => {
    setActiveItem(params);
  };
  console.log(activeItem);
  return (
    <div className="flexbox">
      <SideBar
        activeItem={activeItem}
        updateActiveItem={updateActiveItem}
      ></SideBar>
      <Body activeItem={activeItem}></Body>
    </div>
  );
}

export default App;

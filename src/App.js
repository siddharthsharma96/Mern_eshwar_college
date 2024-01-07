import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import SideBar from "./Sidebar";
import Body from "./Body";

function App() {
  const [activeItem, setActiveItem] = useState(0);
  const updateActiveItem = (params) => {
    setActiveItem(params);
  };

  return (
    <Router basename={"/"}>
      <div className="flexbox">
        <SideBar
          activeItem={activeItem}
          updateActiveItem={updateActiveItem}
        ></SideBar>
        <Body activeItem={activeItem}></Body>
      </div>
    </Router>
  );
}

export default App;

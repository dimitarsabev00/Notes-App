import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../../components";

import "./styles.scss";

const Home: React.FC = () => {
  return (
    <div className="app flex">
      <Sidebar />
      <div className="app-main">
        <Header />
        <div className="notes-wrapper py-4 px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;

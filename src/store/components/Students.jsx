import React from "react";

import SideBar from "./SideBar";
import Header from "./Header";
import List from "./List";

const Students = () => {
  return (
    <div className="flex">
        <SideBar />
        <div className="w-4/5 flex flex-col">
            <Header />
            <List />
        </div>
    </div>
  );
};

export default Students;

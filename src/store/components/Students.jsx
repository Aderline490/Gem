import { useState } from "react";

import SideBar from "./SideBar";
import Header from "./Header";
import List from "./List";
import NewStudent from "./NewStudent";

const Students = () => {
  const [openModal, setOpenModal] = useState(false);
  
  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    console.log("Reacheed");
    setOpenModal(false);
    console.log(openModal)
  }
  return (
    <>
      <div className="absolute w-full flex z-0">
        <SideBar />
        <div className="w-4/5 flex flex-col">
          <Header />
          <List handleOpenModal={handleOpenModal} openModal={openModal}/>
        </div>
      </div>
      {openModal && (
          <NewStudent handleCloseModal={handleCloseModal}/>
      )}
    </>
  );
};

export default Students;

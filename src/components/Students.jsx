import { useState, useEffect } from "react";

import SideBar from "./SideBar";
import Header from "./Header";
import List from "./List";
import NewStudent from "./NewStudent";

import { fetchStudents } from "../store/actions/StudentActions";

const Students = () => {
  const [student, setStudent] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleOpenModal = (student, isEdit) => {
    setOpenModal(true);
    setStudent(student);
    setIsEdit(isEdit);
    console.log(student);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div className="absolute w-full flex z-0">
        <SideBar />
        <div className="w-4/5 flex flex-col">
          <Header />
          <List handleOpenModal={handleOpenModal} openModal={openModal} />
        </div>
      </div>
      {openModal && (
        <NewStudent
          isEdit={isEdit}
          student={student}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default Students;

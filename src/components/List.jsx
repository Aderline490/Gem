import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";


import { fetchStudents } from "../store/actions/StudentActions";

const List = ({ handleOpenModal, openModal}) => {

  const [students, setStudents] = useState([]);

  const loadStudents = async() => {
    setStudents(await fetchStudents());
  }

useEffect( () => {
  loadStudents();
}, []);
  return (
    <>
      <div className="bg-[#F4F3F3] p-[30px] w-full h-full">
        <p className="text-[30px] font-black">Students</p>

        <div className="flex justify-between items-center mt-8">
          <div>
            <input
              type="text"
              className="bg-[#D9D9D9] rounded-[5px] h-[40px] pl-[10px] outline-none"
              name="search"
              placeholder="Search by name..."
            />
          </div>
          <div
            className="cursor-pointer text-white font-bold flex justify-center items-center w-[198px] h-[40px] bg-[#333E97] rounded-[5px]"
            onClick={handleOpenModal}
          >
            <Icon icon="material-symbols:add" />
            <p className="ml-2 ">Add a new Student</p>
          </div>
        </div>
        <div>
          <table className="w-full mt-8">
            <thead
              className="h-[50px] font-black"
              style={{ backgroundColor: "rgba(51, 62, 151, 0.1)" }}
            >
              <tr>
                <th>ID</th>
                <th>Names</th>
                <th>DoB</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => {
                return(
                <tr
                key={index}
                className="bg-white h-[50px] border-b-[#]"
                style={{ borderBottom: "1px solid rgba(166, 164, 164, 0.26)" }}
              >
                <td className="center" style={{ textAlign: "center" }}>
                  {index + 1}
                </td>
                <td style={{ textAlign: "center" }}>{student.lastName + " " + student.firstName }</td>
                <td style={{ textAlign: "center" }}>{student.dateOfBirth}</td>
                <td style={{ textAlign: "center" }}>{student.gender}</td>
                <td style={{ textAlign: "center" }}>Senior {student.classYear}</td>
                <td style={{ textAlign: "center" }} className="center">
                  <Icon
                    icon="material-symbols:edit"
                    style={{
                      margin: "auto",
                      fontSize: "20px",
                      color: "#333E97",
                      cursor: "pointer",
                    }}
                  />
                </td>
                <td className="">
                  <Icon
                    icon="mdi:trash"
                    style={{
                      margin: "auto",
                      fontSize: "20px",
                      color: "#FF0000",
                      cursor: "pointer",
                    }}
                  />
                </td>
              </tr>
              )})}
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  students: state.students?.students,
})

export default connect(mapStateToProps)(List);

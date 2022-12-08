import { useState } from "react";
import Select from "react-select";

import { createStudent } from "../store/actions/StudentActions";

const NewStudent = ({ handleCloseModal }) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    classYear: 1,
  });
  const [isLoading, setIsLoading] = useState(false);

  const setFormValues = (e) => {
    console.log(values);
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };
  console.log(values);

  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    createStudent(values);
    setIsLoading(false);
  };
  return (
    <>
      <div
        className="absolute z-10 w-full h-screen"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.29)" }}
        onClick={handleCloseModal}
      ></div>
      <div className="absolute z-20 w-full flex justify-center">
        <div className=" bg-white w-1/2 h-2/3 p-10">
          <p className="font-black text-[30px]">Create new student</p>
          <form className="mt-16 flex flex-col justify-center items-center">
            <div className="w-full flex items-center">
              <label className="text-[18px]">First Name</label>
              <input
                type="text"
                className="bg-white w-[290px] rounded-[5px] h-[40px] pl-[10px] outline-none ml-16"
                style={{ border: "1px solid #D9D9D9" }}
                name="firstName"
                value={values.firstName}
                onChange={setFormValues}
              />
            </div>
            <div className="mt-8 w-full flex items-center">
              <label className="text-[18px]">Last Name</label>
              <input
                type="text"
                className="bg-white w-[290px] rounded-[5px] h-[40px] pl-[10px] outline-none ml-16"
                style={{ border: "1px solid #D9D9D9" }}
                name="lastName"
                value={values.lastName}
                onChange={setFormValues}
              />
            </div>
            <div className="mt-8 w-full flex items-center">
              <label className="text-[18px]">Gender</label>
              <Select
                options={[
                  { value: "Female", label: "Female" },
                  { value: "Male", label: "Male" },
                ]}
                className="bg-white w-[300px] rounded-[5px] h-[40px] pl-[10px] outline-none ml-20"
                style={{ border: "1px solid #D9D9D9" }}
                name="gender"
                defaultValue={{
                  value: values?.gender,
                  label: `${values?.gender || ""}`,
                }}
                onChange={(val) => {
                  setValues({ ...values, gender: val.value })
                }}
              />
            </div>
            <div className="mt-8 w-full flex items-center">
              <label className="text-[18px]">Date of birth</label>
              <input
                type="date"
                className="bg-white w-[290px] rounded-[5px] h-[40px] pl-[10px] outline-none ml-12"
                style={{ border: "1px solid #D9D9D9" }}
                name="dateOfBirth"
                value={values.dateOfBirth}
                onChange={setFormValues}
              />
            </div>
            <div className="mt-8 w-full flex items-center">
              <label className="text-[18px]">Class</label>
              <Select
                type="text"
                options={[
                  { value: 1, label: "Senior 1" },
                  { value: 2, label: "Senior 2" },
                  { value: 3, label: "Senior 3" },
                  { value: 4, label: "Senior 4" },
                  { value: 5, label: "Senior 5" },
                ]}
                className="bg-white w-[300px] rounded-[5px] h-[40px] pl-[10px] outline-none ml-24"
                style={{ border: "1px solid #D9D9D9" }}
                name="classYear"
                defaultValue={{
                  value: values?.classYear,
                  label: `Senior ${values?.classYear || ""}`,
                }}
                onChange={(val) => {
                  setValues({ ...values, classYear: val.value })
                }}
              />
            </div>
            <div
              onClick={submit}
              className="bg-[#333E97] w-[200px] h-[40px] text-white rounded-[5px] flex justify-center items-center mt-8"
            >
              Save
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewStudent;

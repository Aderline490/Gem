

const NewStudent = ({handleCloseModal}) => {
  const classes = ["1A", "1B", "1C", "2A", "2B", "2C", "3A", "3B", "3C"];
  const gender = ["Female", "Male"];
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
              <label className="text-[18px]">Name</label>
              <input
                type="text"
                className="bg-white w-[300px] rounded-[5px] h-[40px] pl-[10px] outline-none ml-16"
                style={{border: "1px solid #D9D9D9"}}
                name="names"
                placeholder="Names"
              />
            </div>
            <div className="mt-8 w-full flex items-center">
              <label className="text-[18px]">Gender</label>
              <select
                type="text"
                options={gender}
                className="bg-white w-[300px] rounded-[5px] h-[40px] pl-[10px] outline-none ml-14"
                style={{border: "1px solid #D9D9D9"}}
                name="names"
                placeholder="Names"
              />
            </div>
            <div className="mt-8 w-full flex items-center">
              <label className="text-[18px]">Gender</label>
              <input
                type="date"
                className="bg-white w-[300px] rounded-[5px] h-[40px] pl-[10px] outline-none ml-14"
                style={{border: "1px solid #D9D9D9"}}
                name="names"
                placeholder="Names"
              />
            </div>
            <div className="mt-8 w-full flex items-center">
              <label className="text-[18px]">Class</label>
              <select
                type="text"
                options={classes}
                className="bg-white w-[300px] rounded-[5px] h-[40px] pl-[10px] outline-none ml-16"
                style={{border: "1px solid #D9D9D9"}}
                name="names"
                placeholder="Names"
              />
            </div>
            <div className="bg-[#333E97] w-[200px] h-[40px] text-white rounded-[5px] flex justify-center items-center mt-8">Save</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewStudent;

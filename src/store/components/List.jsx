import { Icon } from "@iconify/react";

const List = () => {
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
          <div className="text-white font-bold flex justify-center items-center w-[198px] h-[40px] bg-[#333E97] rounded-[5px]">
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
              <tr className="bg-white h-[50px] border-b-[#]" style={{borderBottom: "1px solid rgba(166, 164, 164, 0.26)"}}>
                <td className="center" style={{ textAlign: "center" }}>
                  #20201
                </td>
                <td style={{ textAlign: "center" }}>Gashugi Aderline</td>
                <td style={{ textAlign: "center" }}>01-01-2022</td>
                <td style={{ textAlign: "center" }}>Female</td>
                <td style={{ textAlign: "center" }}>Year 3 A</td>
                <td style={{ textAlign: "center" }} className="center">
                  <Icon
                    icon="material-symbols:edit"
                    style={{
                      margin: "auto",
                      fontSize: "20px",
                      color: "#333E97",
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
                    }}
                  />
                </td>
              </tr>
              <tr className="bg-white h-[50px] border-b-[#]" style={{borderBottom: "1px solid rgba(166, 164, 164, 0.26)"}}>
                <td className="center" style={{ textAlign: "center" }}>
                  #20201
                </td>
                <td style={{ textAlign: "center" }}>Gashugi Aderline</td>
                <td style={{ textAlign: "center" }}>01-01-2022</td>
                <td style={{ textAlign: "center" }}>Female</td>
                <td style={{ textAlign: "center" }}>Year 3 A</td>
                <td style={{ textAlign: "center" }} className="center">
                  <Icon
                    icon="material-symbols:edit"
                    style={{
                      margin: "auto",
                      fontSize: "20px",
                      color: "#333E97",
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
                    }}
                  />
                </td>
              </tr>
              <tr className="bg-white h-[50px] border-b-[#]" style={{borderBottom: "1px solid rgba(166, 164, 164, 0.26)"}}>
                <td className="center" style={{ textAlign: "center" }}>
                  #20201
                </td>
                <td style={{ textAlign: "center" }}>Gashugi Aderline</td>
                <td style={{ textAlign: "center" }}>01-01-2022</td>
                <td style={{ textAlign: "center" }}>Female</td>
                <td style={{ textAlign: "center" }}>Year 3 A</td>
                <td style={{ textAlign: "center" }} className="center">
                  <Icon
                    icon="material-symbols:edit"
                    style={{
                      margin: "auto",
                      fontSize: "20px",
                      color: "#333E97",
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
                    }}
                  />
                </td>
              </tr>
              <tr className="bg-white h-[50px] border-b-[#]" style={{borderBottom: "1px solid rgba(166, 164, 164, 0.26)"}}>
                <td className="center" style={{ textAlign: "center" }}>
                  #20201
                </td>
                <td style={{ textAlign: "center" }}>Gashugi Aderline</td>
                <td style={{ textAlign: "center" }}>01-01-2022</td>
                <td style={{ textAlign: "center" }}>Female</td>
                <td style={{ textAlign: "center" }}>Year 3 A</td>
                <td style={{ textAlign: "center" }} className="center">
                  <Icon
                    icon="material-symbols:edit"
                    style={{
                      margin: "auto",
                      fontSize: "20px",
                      color: "#333E97",
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
                    }}
                  />
                </td>
              </tr>
              <tr className="bg-white h-[50px] border-b-[#]" style={{borderBottom: "1px solid rgba(166, 164, 164, 0.26)"}}>
                <td className="center" style={{ textAlign: "center" }}>
                  #20201
                </td>
                <td style={{ textAlign: "center" }}>Gashugi Aderline</td>
                <td style={{ textAlign: "center" }}>01-01-2022</td>
                <td style={{ textAlign: "center" }}>Female</td>
                <td style={{ textAlign: "center" }}>Year 3 A</td>
                <td style={{ textAlign: "center" }} className="center">
                  <Icon
                    icon="material-symbols:edit"
                    style={{
                      margin: "auto",
                      fontSize: "20px",
                      color: "#333E97",
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
                    }}
                  />
                </td>
              </tr>
              <tr className="bg-white h-[50px] border-b-[#]" style={{borderBottom: "1px solid rgba(166, 164, 164, 0.26)"}}>
                <td className="center" style={{ textAlign: "center" }}>
                  #20201
                </td>
                <td style={{ textAlign: "center" }}>Gashugi Aderline</td>
                <td style={{ textAlign: "center" }}>01-01-2022</td>
                <td style={{ textAlign: "center" }}>Female</td>
                <td style={{ textAlign: "center" }}>Year 3 A</td>
                <td style={{ textAlign: "center" }} className="center">
                  <Icon
                    icon="material-symbols:edit"
                    style={{
                      margin: "auto",
                      fontSize: "20px",
                      color: "#333E97",
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
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default List;

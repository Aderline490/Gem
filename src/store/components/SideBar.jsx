import { useState } from "react";

import logo from "../../assets/Gem.png";

import { Icon } from "@iconify/react";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState("Dashboard");
  return (
    <>
      <div className="bg-white w-1/5">
        <div className="flex h-20 justify-center items-center w-full">
          <img src={logo} />
        </div>
        <div className="mt-16 flex flex-col justify-between  h-[450px]">
          <div>
            <div
              className="flex justify-center items-center bg-white w-[290px] h-[60px]"
              style={{
                backgroundColor:
                  activeLink == "Dashboard"
                    ? "rgba(51, 62, 151, 0.21)"
                    : "white",
              }}
              onClick={() => setActiveLink("Dashboard")}
            >
              <div className="flex w-[150px]">
                <div>
                  <Icon
                    icon="material-symbols:dashboard-rounded"
                    style={{ color: activeLink == "Dashboard" ? "#333E97" : "#A6A4A4", fontSize: "24px" }}
                  />
                </div>
                <div className="ml-4 text-[#A6A4A4] font-bold">
                  <p
                    className={activeLink == "Dashboard" ? "text-[#333E97]" : "text-[#A6A4A4]"}
                  >
                    Dashboard
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex justify-center items-center w-[290px] h-[60px]"
              style={{
                backgroundColor:
                  activeLink == "Students"
                    ? "rgba(51, 62, 151, 0.21)"
                    : "white",
              }}
              onClick={() => setActiveLink("Students")}
            >
              <div className="flex w-[150px]">
                <div>
                  <Icon
                    icon="mdi:account-student"
                    style={{
                      color: activeLink == "Students" ? "#333E97" : "#A6A4A4",
                      fontSize: "24px",
                    }}
                  />
                </div>
                <div className="ml-4 text-[#A6A4A4] font-bold">
                  <p
                    className={
                      activeLink == "Students" ? "text-[#333E97]" : "text-[#A6A4A4]"
                    }
                  >
                    Students
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center items-center w-[290px] h-[60px]"
            style={{
              backgroundColor:
                activeLink == "Settings" ? "rgba(51, 62, 151, 0.21)" : "white",
            }}
            onClick={() => setActiveLink("Settings")}
          >
            <div className="flex w-[150px]">
              <div>
                <Icon
                  icon="material-symbols:settings"
                  style={{ color: activeLink == "Settings" ? "#333E97" : "#A6A4A4", fontSize: "24px" }}
                />
              </div>
              <div className="ml-4 text-[#A6A4A4] font-bold">
                <p
                  className={activeLink == "Settings" ? "text-[#333E97]" : "text-[#A6A4A4]"}
                >
                  Settings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;

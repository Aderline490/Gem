import { Icon } from "@iconify/react";

const Header = () => {
  console.log("headerrrrrr");
  return (
    <>
      <div className="bg-white w-full h-[80px] flex justify-between items-center">
        <div className="flex">
          <input
            type="text"
            className="bg-[#D9D9D9] rounded-[5px] h-[40px] pl-[10px] outline-none"
            name="search"
            placeholder="Search..."
          />
          <Icon
            icon="material-symbols:search-rounded"
            style={{
              fontSize: "20px",
              color: "#A6A4A4",
              marginLeft: "-40px",
              marginTop: "10px",
            }}
          />
        </div>
        <div className="flex justify-between w-[180px] items-center">
          <Icon icon="carbon:user-avatar-filled" style={{
              fontSize: "30px",
            }} />
          <p className="font-bold">Gashugi Aderline</p>
          <Icon
            icon="ph:caret-down-bold"
                style={{
                fontSize: "20px",
                }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;

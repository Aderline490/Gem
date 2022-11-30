import SideBar from "./SideBar";
import Header from "./Header";

const Dashboard = () => {
  return (
    <>
      <div className="absolute w-full flex z-0">
        <SideBar />
        <div className="w-4/5 flex flex-col">
          <Header />
          <div className="">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import React from "react";

const Sidebar = ({ activeMenu, setActiveMenu, theme={theme} }) => {
  const menuItems = [
    { icon: "/src/assets/alltasks.svg", label: "All Tasks" },
    { icon: "/src/assets/today.svg", label: "Today" },
    { icon: "/src/assets/important.svg", label: "Important" },
    { icon: "/src/assets/planned.svg", label: "Planned" },
    { icon: "/src/assets/assigned.svg", label: "Assigned to me" },
  ];

  return (
    <div className={`w-[280px] h-[850px] flex flex-col gap-[9px] mt-[103px]  relative  p-5 transition-transform duration-300 ease-in-out ${theme === 'light'? "bg-[#EEF6EF]": "bg-[#2C2C2C]"} `}>
      <div className="flex flex-col items-center gap-[15px] mt-[-60px] ml-[9px]">
        <img
          src="/src/assets/profile.jpeg"
          alt=""
          className="w-[118px] h-[118px] rounded-full object-cover"
        />
        <p className="text-[15px] font-medium leading-[20px] text-[#1B281B] -ml-[8px]">
          Hey, ABCD
        </p>
      </div>

      <div className={`flex flex-col py-6 ${theme === 'light'?"bg-[#FBFDFC]":"bg-[#232323]"}`}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex gap-4 p-2 rounded-md cursor-pointer transition-all ${
              activeMenu === index ? "bg-[#EEF6EF] text-[#357937]" : ""
            }`}
            onClick={() => setActiveMenu(index)}
          >
            <img
              src={item.icon}
              alt=""
              className={`w-6 h-6 cursor-pointer ${
                activeMenu === index
                  ? "filter brightness-75 sepia-[99%] saturate-[665%] hue-rotate-[93deg]"
                  : ""
              }`}
            />
            <p
              className={`text-[15px] font-medium leading-5 cursor-pointer ${
                activeMenu === index ? "text-[#357937]" : "text-[#1B281B]"
              }`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-[#FBFDFC] p-8 flex gap-4">
        <img src="/src/assets/plus.svg" alt="" className="w-6 h-6 cursor-pointer" />
        <p className="text-[15px] font-medium cursor-pointer">Add list</p>
      </div>

      <div className="bg-white p-4 flex flex-col mt-2 shadow-sm">
        <div className="px-5 flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <p className="text-[13.3px] font-medium">Today Tasks</p>
            <p className="text-[21.27px] font-medium">11</p>
          </div>
          <img src="/src/assets/info.svg" alt="" />
        </div>
        <hr className="opacity-20 my-5" />
        <div className="flex items-center justify-center">
          <img src="/src/assets/donute.svg" alt="" />
        </div>
        <div className="flex items-center px-5 gap-4 mt-3">
          <div className="flex gap-1 items-center">
            <img src="/src/assets/green.svg" alt="" />
            <p className="text-[7.98px] font-normal">Pending</p>
          </div>
          <div className="flex gap-1 items-center">
            <img src="/src/assets/darkgreen.svg" alt="" />
            <p className="text-[7.98px] font-normal">Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

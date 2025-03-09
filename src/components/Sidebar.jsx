import React from "react";

const Sidebar = ({ activeMenu, setActiveMenu, theme = { theme } }) => {
  const menuItems = [
    {
      icon:
        theme === "light"
          ? "/assets/alltasks.svg"
          : "/assets/alltasks-white.svg",
      label: "All Tasks",
    },
    {
      icon: theme === "light" ? "/assets/today.svg" : "/assets/today-white.svg",
      label: "Today",
    },
    {
      icon:
        theme === "light" ? "/assets/important.svg" : "/assets/star-white.svg",
      label: "Important",
    },
    {
      icon:
        theme === "light" ? "/assets/planned.svg" : "/assets/planned-white.svg",
      label: "Planned",
    },
    {
      icon:
        theme === "light"
          ? "/assets/assigned.svg"
          : "/assets/assigned-white.svg",
      label: "Assigned to me",
    },
  ];

  return (
    <div
      className={`w-[280px] h-[850px] flex flex-col gap-[9px] mt-[103px]  relative  p-5 transition-transform duration-300 ease-in-out ${
        theme === "light" ? "bg-[#EEF6EF]" : "bg-[#2C2C2C]"
      } `}
    >
      <div className="flex flex-col items-center gap-[15px] mt-[-60px] ml-[9px]">
        <img
          src="/assets/profile.jpeg"
          alt=""
          className="w-[118px] h-[118px] rounded-full object-cover"
        />
        <p className="text-[15px] font-medium leading-[20px] text-[#1B281B] -ml-[8px]">
          Hey, ABCD
        </p>
      </div>

      <div
        className={`flex flex-col py-6 ${
          theme === "light" ? "bg-[#FBFDFC]" : "bg-[#232323]"
        }`}
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex gap-4 p-2 rounded-md cursor-pointer transition-all 
              ${
                activeMenu === index
                  ? theme === "light"
                    ? "bg-[#EEF6EF] text-[#357937]"
                    : "bg-[#35793729] text-[#98E19B]"
                  : ""
              }`}
            onClick={() => setActiveMenu(index)}
          >
            <img
              src={item.icon}
              alt=""
              className={`w-6 h-6 cursor-pointer 
    ${
      activeMenu === index
        ? theme === "dark"
          ? "filter brightness-0 invert-[72%] sepia-[22%] saturate-[180%] hue-rotate-[60deg]"
          : "filter brightness-75 sepia-[99%] saturate-[665%] hue-rotate-[93deg]"
        : ""
    }`}
            />

            <p
              className={`text-[15px] font-medium leading-5 cursor-pointer ${
                theme === "light" ? "text-[#1B281B]" : "text-[#ffffff]"
              }  ${activeMenu === index 
      ? theme === "dark" 
        ? "text-[rgb(87,227,91)]"  // Dark mode + active
        : "text-[#357937]"  // Light mode + active
      : theme === "dark" 
        ? "text-[#98E19B]"   // Dark mode + inactive
        : "text-[#1B281B]"   // Light mode + inactive
    }`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <div
        className={`${
          theme === "light" ? "bg-[#EEF6EF]" : "bg-[#232323]"
        } p-8 flex gap-4`}
      >
        <div>
          {theme === "light" ? (
            <img
              src="/assets/plus.svg"
              alt=""
              className="w-6 h-6 cursor-pointer"
            />
          ) : (
            <img
              src="/assets/plus-white.svg"
              alt=""
              className="w-6 h-6 cursor-pointer"
            />
          )}
        </div>
        <p className="text-[15px] font-medium cursor-pointer">Add list</p>
      </div>

      <div
        className={`${
          theme === "light" ? "bg-[#EEF6EF]" : "bg-[#232323]"
        } p-4 flex flex-col mt-2 shadow-sm`}
      >
        <div className="px-5 flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <p className="text-[13.3px] font-medium">Today Tasks</p>
            <p className="text-[21.27px] font-medium">11</p>
          </div>
          <img src="/assets/info.svg" alt="" />
        </div>
        <hr className="opacity-20 my-5" />
        <div className="flex items-center justify-center">
          <img src="/assets/donute.svg" alt="" />
        </div>
        <div className="flex items-center px-5 gap-4 mt-3">
          <div className="flex gap-1 items-center">
            <img src="/assets/green.svg" alt="" />
            <p className="text-[7.98px] font-normal">Pending</p>
          </div>
          <div className="flex gap-1 items-center">
            <img src="/assets/darkgreen.svg" alt="" />
            <p className="text-[7.98px] font-normal">Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

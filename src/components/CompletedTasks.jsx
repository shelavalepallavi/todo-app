import React from "react";

const CompletedTasks = () => {
  const tasks = [
    "Buy groceries",
    "Finish reading book",
    "Update portfolio",
    "Call the doctor",
  ];

  return (
    <div className="flex flex-col">
      <p className="text-[#1B281B] text-[15px] font-normal leading-5 py-[5px] pb-[25px]">
        Completed
      </p>
      {tasks.map((task, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-[17px] px-[32px] border-t border-[#496E4B33]"
        >
          <div className="flex items-center gap-[15px]">
            <input
              type="checkbox"
              checked={true}
              readOnly
              className="appearance-none w-[18px] h-[18px] border-2 border-[#1E1E1E] rounded-[2px] cursor-pointer relative 
                         checked:bg-[#357937] checked:border-none checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:items-center checked:before:justify-center checked:before:w-full checked:before:h-full"
            />
            <p className="text-[#1B281B] text-[15px] font-normal leading-5 line-through">
              {task}
            </p>
          </div>
          <img src="/src/assets/star.svg" alt="Star Icon" className="w-5 h-5" />
        </div>
      ))}
    </div>
  );
};

export default CompletedTasks;

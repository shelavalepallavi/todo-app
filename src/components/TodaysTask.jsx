import React from "react";

const TodayTasks = ({ todos, viewDetail,setViewDetail, setSelectedItem, changeStyle, theme }) => {
  const todayDate = new Date().toISOString().split('T')[0]; // Get today's date
  const todaysTodos = todos.filter(todo => todo.date === todayDate);
  
 

  return (
    <div className={`flex ${changeStyle ? "flex-row" : "flex-col"} ${changeStyle ? "gap-4": "gap-0"} ${changeStyle? "flex-wrap":"flex-nowrap"}`}>
      {todaysTodos.length > 0 ?(
        todaysTodos.map((todo) => (
          <div
            key={todo.id}
            className={`flex ${changeStyle? "gap-2":"justify-between"}  items-center px-4  ${changeStyle? "border": "border-t"} ${changeStyle? "py-10":"py-7"} border-[#496E4B33]`}
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
            <input
                  type="checkbox"
                  className={`appearance-none w-5 h-5  border-2 rounded-sm cursor-pointer relative checked:bg-green-800 checked:border-none checked:after:content-['✓'] checked:after:text-white 
                  checked:after:font-medium
                  checked:after:absolute
                  checked:after:left-[4px] ${theme === 'light'? "bg-white border-[#1E1E1E]":"bg-[#242424] border-white"}`}
                />
              <p className={` text-[15px] font-normal leading-5 cursor-pointer ${theme === 'light'? "text-[#1B281B]":"text-[#f5f5f5]"}`} onClick={() =>   {setSelectedItem({ id: todo.id, text: todo.text });
                setViewDetail(!viewDetail)}}>
                {todo.text}
              </p>
              <span className={`text-xs px-1 py-1 ml-2 rounded bg-gray-200 ${theme === 'light'? "":"text-[black]"}`}>
                  {todo.priority}
                </span>
              {todo.weather && todo.weather !== "N/A" && (
                <div className={`text-xs  flex gap-2 items-center ${theme === 'light'? "text-gray-600":"text-white"}`}>
                  🌡️ {todo.weather}
                </div>
              )}
            </div>
            <div>
            {theme === 'light'? (<img
              src="/assets/star.svg"
              alt="star"
              className="w-5 h-5 cursor-pointer "
            />):(<img
              src="/assets/star-white.svg"
              alt="star"
              className="w-5 h-5 cursor-pointer "
            />)}
            </div>
          </div>
        ))
      )
      : (
        <p className="text-gray-500">No tasks for today</p>
      )}
    </div>
  );
};

export default TodayTasks;

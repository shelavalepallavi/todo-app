import React from "react";

const AllTasks = ({ todos, setViewDetail, setSelectedItem }) => {
  return (
    <div className="flex flex-col">
      {todos.length === 0 ? (
        <p className="text-gray-500">No tasks available.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li
              className="flex justify-between items-center px-4 py-7 border-t border-[#496E4B33] "
              key={todo.id}
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 bg-white border-2 border-[#1E1E1E] rounded-sm cursor-pointer relative checked:bg-green-800 checked:border-none checked:after:content-['✓'] checked:after:text-white 
                checked:after:font-medium
                checked:after:absolute
                checked:after:left-[4px] "
                />

                <p
                  className="text-[#1B281B] text-[15px] font-normal leading-5 cursor-pointer"
                  onClick={() => {
                    console.log("Selected Todo:", todo); // ✅ Check structure in console
                    setSelectedItem({ id: todo.id, text: todo.text });
                    setViewDetail(true);
                  }}
                >
                  {todo.text}
                </p>

                <span className="text-xs px-2 py-1 ml-2 rounded bg-gray-200">
                  {todo.priority}
                </span>
                {todo.weather && todo.weather !== "N/A" && (
                <div className="text-xs text-gray-600 flex gap-2 items-center ml-8">
                  🌡️ {todo.weather}
                </div>
              )}
              </div>
              <div>
                <img
                  src="/assets/star.svg"
                  alt="star"
                  className="w-5 h-5 cursor-pointer "
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllTasks;

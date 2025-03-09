
import React, { useState } from 'react';
import { fetchWeather } from '../redux/weatherActions';
import { useDispatch, useSelector } from 'react-redux';

const AddTodo = ({addTodo, changeStyle, setChangeStyle, theme}) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [city, setCity] = useState("");

  const dispatch = useDispatch();
  const { weather, loading, error } = useSelector((state) => state.weather);

  const handleAdd = () => {
    if (task.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: task,
      priority: priority,
      completed: false,
      city: city,
      weather: weather ? `${weather.temp}°C, ${weather.description}` : "N/A",
    };
    addTodo(newTodo);
    setTask("");
    setPriority("Medium");
    setCity("");
  };


  return (
    <div className="p-10 bg-gradient-to-t from-[rgba(53,121,55,0.1)] to-[rgba(208,255,210,0.1)]  flex flex-col gap-12 border-t border-[#496E4B33] ">
      <div className="pt-12 flex  flex-col lg:flex-row">
        <input
          type="text"
          placeholder="Add A Task"
          className={ `bg-transparent border-0 outline-none text-[15px] font-medium leading-5  w-full ${theme === 'light'? "text-[#1B281BB8]":"text-#ffffff" }`}
          value={task} onChange={(e) => setTask(e.target.value)}
        />
         <select value={priority} onChange={(e) => setPriority(e.target.value)} className="border p-2 rounded">
        <option value="High">🔥 High</option>
        <option value="Medium">⚡ Medium</option>
        <option value="Low">⏳ Low</option>
      </select>
      </div>
      <div className='flex flex-col gap-2'>
        {/* Weather Input */}
      <div className="flex flex-wrap flex-col lg:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Enter City Name"
          className="border p-2 rounded outline-0"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-green-900 text-white px-4 py-2 rounded"
          onClick={()=> dispatch(fetchWeather(city))}
        >
          Get Weather
        </button>
      </div>

      {/* Display Weather */}
      {/* Display Weather */}
      {loading && <p>Loading weather...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weather && (
        <div className={`text-sm  ${theme === 'light'? "text-[#1B281BB8]":"text-#ffffff" }`}>
          <p>🌡️ Temperature: {weather.temp}°C</p>
          <p>🌤️ Condition: {weather.description}</p>
        </div>
      )}
      </div>
      
      <div className="flex flex-wrap flex-col lg:flex-row lg:justify-between lg:items-end gap-2 ">
        <div className="flex gap-6">
          <div>
            {theme === 'light'?(<img src="/assets/notification.svg" alt="Notification" className="w-6 h-6 cursor-pointer" />):(<img src="/assets/notification-white.svg" alt="Notification" className="w-6 h-6 cursor-pointer" />)}
          </div>
          <div>
          {theme === 'light'?(<img src="/assets/repeat.svg" alt="Repeat" className="w-6 h-6 cursor-pointer" onClick={()=> setChangeStyle(!changeStyle)} />):(<img src="/assets/repeat-white.svg" alt="Repeat" className="w-6 h-6 cursor-pointer" onClick={()=> setChangeStyle(!changeStyle)} />)}
          </div>
          <div>
          {theme === 'light'?(<img src="/assets/calender.svg" alt="Calendar" className="w-6 h-6 cursor-pointer" />):(<img src="/assets/calender-white.svg" alt="Calendar" className="w-6 h-6 cursor-pointer" />)}
          
          </div>
        </div>
        <button className={` border-0 outline-none px-4 py-2 rounded-lg  text-[15px] font-semibold leading-5 cursor-pointer ${theme === 'light'? "bg-[#35793729] text-[#357937]":"bg-[#357937E0] text-[#CFCFCF]"}`} onClick={handleAdd}>
          ADD TASK
        </button>
      </div>
    </div>
  );
};

export default AddTodo;

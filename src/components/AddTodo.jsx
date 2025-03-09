
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
      <div className="pt-12 flex ">
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
      <div className="flex items-center gap-4">
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
      
      <div className="flex justify-between items-end ">
        <div className="flex gap-6">
          <img src="/assets/notification.svg" alt="Notification" className="w-6 h-6 cursor-pointer" />
          <img src="/assets/repeat.svg" alt="Repeat" className="w-6 h-6 cursor-pointer" onClick={()=> setChangeStyle(!changeStyle)} />
          <img src="/assets/calender.svg" alt="Calendar" className="w-6 h-6 cursor-pointer" />
        </div>
        <button className="bg-[#35793729] border-0 outline-none px-4 py-2 rounded-lg text-[#357937] text-[15px] font-semibold leading-5 cursor-pointer" onClick={handleAdd}>
          ADD TASK
        </button>
      </div>
    </div>
  );
};

export default AddTodo;

import React, { useState } from "react";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Section = ({ viewDetail, setViewDetail, selectedItem, deleteTodo, theme }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className={` w-md flex flex-col py-10 ps-6 relative ${theme === 'light'? 'bg-[#EEF6EF]':'bg-[#2C2C2C] '}`}>
      <div className="flex items-center justify-between border-t border-[rgba(73,110,75,0.2)] py-6 ps-2 pr-5">
        <div className="flex items-center gap-3">
        <input
                  type="checkbox"
                  className={`appearance-none w-5 h-5  border-2 rounded-sm cursor-pointer relative checked:bg-green-800 checked:border-none checked:after:content-['✓'] checked:after:text-white 
                  checked:after:font-medium
                  checked:after:absolute
                  checked:after:left-[4px] ${theme === 'light'? "bg-white border-[#1E1E1E]":"bg-[#242424] border-white"}`}
                />
          <p className={` text-[15px] font-normal leading-5 ${theme==='light'?"text-[#1B281B]":"text-[#f5f5f5]"}`}>
            {selectedItem.text}
          </p>
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
      <div className="flex items-center gap-6 border-t border-[rgba(73,110,75,0.2)] py-6 ps-2">
        <div>
          {theme === 'light'?(<img src="/assets/plus.svg" alt="" className="w-6 cursor-pointer" />):(<img src="/assets/plus-white.svg" alt="" className="w-6 cursor-pointer" />)}
        
        </div>
        <p className={` text-[15px] font-normal leading-5 ${theme==='light'?"text-[#1B281B]":"text-[#f5f5f5]"}`}>
          Add Step
        </p>
      </div>
      <div className="flex items-center gap-6 border-t border-[rgba(73,110,75,0.2)] py-6 ps-2">
        {theme === 'light'? (<img
          src="/assets/notification.svg"
          alt=""
          className="w-6 cursor-pointer"
        />):(<img
          src="/assets/notification-white.svg"
          alt=""
          className="w-6 cursor-pointer"
        />)}
        <p className={` text-[15px] font-normal leading-5 ${theme==='light'?"text-[#1B281B]":"text-[#f5f5f5]"}`}>
          Set Reminder
        </p>
      </div>
      <div
        className={`border-t border-[rgba(73,110,75,0.2)] pt-6 ps-2 ${
          showCalendar ? "pb-28" : "pb-6"
        }`}
      >
        <div className="flex items-center gap-6">
        {theme === 'light'? (<img
            src="/assets/calender.svg"
            alt=""
            className="w-6 cursor-pointer"
            onClick={() => setShowCalendar(!showCalendar)}
          />):(<img
            src="/assets/calender-white.svg"
            alt=""
            className="w-6 cursor-pointer"
            onClick={() => setShowCalendar(!showCalendar)}
          />)}
          <p className={` text-[15px] font-normal leading-5 ${theme==='light'?"text-[#1B281B]":"text-[#f5f5f5]"}`}>
            Due Date
          </p>
        </div>
        {showCalendar && (
         <div
         className={`absolute p-4 shadow-md rounded-lg mt-2 ${
           theme === "light" ? "bg-white" : "bg-[#1F1F1F]"
         }`}
       >
         <LocalizationProvider dateAdapter={AdapterDayjs}>
           <DatePicker
             label="Select date"
             value={selectedDate}
             onChange={(newValue) => setSelectedDate(newValue)}
             renderInput={(params) => (
               <TextField
                 {...params}
                 InputProps={{
                   sx: {
                     color: theme === "light" ? "black" : "white",
                     backgroundColor: theme === "light" ? "white" : "#1F1F1F",
                     "& .MuiOutlinedInput-root": {
                       "& fieldset": {
                         borderColor: theme === "light" ? "#ccc" : "#555",
                       },
                       "&:hover fieldset": {
                         borderColor: theme === "light" ? "black" : "white",
                       },
                     },
                   },
                 }}
                 InputLabelProps={{
                   sx: {
                     color: theme === "light" ? "black" : "white",
                   },
                 }}
               />
             )}
           />
         </LocalizationProvider>
       </div>
        )}
      </div>
      <div className="flex items-center gap-6 border-t border-[rgba(73,110,75,0.2)] py-6 ps-2">
      {theme === 'light'? (<img
          src="/assets/repeat.svg"
          alt=""
          className="w-6 cursor-pointer"
        />):(<img
          src="/assets/repeat-white.svg"
          alt=""
          className="w-6 cursor-pointer"
        />)}
        <p className={` text-[15px] font-normal leading-5 ${theme==='light'?"text-[#1B281B]":"text-[#f5f5f5]"}`}>
          Repeat
        </p>
      </div>
      <div className=" border-t border-[rgba(73,110,75,0.2)] py-6 ps-8">
        <p className={`text-[15px] font-normal leading-5 ${theme === 'light'?"text-[#1B281B96]":"text-[#f5f5f5]"} `}>
          Add Note
        </p>
      </div>
      <div className="border-t border-[rgba(73,110,75,0.2)] flex  items-center gap-20 xl:gap-30 py-6 px-3 fixed bottom-0 ">
        <div>
        {theme === 'light'? (<img
          src="/assets/close.svg"
          alt=""
          className="w-5 cursor-pointer"
          onClick={() => setViewDetail(!viewDetail)}
        />):(<img
          src="/assets/close-white.svg"
          alt=""
          className="w-5 cursor-pointer"
          onClick={() => setViewDetail(!viewDetail)}
        />)}
        </div>
       <p className={` text-[15px] font-normal leading-5 ${theme==='light'?"text-[#1B281B]":"text-[#f5f5f5]"}`}>
          Created Today
        </p>
       <div>
       {theme === 'light'? (<img
          src="/assets/delete.svg"
          alt=""
          className="w-6 cursor-pointer"
          onClick={()=> {
            deleteTodo(selectedItem.id); // Delete the selected todo
            setViewDetail(false);
          }}
        />):(<img
          src="/assets/delete-white.svg"
          alt=""
          className="w-6 cursor-pointer"
          onClick={()=> {
            deleteTodo(selectedItem.id); // Delete the selected todo
            setViewDetail(false);
          }}
        />)}
       </div>

      </div>
    </div>
  );
};

export default Section;

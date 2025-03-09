import React, { useState } from "react";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Section = ({ viewDetail, setViewDetail, selectedItem, deleteTodo }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="bg-[#EEF6EF] w-md flex flex-col py-10 ps-6 relative ">
      <div className="flex items-center justify-between border-t border-[rgba(73,110,75,0.2)] py-6 ps-2 pr-5">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="appearance-none w-5 h-5 bg-white border-2 border-[#1E1E1E] rounded-sm cursor-pointer relative checked:bg-green-800 checked:border-none checked:after:content-['✓'] checked:after:text-white 
                checked:after:font-medium
                checked:after:absolute
                checked:after:left-[4px] "
          />
          <p className="text-[#1B281B] text-[15px] font-normal leading-5">
            {selectedItem.text}
          </p>
        </div>
        <img
          src="/src/assets/star.svg"
          alt="star"
          className="w-5 h-5 cursor-pointer "
        />
      </div>
      <div className="flex items-center gap-6 border-t border-[rgba(73,110,75,0.2)] py-6 ps-2">
        <img src="/src/assets/plus.svg" alt="" className="w-6 cursor-pointer" />
        <p className="text-[#1B281B] text-[15px] font-normal leading-5">
          Add Step
        </p>
      </div>
      <div className="flex items-center gap-6 border-t border-[rgba(73,110,75,0.2)] py-6 ps-2">
        <img
          src="/src/assets/notification.svg"
          alt=""
          className="w-6 cursor-pointer"
        />
        <p className="text-[#1B281B] text-[15px] font-normal leading-5">
          Set Reminder
        </p>
      </div>
      <div
        className={`border-t border-[rgba(73,110,75,0.2)] pt-6 ps-2 ${
          showCalendar ? "pb-28" : "pb-6"
        }`}
      >
        <div className="flex items-center gap-6">
          <img
            src="/src/assets/calender.svg"
            alt=""
            className="w-6 cursor-pointer"
            onClick={() => setShowCalendar(!showCalendar)}
          />
          <p className="text-[#1B281B] text-[15px] font-normal leading-5">
            Due Date
          </p>
        </div>
        {showCalendar && (
          <div className="absolute bg-white p-4 shadow-md rounded-lg mt-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Select date"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
        )}
      </div>
      <div className="flex items-center gap-6 border-t border-[rgba(73,110,75,0.2)] py-6 ps-2">
        <img
          src="/src/assets/repeat.svg"
          alt=""
          className="w-6 cursor-pointer"
        />
        <p className="text-[#1B281B] text-[15px] font-normal leading-5">
          Repeat
        </p>
      </div>
      <div className=" border-t border-[rgba(73,110,75,0.2)] py-6 ps-8">
        <p className="text-[#1B281B96] text-[15px] font-normal leading-5">
          Add Note
        </p>
      </div>
      <div className="border-t border-[rgba(73,110,75,0.2)] flex  items-center gap-30 py-6 px-3 fixed bottom-0 ">
        <img
          src="/src/assets/close.svg"
          alt=""
          className="w-[14px] cursor-pointer"
          onClick={() => setViewDetail(!viewDetail)}
        />
        <p className="text-[#1B281B96] text-[15px] font-normal leading-5">
          Created Today
        </p>
        <img
  src="/src/assets/delete.svg"
  alt="delete"
  className="w-6 cursor-pointer"
  onClick={() => {
    deleteTodo(selectedItem.id);
    setViewDetail(false)
  }}
/>

      </div>
    </div>
  );
};

export default Section;

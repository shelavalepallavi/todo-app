import React, { act, useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import TodaysTask from './TodaysTask'
import CompletedTasks from './CompletedTasks'
import AllTasks from './AllTasks'
import { useSelector } from 'react-redux'
import Login from './Login'

const Container = ({activeMenu, viewDetail, setViewDetail, setSelectedItem, setDeleteTodo, theme}) => {

  const [todos, setTodos] = useState([])
  const [changeStyle, setChangeStyle] = useState(false)
  const { isAuthenticated } = useSelector((state) => state.auth);

 
useEffect(() => {
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  setTodos(savedTodos);
}, []);

useEffect(() => {
  if (todos.length > 0) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}, [todos]);

const addTodo = (newTodo) => {
  const todayDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  const todoWithDate = { ...newTodo, date: todayDate }; // Add date property
  setTodos((prevTodos) => [...prevTodos, todoWithDate]);
};


const deleteTodo = (id) => {

  const updatedTodos = todos.filter((todo) => todo.id !== id);
  setTodos(updatedTodos);
  localStorage.setItem("todos", JSON.stringify(updatedTodos)); // ✅ Update localStorage
  setViewDetail(false);
};


useEffect(() => {
  setDeleteTodo(() => deleteTodo); // ✅ Pass the function correctly
}, [todos]); // ✅ Ensure it updates when todos change




  
  return (
    <div className='flex flex-col flex-1 py-6'>
      <div className='flex items-center py-1'>
      <p className={`text-sm font-medium  leading-4 ${theme === 'light'? "text-[#142E159E]": "text-[#97fb9b]"}`}>To Do</p>
      <img src="/assets/down.svg" alt="" />
      </div>
      {!isAuthenticated ? (
        <Login />
      ) : (
       <div>
         <AddTodo addTodo={addTodo} changeStyle={changeStyle} setChangeStyle={setChangeStyle} theme={theme}/>
      {activeMenu === 0 && <AllTasks todos={todos}  viewDetail={viewDetail} setViewDetail={setViewDetail} setSelectedItem={setSelectedItem} theme={theme}/>}
      {activeMenu === 1 && <TodaysTask todos={todos}  viewDetail={viewDetail} setViewDetail={setViewDetail} setSelectedItem={setSelectedItem} changeStyle={changeStyle} theme={theme}/>}
      <CompletedTasks/>
       </div>
      )}
      
    </div>
  )
}

export default Container

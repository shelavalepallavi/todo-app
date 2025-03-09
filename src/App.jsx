import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Container from './components/Container';
import Section from './components/Section';

const App = () => {
  const [open, setOpen] = useState(true)
  const [activeMenu, setActiveMenu] = useState(1)
  const [viewDetail, setViewDetail] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteTodo, setDeleteTodo] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className='w-full flex flex-col px-12'>
      <Navbar setOpen={setOpen} toggleTheme={toggleTheme} theme={theme}/>
      <div className='flex gap-12 '>
        {open && <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} theme={theme}/>}
        <Container activeMenu={activeMenu} viewDetail={viewDetail} setViewDetail={setViewDetail} setSelectedItem={setSelectedItem} setDeleteTodo={setDeleteTodo} theme={theme}/>
        {viewDetail && <Section viewDetail={viewDetail} setViewDetail={setViewDetail} selectedItem={selectedItem} deleteTodo={deleteTodo} theme={theme}/>}
      </div>
    </div>
  )
}

export default App

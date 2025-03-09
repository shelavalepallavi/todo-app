import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from "../redux/authSlice";
import Login from './Login';

const Navbar = ({ setOpen, toggleTheme, theme }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [showLogin, setShowLogin] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
    <div className="w-full h-14 flex items-center justify-between py-3 ">
      {/* Left Section */}
      <div className="flex gap-6">
        <div>
          {theme === 'light'?(
            <img src="/assets/menu.svg" alt="Menu" onClick={handleClick} className="cursor-pointer" />
          ):(
            <img src="/assets/menu-white.svg" alt="Menu" onClick={handleClick} className="cursor-pointer" />
          )}
        
        </div>
        <div className="flex items-center gap-1">
          <img src="/assets/logo.svg" alt="Logo" className="w-[26.63px] h-[26.63px] cursor-pointer" />
          <p className="font-sen text-2xl font-bold leading-6 tracking-[-0.04em] text-[#3F9142]">DoIt</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex gap-6">
        <div>
          {theme === 'light'? (
            <img src="/assets/search.svg" alt="Search" className="w-6 cursor-pointer" />
          ):(
            <img src="/assets/search-white.svg" alt="Search" className="w-6 cursor-pointer" />
          )}
        </div>
        <div>
          {theme === 'light'?(
            <img src="/assets/app-grid.svg" alt="Apps" className="w-6 cursor-pointer" />
          ):(
            <img src="/assets/grid-white.svg" alt="Apps" className="w-6 cursor-pointer" />
          )}
        
        </div>
        <div onClick={toggleTheme} className=''>
          {theme === 'light'? (
            <img src="/assets/moon.svg" alt="Dark Mode" className="w-6 cursor-pointer" />):( <img src="/assets/sun.svg" alt="Dark Mode" className="w-6 cursor-pointer" />)}
        
       
        </div>
        
        {isAuthenticated ? (
        <div className="">
          <button
            onClick={() => dispatch(logout())}
            className="bg-green-900 text-white px-4 py-2 rounded cursor-pointer"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
        onClick={() => setShowLogin(true)} // Mock login
          className="bg-green-900 text-white px-4 py-2 rounded cursor-pointer"
        >
          Login
        </button>
      )}
      </div>
      
    </div>
    {showLogin && <Login setShowLogin={setShowLogin} />}
    </>
  );
};

export default Navbar;



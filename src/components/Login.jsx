import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const Login = ({setShowLogin}) => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login({ username })); // Mock authentication
      setShowLogin(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 w-full">
      <div className="bg-white p-5  rounded-lg shadow-md max-w-sm mx-auto">
      <h2 className="text-lg font-bold mb-3">Login</h2>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 w-full rounded my-5"
      />
      <button onClick={handleLogin} className="bg-green-600 text-white px-4 py-2 rounded w-full cursor-pointer">
        Login
      </button>
    </div>
    </div>
  );
};

export default Login;

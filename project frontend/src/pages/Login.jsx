import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: emailOrUsername, // assuming email login
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/user-dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#55d6c2]">
      <form
        onSubmit={handleLogin}
        className="bg-teal-200 p-10 rounded-md shadow-lg text-center w-[400px]"
      >
        <h2 className="text-2xl font-semibold italic mb-8">Helpdesk System</h2>

        {error && (
          <p className="text-red-600 text-sm mb-4">{error}</p>
        )}

        <input
          type="text"
          placeholder="Email or Username"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          className="w-full px-4 py-4 mb-4 border border-gray-400 rounded-md text-base"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-4 mb-4 border border-gray-400 rounded-md text-base"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
        >
          Sign In
        </button>

        <div className="flex justify-between mt-4 text-sm px-2">
          <Link to="/forgot-password" className="text-red-600 hover:underline">
            Forgot password
          </Link>
          <div className="flex space-x-1 text-sm px-2">
            <p>Don't have an account?</p>
            <Link to="/signup" className="text-blue-700 hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

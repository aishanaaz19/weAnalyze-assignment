import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [success, setSuccess]   = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await axios.post("https://weanalyze-assignment.onrender.com/api/auth/register", {
        username,
        email,
        password,
      });

      setSuccess(res.data.message || "Registered successfully!");
      setTimeout(() => navigate("/"), 1500); // Redirect to login after 1.5s
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#55d6c2]">
      <form
        onSubmit={handleSignup}
        className="bg-teal-200 p-10 rounded-md shadow-lg w-[500px] text-center"
      >
        <h2 className="text-2xl font-semibold italic mb-2">Helpdesk System</h2>
        <p className="text-base mb-6">Sign up here</p>

        {/* Show Error/Success */}
        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-4">{success}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-[344px] h-[50px] px-4 py-2 mb-4 border border-gray-400 rounded-md text-base"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[344px] h-[50px] px-4 py-2 mb-6 border border-gray-400 rounded-md text-base"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[344px] h-[50px] px-4 py-2 mb-4 border border-gray-400 rounded-md text-base"
        />

        <button
          type="submit"
          className="w-[200px] bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up
        </button>

        <div className="flex justify-center space-x-1 mt-4 px-2 text-sm">
          <p>Already have an account?</p>
          <Link to="/" className="text-blue-700 hover:underline">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;

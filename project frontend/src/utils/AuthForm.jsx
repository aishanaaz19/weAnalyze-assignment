import { useState } from "react";

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleMode = () => setIsSignup(!isSignup);

  return (
    <div className="flex items-center justify-center h-screen" style={{ backgroundColor: "#55d6c2" }}>
      <div className="bg-[#a7e5df] p-10 rounded-md shadow-md w-[400px] text-center">
        <h2 className="text-2xl font-semibold italic mb-2">Helpdesk System</h2>
        <p className="text-base mb-6">
          {isSignup ? "Sign up here" : "Welcome back! Please sign in"}
        </p>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          className="w-[344px] h-[50px] px-4 py-2 mb-4 border border-gray-400 rounded-md text-base"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-[344px] h-[50px] px-4 py-2 mb-4 border border-gray-400 rounded-md text-base"
        />

        {/* Email field for Sign Up only */}
        {isSignup && (
          <input
            type="email"
            placeholder="Email"
            className="w-[344px] h-[50px] px-4 py-2 mb-6 border border-gray-400 rounded-md text-base"
          />
        )}

        {/* Submit Button */}
        <button
          className={`w-[200px] ${
            isSignup ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"
          } text-white py-3 rounded-lg transition`}
        >
          {isSignup ? "Sign Up" : "Sign In"}
        </button>

        {/* Bottom Links */}
        <div className="flex justify-between mt-4 px-2 text-sm">
          <a href="#" className="text-red-600 hover:underline">
            Forgot password
          </a>
          <button
            onClick={toggleMode}
            className="text-black hover:underline cursor-pointer"
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

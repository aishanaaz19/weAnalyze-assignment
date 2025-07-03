import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#55d6c2]">
      <div className="bg-[#a7e5df] p-10 rounded-md shadow-md w-[400px] text-center">
        <p className="text-base mb-6">
          Don’t worry, Enter your email below and we will <br />
          send you a link to change password.
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full h-[50px] px-4 py-2 mb-6 border border-gray-400 rounded-md text-base"
        />

        <button className="w-[200px] bg-green-600 text-white py-3 rounded-lg mb-4 hover:bg-green-700 transition">
          Submit
        </button>

        <Link
          to="/"
          className="inline-block w-[200px] bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;

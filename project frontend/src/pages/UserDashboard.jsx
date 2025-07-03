import {
  FaTh,
  FaTicketAlt,
  FaClipboardList,
  FaBell,
  FaUserCircle,
  FaSignOutAlt,
  FaGlobe,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirect to login
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Top Navbar */}
      <div className="flex items-center justify-between bg-[#55d6c2] p-4 text-white">
        <h1 className="text-xl font-bold italic">Helpdesk</h1>
        <div className="flex items-center gap-4">
          <div className="bg-black text-white text-sm px-2 py-1 rounded">ENG</div>
          <FaBell className="text-lg cursor-pointer hover:text-gray-200 transition" />
          <FaUserCircle className="text-lg cursor-pointer hover:text-gray-200 transition" />
          <FaSignOutAlt
            className="text-lg cursor-pointer hover:text-red-200 transition"
            onClick={handleLogout}
            title="Logout"
          />
        </div>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-gray-200 w-52 p-4">
          <ul className="space-y-4 text-black font-medium">
            <li className="flex items-center gap-2 cursor-pointer hover:text-[#55d6c2]">
              <FaTh /> Dashboard
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-[#55d6c2]">
              <FaTicketAlt /> New Ticket
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-[#55d6c2]">
              <FaClipboardList /> My Ticket
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-white">
          <h2 className="text-2xl font-semibold text-center mb-6">Dashboard</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
            <div className="bg-blue-500 text-white rounded-lg shadow-lg p-6 text-center">
              <p className="font-semibold mb-2">Total Tickets</p>
              <h3 className="text-4xl font-bold">12</h3>
            </div>
            <div className="bg-green-500 text-white rounded-lg shadow-lg p-6 text-center">
              <p className="font-semibold mb-2">Total Solved</p>
              <h3 className="text-4xl font-bold">8</h3>
            </div>
            <div className="bg-red-400 text-white rounded-lg shadow-lg p-6 text-center">
              <p className="font-semibold mb-2">Total Awaiting Approval</p>
              <h3 className="text-4xl font-bold">2</h3>
            </div>
            <div className="bg-yellow-300 text-black rounded-lg shadow-lg p-6 text-center">
              <p className="font-semibold mb-2">Total in Progress</p>
              <h3 className="text-4xl font-bold">2</h3>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="text-center bg-[#55d6c2] text-xs text-black p-2">
        © Aisha Naaz
      </footer>
    </div>
  );
};

export default Dashboard;

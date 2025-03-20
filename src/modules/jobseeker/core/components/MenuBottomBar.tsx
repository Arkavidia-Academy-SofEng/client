import { FaHome, FaSearch, FaBell, FaEnvelope, FaUser } from "react-icons/fa";

const BottomNavbar = ({ setActiveMenu, activeMenu }: { setActiveMenu: (menu: string) => void, activeMenu: string }) => {
  const menuItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "FindJobs", icon: <FaSearch /> },
    { name: "Notifications", icon: <FaBell /> },
    { name: "Messages", icon: <FaEnvelope /> },
    { name: "Profile", icon: <FaUser /> },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-full px-5 py-3 flex gap-6 border border-gray-200">
      {menuItems.map(({ name, icon }) => (
        <button
          key={name}
          onClick={() => setActiveMenu(name)}
          className={`flex flex-col items-center gap-1 text-sm transition-all duration-300 p-2 rounded-lg ${
            activeMenu === name 
              ? "text-blue-600 font-semibold scale-110 bg-blue-100 shadow-md" 
              : "text-gray-500 hover:text-black hover:bg-gray-100"
          }`}
        >
          <span className="text-lg">{icon}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNavbar;

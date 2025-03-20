import { FaHome, FaSearch, FaBell, FaEnvelope, FaBolt, FaUser, FaCog } from "react-icons/fa";
import Button from "../../../core/design-system/Button";

const MenuSidebar = ({ setActiveMenu, activeMenu }: { setActiveMenu: (menu: string) => void, activeMenu: string }) => {
  return (
    <div className="w-64 bg-white p-4 flex flex-col gap-4">
      <nav className="space-y-4">
        {[
          { name: "Home", icon: <FaHome /> },
          { name: "Job Listing", icon: <FaSearch /> },
          { name: "Notifications", icon: <FaBell /> },
          { name: "Messages", icon: <FaEnvelope /> },
          { name: "Premium", icon: <FaBolt /> },
          { name: "Profile", icon: <FaUser /> },
          { name: "Settings", icon: <FaCog /> },
          { name: "Applicants", icon: <FaUser /> },
          { name: "Hired Candidates", icon: <FaUser /> },
        ].map(({ name, icon }) => (
          <button
            key={name}
            onClick={() => setActiveMenu(name)}
            className={`flex items-center gap-3 ${
              activeMenu === name ? "text-black font-bold" : "text-gray-600 hover:text-black"
            }`}
          >
            {icon} {name}
          </button>
        ))}
      </nav>
      <div className="mt-6 space-y-3">
        <Button className="w-full">Write Article</Button>
        <Button className="w-full">Create Article</Button>
      </div>

      <div className="mt-6 p-4 border rounded-lg shadow-sm">
        <h3 className="font-bold flex items-center space-x-1">
          <span>⚡</span>
          <span>Premium Features</span>
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Upgrade to access exclusive features and boost your job search.
        </p>
        <button className="mt-3 w-full py-2 bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-lg font-semibold">
          Upgrade Now
        </button>
      </div>
    </div>
  );
};

export default MenuSidebar;

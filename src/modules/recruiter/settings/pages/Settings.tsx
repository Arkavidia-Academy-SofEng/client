import { Toaster, toast } from "react-hot-toast";
import { FaUser, FaLock, FaBell, FaPalette, FaGlobe, FaShieldAlt, FaQuestionCircle, FaInfoCircle } from "react-icons/fa";

const settingsOptions = [
  { name: "Account", icon: <FaUser />, description: "Manage your account settings" },
  { name: "Privacy", icon: <FaLock />, description: "Control your privacy options" },
  { name: "Notifications", icon: <FaBell />, description: "Adjust notification preferences" },
  { name: "Appearance", icon: <FaPalette />, description: "Customize your theme" },
  { name: "Language", icon: <FaGlobe />, description: "Change language settings" },
  { name: "Security", icon: <FaShieldAlt />, description: "Enhance your security" },
  { name: "Help & Support", icon: <FaQuestionCircle />, description: "Get assistance" },
  { name: "About", icon: <FaInfoCircle />, description: "Learn more about us" },
  { name: "Logout", icon: <FaUser />, description: "Sign out of your account" },
];

const Settings = () => {
  const handleClick = (setting: string) => {
    toast(`${setting} is under development.`, {
      icon: "⚙️",
      duration: 3000,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <Toaster position="top-center" />
      <h2 className="text-3xl font-bold mb-2 text-gray-900">Settings</h2>
      <p className="text-gray-600 mb-6">Customize your experience and preferences</p>

      {/* Kontainer lebih lebar & lebih padat */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-6 ">
        {settingsOptions.map((option) => (
          <div
            key={option.name}
            onClick={() => handleClick(option.name)}
            className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-blue-100 transition-all duration-300"
          >
            <span className="text-blue-600 text-lg mr-3">{option.icon}</span>
            <div>
              <span className="text-gray-800 font-medium">{option.name}</span>
              <p className="text-sm text-gray-500">{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;

import { useState } from "react";
import AboutMeCard from "../components/AboutMeCard";
import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";
import PortfolioCard from "../components/PortfolioCard";
import ProfileCard from "../components/ProfileCard";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="flex flex-col min-h-screen p-0 gap-y-4">
      <ProfileCard />

      {/* Tabs */}
      <div className="w-full border-b border-gray-300">
        <div className="flex justify-center space-x-8"> {/* Ubah justify-start menjadi justify-center */}
          {["all", "post"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 text-lg font-medium capitalize ${
                activeTab === tab ? "text-blue-600" : "text-gray-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-600 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Konten Berdasarkan Tab */}
      {activeTab === "all" && (
        <>
          <AboutMeCard />
          <ExperienceCard />
          <EducationCard />
          <PortfolioCard />
        </>
      )}
    </div>
  );
};

export default ProfilePage;

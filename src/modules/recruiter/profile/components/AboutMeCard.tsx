import { BiDotsVerticalRounded } from "react-icons/bi";

const AboutMeCard = () => {
  return (
    <div className="border border-gray-300 rounded-2xl p-4 shadow-md w-full">
      <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-3">
        <h2 className="text-lg font-semibold">About Me</h2>
        <BiDotsVerticalRounded className="w-5 h-5 text-gray-600 cursor-pointer" />
      </div>
      <p className="text-sm text-gray-700">
        Passionate frontend developer with 5+ years of experience in building
        scalable web applications. Specialized in React, Next.js, and UI/UX
        design. Always open to new opportunities and collaborations!
      </p>
    </div>
  );
};

export default AboutMeCard;

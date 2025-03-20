import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";

const educationList = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Tech University",
    duration: "2020 - 2022",
    description:
      "Focused on artificial intelligence and machine learning. Conducted research on deep learning applications in computer vision.",
    skills: ["AI", "Machine Learning", "Deep Learning"],
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Web Solutions University",
    duration: "2016 - 2020",
    description:
      "Studied software engineering and web development. Built multiple projects using JavaScript, React, and Node.js.",
    skills: ["JavaScript", "React", "Node.js"],
  },
];

const EducationCard = () => {
  return (
    <div className="border border-gray-300 rounded-2xl p-4 shadow-md w-full">
      <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-3">
        <h2 className="text-lg font-semibold">Education</h2>
        <BiDotsVerticalRounded className="w-5 h-5 text-gray-600 cursor-pointer" />
      </div>
      {educationList.map((edu, index) => (
        <div key={index} className="mb-4 border-b border-gray-300 pb-3 last:border-b-0">
          <h3 className="text-md font-semibold">{edu.degree}</h3>
          <p className="text-sm text-gray-600">{edu.institution}</p>
          <div className="flex items-center text-sm text-gray-500">
            <FaRegCalendarAlt className="w-4 h-4 mr-1" />
            <span>{edu.duration}</span>
          </div>
          <p className="text-sm text-gray-700 mb-3">{edu.description}</p>
          <div className="flex flex-wrap gap-2">
            {edu.skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationCard;

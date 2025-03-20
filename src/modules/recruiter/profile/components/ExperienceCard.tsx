import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp",
    duration: "Jan 2021 - Present",
    description:
      "Passionate frontend developer with 5+ years of experience in building scalable web applications. Specialized in React, Next.js, and UI/UX design.",
    skills: ["React", "TypeScript", "Next.js"],
  },
  {
    role: "Frontend Developer",
    company: "WebSolutions Inc.",
    duration: "Mar 2018 - Dec 2020",
    description:
      "Developed and maintained client websites using JavaScript, HTML, and CSS. Collaborated with designers to implement responsive designs and ensure cross-browser compatibility.",
    skills: ["JavaScript", "HTML/CSS", "Responsive Design"],
  },
];

const ExperienceCard = () => {
  return (
    <div className="border border-gray-300 rounded-2xl p-4 shadow-md w-full">
      <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-3">
        <h2 className="text-lg font-semibold">Experience</h2>
        <BiDotsVerticalRounded className="w-5 h-5 text-gray-600 cursor-pointer" />
      </div>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4 border-b border-gray-300 pb-3 last:border-b-0">
          <h3 className="text-md font-semibold">{exp.role}</h3>
          <p className="text-sm text-gray-600">{exp.company}</p>
          <div className="flex items-center text-sm text-gray-500">
            <FaRegCalendarAlt className="w-4 h-4 mr-1" />
            <span>{exp.duration}</span>
          </div>
          <p className="text-sm text-gray-700 mb-3">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill, idx) => (
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

export default ExperienceCard;

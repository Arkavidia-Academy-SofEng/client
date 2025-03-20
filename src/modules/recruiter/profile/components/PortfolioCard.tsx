import { BiDotsVerticalRounded } from "react-icons/bi";

const portfolioList = [
  {
    title: "E-Commerce Platform",
    description:
      "Developed a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented secure authentication and payment integration.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a responsive portfolio website using Next.js and Tailwind CSS to showcase projects and skills.",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Task Management App",
    description:
      "Built a task management application with a Kanban board layout, featuring drag-and-drop functionality and real-time updates.",
    technologies: ["React", "Firebase", "Redux"],
  },
];

const PortfolioCard = () => {
  return (
    <div className="border border-gray-300 rounded-xl p-4 shadow-md w-full">
      <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-3">
        <h2 className="text-lg font-semibold">Portfolio</h2>
        <BiDotsVerticalRounded className="w-5 h-5 text-gray-600 cursor-pointer" />
      </div>
      {portfolioList.map((project, index) => (
        <div key={index} className="mb-4 border-b border-gray-200 pb-3 last:border-b-0">
          <h3 className="text-md font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-700 mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioCard;

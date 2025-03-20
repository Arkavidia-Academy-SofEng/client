import { useState } from "react";

interface Job {
  id: number;
  title: string;
  company: string;
}

const dummyJobs: Job[] = [
  { id: 1, title: "Frontend Developer", company: "TechCorp" },
  { id: 2, title: "Backend Engineer", company: "SoftSolutions" },
  { id: 3, title: "UI/UX Designer", company: "DesignHub" },
];

const JobFeed = () => {
  const [jobs] = useState<Job[]>(dummyJobs);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Job Listing</h2>
      {jobs.length > 0 ? (
        <ul className="space-y-2">
          {jobs.map((job) => (
            <li key={job.id} className="p-3 bg-gray-100 rounded-md flex justify-between items-center">
              <span>{job.title} - {job.company}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No job listings available.</p>
      )}
    </div>
  );
};

export default JobFeed;
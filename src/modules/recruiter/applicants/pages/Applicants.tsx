import { useState } from "react";

interface Applicant {
  id: number;
  name: string;
  position: string;
}

const dummyApplicants: Applicant[] = [
  { id: 1, name: "John Doe", position: "Frontend Developer" },
  { id: 2, name: "Jane Smith", position: "Backend Engineer" },
];

const Applicants = () => {
  const [applicants] = useState<Applicant[]>(dummyApplicants);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Applicants</h2>
      {applicants.length > 0 ? (
        <ul className="space-y-2">
          {applicants.map((applicant) => (
            <li key={applicant.id} className="p-3 bg-gray-100 rounded-md flex justify-between items-center">
              <span>{applicant.name} - {applicant.position}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No applicants at the moment.</p>
      )}
    </div>
  );
};

export default Applicants;
import { useState } from "react";

interface Candidate {
  id: number;
  name: string;
  position: string;
}

const dummyHiredCandidates: Candidate[] = [
  { id: 1, name: "Michael Brown", position: "Project Manager" },
  { id: 2, name: "Sarah Wilson", position: "Data Scientist" },
];

const HiredCandidates = () => {
  const [hiredCandidates] = useState<Candidate[]>(dummyHiredCandidates);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Hired Candidates</h2>
      {hiredCandidates.length > 0 ? (
        <ul className="space-y-2">
          {hiredCandidates.map((candidate) => (
            <li key={candidate.id} className="p-3 bg-gray-100 rounded-md flex justify-between items-center">
              <span>{candidate.name} - {candidate.position}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No hired candidates yet.</p>
      )}
    </div>
  );
};

export default HiredCandidates;
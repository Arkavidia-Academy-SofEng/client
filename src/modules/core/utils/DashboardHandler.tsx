import { useParams, Navigate } from "react-router-dom";
import FeedsPage from "../../jobseeker/core/pages/FeedsPostPage";
import RecruiterPage from "../../recruiter/core/pages/FeedsPostPage";

const DashboardHandler = () => {
  const { role } = useParams();
  console.log(role);

  if (role === "jobseeker") return <FeedsPage />;
  if (role === "recruiter") return <RecruiterPage />;
  return <Navigate to="/" replace />; 
};

export default DashboardHandler;

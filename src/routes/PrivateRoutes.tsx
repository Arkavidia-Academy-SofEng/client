import { useParams, Navigate, Outlet } from "react-router-dom";
import NavigationRoutes from "../routes/NavigationRoutes";
import { toast } from "react-hot-toast";

interface PrivateRouteProps {
  allowedRoles: string[];
}

const PrivateRoute = ({ allowedRoles }: PrivateRouteProps) => {
  const { role } = useParams();
  const isAuthenticated = true;
  const userRole = "jobseeker";

  console.log("User Role:", userRole);
  console.log("URL Role:", role);

  if (!isAuthenticated) {
    toast.error("Silakan login terlebih dahulu!");
    return <Navigate to={NavigationRoutes.LOGIN} />;
  }

  // Cek apakah role di URL cocok dengan role user yang login
  if (!allowedRoles.includes(userRole) || userRole !== role) {
    toast.error("Akses ditolak! Anda tidak memiliki izin.");
    return <Navigate to={NavigationRoutes.LOGIN} />;
  }

  return <Outlet />;
};

export default PrivateRoute;

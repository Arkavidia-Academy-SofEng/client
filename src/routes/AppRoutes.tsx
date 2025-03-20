import { useRoutes } from "react-router-dom";
import authRoutes from "../modules/auth/routes";
import landingPageRoutes from "../modules/landing-page/routes";
import dashboardRoutes from "../modules/core/utils/DashboardRoutes";

const AppRoutes = () => {
  return useRoutes([...authRoutes, ...dashboardRoutes, ...landingPageRoutes]);
};

export default AppRoutes;

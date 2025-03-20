import { RouteObject } from "react-router-dom";
import PrivateRoute from "../../../routes/PrivateRoutes";
import NavigationRoutes from "../../../routes/NavigationRoutes";
import DashboardHandler from "./DashboardHandler";

const dashboardRoutes: RouteObject[] = [
  {
    path: NavigationRoutes.DASHBOARD,
    element: <PrivateRoute allowedRoles={["jobseeker", "recruiter"]} />,
    children: [
      { path: "", element: <DashboardHandler /> },
    ],
  },
];

export default dashboardRoutes;

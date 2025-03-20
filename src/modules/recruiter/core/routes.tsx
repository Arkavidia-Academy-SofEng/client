import { RouteObject } from "react-router-dom";
import PrivateRoute from "../../../routes/PrivateRoutes";
import NavigationRoutes from "../../../routes/NavigationRoutes";
import DashboardHandler from "../../core/utils/DashboardHandler";

const recruiterRoutes: RouteObject[] = [
  {
    path: NavigationRoutes.DASHBOARD,
    element: <PrivateRoute allowedRoles={["recruiter"]} />,
    children: [
      { path: "", element: <DashboardHandler /> },
    ],
  },
];

export default recruiterRoutes;

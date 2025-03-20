import { RouteObject } from "react-router-dom";
import PrivateRoute from "../../../routes/PrivateRoutes";
import NavigationRoutes from "../../../routes/NavigationRoutes";
import DashboardHandler from "../../core/utils/DashboardHandler";

const jobseekerRoutes: RouteObject[] = [
  {
    path: NavigationRoutes.DASHBOARD,
    element: <PrivateRoute allowedRoles={["jobseeker"]} />,
    children: [
      { path: "", element: <DashboardHandler /> },
    ],
  },
];

export default jobseekerRoutes;

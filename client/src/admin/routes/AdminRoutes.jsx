import Dashboard from "../pages/Dashboard";
import Properties from "../pages/Properties";

export const adminRoutes = [
  {
    path: "/admin",
    element: <Dashboard />,
  },
  {
    path: "/admin/properties",
    element: <Properties />,
  },
];
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AdminRoute({ children }) {
  const { user } = useSelector(
    (state) => state.auth
  );

  if (
    !user ||
    !["admin", "super_admin"].includes(
      user.role
    )
  ) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminRoute;
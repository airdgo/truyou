import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const RequireAuth = () => {
	const { currentUser } = useAuth();
	const location = useLocation();

	return currentUser ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};

export default RequireAuth;

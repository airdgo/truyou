import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const RedirectToDashboad = () => {
	const { currentUser } = useAuth();
	const location = useLocation();

	return currentUser ? (
		<Navigate to="/" state={{ from: location }} replace />
	) : (
		<Outlet />
	);
};

export default RedirectToDashboad;

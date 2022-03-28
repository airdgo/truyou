import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const RedirectToForgotPasswordStep1 = () => {
	const { emailData } = useAuth();
	const location = useLocation();

	return !emailData ? (
		<Navigate to="/forgot-password-step-1" state={{ from: location }} replace />
	) : (
		<Outlet />
	);
};

export default RedirectToForgotPasswordStep1;

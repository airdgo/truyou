import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./Components/dashboard/Dashboard";
import { Signup } from "./Components/authentication/Signup";
import { ConfirmSignup } from "./Components/authentication/ConfirmSignup";
import { Login } from "./Components/authentication/Login";
import { ForgotPasswordStep1 } from "./Components/authentication/ForgotPasswordStep1";
import { ForgotPasswordStep2 } from "./Components/authentication/ForgotPasswordStep2";
import { Layout } from "./Components/Layout";
import RequireAuth from "./Components/authentication/RequireAuth";
import RedirectToDashboad from "./Components/authentication/RedirectToDashboard";
import RedirectToForgotPasswordStep1 from "./Components/authentication/RedirectToForgotPasswordStep1";
import { NotFound } from "./Components/NotFound";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* Dashboard */}
				<Route element={<RequireAuth />}>
					<Route exact path="/" element={<Dashboard />} />
				</Route>

				{/* Authentication */}
				<Route element={<RedirectToDashboad />}>
					<Route path="/signup" element={<Signup />} />
					<Route path="/confirm-signup" element={<ConfirmSignup />} />
					<Route path="/login" element={<Login />} />
					<Route
						path="/forgot-password-step-1"
						element={<ForgotPasswordStep1 />}
					/>
					<Route element={<RedirectToForgotPasswordStep1 />}>
						<Route
							path="/forgot-password-step-2"
							element={<ForgotPasswordStep2 />}
						/>
					</Route>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;

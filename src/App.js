import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Signup } from "./Pages/Signup/Signup";
import { ConfirmSignup } from "./Pages/Signup/ConfirmSignup";
import { Login } from "./Pages/Login/Login";
import { ForgotPasswordStep1 } from "./Pages/ForgotPassword/ForgotPasswordStep1";
import { ForgotPasswordStep2 } from "./Pages/ForgotPassword/ForgotPasswordStep2";
import { Layout } from "./Components/Layout";
import RequireAuth from "./Authentication/RequireAuth";
import RedirectToDashboad from "./Authentication/RedirectToDashboard";
import RedirectToForgotPasswordStep1 from "./Authentication/RedirectToForgotPasswordStep1";
import { NotFound } from "./Pages/NotFound/NotFound";

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

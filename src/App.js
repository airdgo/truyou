import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Signup } from "./components/authentication/Signup";
import { ConfirmSignup } from "./components/authentication/ConfirmSignup";
import { Login } from "./components/authentication/Login";
import { ForgotPasswordStep1 } from "./components/authentication/ForgotPasswordStep1";
import { ForgotPasswordStep2 } from "./components/authentication/ForgotPasswordStep2";
import { Layout } from "./components/Layout";
import RequireAuth from "./components/authentication/RequireAuth";
import RedirectToDashboad from "./components/authentication/RedirectToDashboard";

function App() {
	return (
		<div className="App">
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
						<Route
							path="/forgot-password-step-2"
							element={<ForgotPasswordStep2 />}
						/>
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;

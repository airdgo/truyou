import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { AuthProvider } from "./Components/authentication/AuthProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./app/store";

Amplify.configure(awsExports);

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<AppProvider>
				<AuthProvider>
					<Routes>
						<Route path="/*" element={<App />} />
					</Routes>
				</AuthProvider>
			</AppProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

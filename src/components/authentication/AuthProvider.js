import { Auth, Hub } from "aws-amplify";
import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [emailData, setEmailData] = useState("");
	const [loading, setLoading] = useState(true);

	function setEmail(value) {
		return setEmailData(value);
	}

	useEffect(() => {
		updateCurrentUser();
		authListener();
	}, []);

	async function updateCurrentUser(user = null) {
		if (user) {
			setCurrentUser(user);
			return;
		}

		try {
			const user = await Auth.currentAuthenticatedUser();
			console.log(user);
			setCurrentUser(user);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setCurrentUser(null);
			setLoading(false);
		}
	}

	function authListener() {
		Hub.listen("auth", (data) => {
			console.log(data);
			if (data.payload.event === "signOut") {
				console.log("user signed out");
				updateCurrentUser();
			}
		});
	}

	function signup(given_name, family_name, email, password) {
		return Auth.signUp({
			username: email,
			password: password,
			attributes: {
				email: email,
				given_name: given_name,
				family_name: family_name,
			},
		});
	}

	function confirmSignup(email, code) {
		return Auth.confirmSignUp(email, code);
	}

	function login(email, password) {
		return Auth.signIn(email, password);
	}

	function logout() {
		return Auth.signOut();
	}

	// function forgotPassword(email) {
	// 	return sendPasswordResetEmail(auth, email, {
	// 		url: "http://localhost:3000/login",
	// 	});
	// }

	// function resetPassword(oobCode, newPassword) {
	// 	return confirmPasswordReset(auth, oobCode, newPassword);
	// }

	const value = {
		currentUser,
		emailData,
		setEmail,
		signup,
		confirmSignup,
		login,
		logout,
		updateCurrentUser,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};

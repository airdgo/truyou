import { Backdrop } from "./Backdrop";
import { Step1 } from "./Step1";
import { createPortal } from "react-dom";
import { Step2 } from "./Step2";
import { useState } from "react";
import { useContext, createContext } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const Modal = ({ handleClose, modalOpen }) => {
	const [step, setStep] = useState(0);

	const currentStep =
		step === 0 ? (
			<Step1 handleClose={handleClose} />
		) : (
			<Step2 handleClose={handleClose} />
		);

	const nextStep = () => setStep((currStep) => currStep + 1);
	const previousStep = () => setStep((currStep) => currStep - 1);

	const [moods, setMoods] = useState([
		{
			id: 0,
			mood: "happy",
			isSelected: false,
		},
		{
			id: 1,
			mood: "sad",
			isSelected: false,
		},
		{
			id: 2,
			mood: "angry",
			isSelected: false,
		},
		{
			id: 3,
			mood: "scared",
			isSelected: false,
		},
		{
			id: 4,
			mood: "surprised",
			isSelected: false,
		},
		{
			id: 5,
			mood: "disgusted",
			isSelected: false,
		},
	]);

	const [currentMood, setCurrentMood] = useState([]);

	const handleSelectedMood = (id) => {
		const newMoods = moods.map((mood) => {
			return mood.id === id
				? { ...mood, isSelected: !mood.isSelected }
				: mood.isSelected
				? { ...mood, isSelected: !mood.isSelected }
				: mood;
		});

		const selectedMood = newMoods.filter((mood) => mood.isSelected === true);

		setCurrentMood(selectedMood[0].mood);
		setMoods(newMoods);
	};

	const value = {
		step,
		nextStep,
		previousStep,
		handleSelectedMood,
		moods,
		currentMood,
	};

	return createPortal(
		<ModalContext.Provider value={value}>
			<Backdrop onClick={handleClose}>{currentStep}</Backdrop>
		</ModalContext.Provider>,
		document.getElementById("portal")
	);
};

import { Backdrop } from "./Backdrop";
import { Step1 } from "./Step1";
import { createPortal } from "react-dom";
import { Step2 } from "./Step2";
import { useState, useEffect } from "react";
import { useContext, createContext } from "react";
import { useSelector } from "react-redux";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const Modal = () => {
	const [images, setImages] = useState([]);
	const [imagesURLs, setImagesURLs] = useState([]);
	const step = useSelector((state) => state.posts.modalStep);

	const currentStep = step === 0 ? <Step1 /> : <Step2 />;

	useEffect(() => {
		if (images.length < 1) return;
		const newImagesURLs = [];
		images.forEach((image) => newImagesURLs.push(URL.createObjectURL(image)));
		setImagesURLs(newImagesURLs);
		console.log(newImagesURLs);
	}, [images]);

	const onImageChange = (e) => {
		setImages([...e.target.files]);
		console.log(images);
	};

	const value = {
		onImageChange,
		imagesURLs,
	};

	return createPortal(
		<ModalContext.Provider value={value}>
			<Backdrop>{currentStep}</Backdrop>
		</ModalContext.Provider>,
		document.getElementById("portal")
	);
};

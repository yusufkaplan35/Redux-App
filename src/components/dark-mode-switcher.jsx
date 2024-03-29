import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../store/slices/theme-slice";
import { $t } from "../helpers/locale-helper";

const DarkModeSwitcher = () => {
	const darkMode = useSelector((state) => state.theme.darkMode);
	const dispatch = useDispatch();

	useEffect(() => {
		const mode = darkMode ? "dark" : "light";
		const htmlEl = document.querySelector("html");
		htmlEl.setAttribute("data-bs-theme", mode);
	}, [darkMode]);

	useEffect(() => {
		const currentMode = localStorage.getItem("darkMode");
		console.log(currentMode);
		dispatch(setDarkMode(currentMode === "true"));
	}, []);

	const handleMode = () => {
		localStorage.setItem("darkMode", !darkMode);
		dispatch(setDarkMode(!darkMode));
	};

	return (
		<Form.Check // prettier-ignore
			type="switch"
			id="custom-switch"
			label={darkMode ? $t("light-mode") : $t("dark-mode")}
			checked={darkMode}
			onChange={handleMode}
		/>
	);
};

export default DarkModeSwitcher;
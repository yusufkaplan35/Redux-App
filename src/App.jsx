import React from "react";
import AppRouter from "./router";
import { useSelector } from "react-redux";

const App = () => {
	const lang = useSelector((state) => state.locale.lang);

	return <AppRouter key={lang.code} />;
};

export default App;
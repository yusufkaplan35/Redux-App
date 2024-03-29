import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icons/css/flag-icons.min.css"
import "./global.css";
import { Provider as StoreProvider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<StoreProvider store={store}>
			<App />
		</StoreProvider>
	</React.StrictMode>
);
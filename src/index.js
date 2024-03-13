import React, {StrictMode} from "react";
import {createRoot} from 'react-dom/client';
import "./index.css";
import App from "./App";
import * as serviceWorker from './service-worker';

// 👇️ make sure to use the correct root element ID
// from your public/index.html file
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

serviceWorker.register();

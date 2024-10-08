import React, {StrictMode} from "react";
import {createRoot} from 'react-dom/client';
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

serviceWorkerRegistration.register();

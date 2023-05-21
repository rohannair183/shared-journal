import React, { useState } from "react";
import "./App.css";
import TextInput from "./textInput";
import ToggleButton from "./toggleButton";
function App() {
	const [darkMode, setDarkMode] = useState(false);

	const handleModeToggle = () => {
		setDarkMode(!darkMode);
	};
	return (
		<div className={`App${darkMode ? " dark-mode" : ""}`}>
			<div className="Header">
				<ToggleButton
					darkMode={darkMode}
					handleModeToggle={handleModeToggle}
				/>
			</div>
			<div className="Text Input">
				<TextInput darkMode={darkMode} />
			</div>
		</div>
	);
}

export default App;

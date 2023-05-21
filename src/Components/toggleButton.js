import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import "./toggleButton.css";

const ToggleButton = ({ darkMode, handleModeToggle }) => {
	return (
		<div className="toggle-container">
			<DarkModeSwitch
				className="dark-mode-toggle"
				onChange={handleModeToggle}
				checked={darkMode}
				size={48}
				animationSpeed={1}
			/>
		</div>
	);
};

export default ToggleButton;

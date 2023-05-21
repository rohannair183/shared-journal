import React, { useState } from "react";
import "./textInput.css";
const TextInput = ({ darkMode }) => {
	const [text, setText] = useState("");
	const [entries, setEntries] = useState([]);

	const handleChange = (event) => {
		setText(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (text.trim() !== "") {
			setEntries([...entries, text.trim()]);
			setText("");
		}
	};

	return (
		<div className={`container${darkMode ? " dark-mode" : ""}`}>
			<h2 className="mt-4 mb-3">Shared Digital Journal</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<textarea
						className={`form-control${darkMode ? " dark-mode-input" : ""}`}
						value={text}
						onChange={handleChange}
						placeholder="Type your entry here..."
						rows={8}
					/>
				</div>
				<button
					type="submit"
					className={`btn ${darkMode ? "btn-light" : "btn-primary"}`}
				>
					Submit
				</button>
			</form>
			<div className="mt-3">
				<h5>Entry Preview:</h5>
				{entries.map((entry, index) => (
					<div
						key={index}
						className={`border rounded p-3${darkMode ? " dark-mode" : ""} mb-3`}
					>
						{entry}
					</div>
				))}
			</div>
		</div>
	);
};

export default TextInput;

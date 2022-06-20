import React from "react";
import PropTypes from "prop-types";

import "./TextField.css";
import { Button } from "./Button";

export const TextField = ({ type, placeholder, size, disabled, ...props }) => {
	return (
		<>
			<label className={size}>{size.toUpperCase()} LABEL</label>
			<input
				type={type}
				className={`input ${size}`}
				placeholder={placeholder}
				disabled={disabled}
				{...props}
			/>
			<Button
				backgroundColor="olive"
				label="Submit"
				onClick={() => {}}
				primary
			/>
		</>
	);
};

TextField.propTypes = {
	type: PropTypes.oneOf(["string", "number"]),
	placeholder: PropTypes.string,
	size: PropTypes.oneOf(["small", "medium", "large"]),
	disabled: PropTypes.bool,
};

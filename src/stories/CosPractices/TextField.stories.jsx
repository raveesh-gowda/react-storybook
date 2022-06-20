import React from "react";

import { TextField } from "./TextField";

export default {
	title: "CosPractices/TextField",
	Component: TextField,
	argTypes: {
		size: {
			options: ["small", "medium", "large"],
			control: { type: "radio" },
		},
		type: {
			options: ["text", "number", "date"],
			control: { type: "radio" },
		},
	},
};

const Template = (args) => <TextField {...args} />;

export const Field = Template.bind({});
Field.args = {
	disabled: false,
	type: "text",
	size: "small",
	placeholder: "Default Field",
};

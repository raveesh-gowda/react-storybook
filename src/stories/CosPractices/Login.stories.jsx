import React from "react";
import {Login} from "./Login";

export default {
	title: "CosPractices/Login",
	component: Login,
	argTypes: {
		emailError: {
			control: "text",
			if: {arg: "userNameType", eq: "email"},
		},
	},
};

const Template = (args) => <Login {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

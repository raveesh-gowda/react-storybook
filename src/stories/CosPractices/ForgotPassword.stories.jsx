import React from "react";
import { ForgotPassword } from "../components/ForgotPassword";

export default {
	title: "CosPractices/ForgotPassword",
	component: ForgotPassword,
};

const Template = (args) => <ForgotPassword {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

import React from "react";
import {GoogleLoginComponent} from "./GoogleLoginComponent";

export default {
	title: "CosPractices/GoogleLoginComponent",
	component: GoogleLoginComponent,
};

const Template = (args) => <GoogleLoginComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

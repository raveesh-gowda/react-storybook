import React from "react";
import {LinkedInLoginComponent} from "./LinkedInLoginComponent";

export default {
	title: "CosPractices/LinkedInLogin",
	component: LinkedInLoginComponent,
};

const Template = (args) => <LinkedInLoginComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

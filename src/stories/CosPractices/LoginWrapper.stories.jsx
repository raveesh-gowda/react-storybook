import React from "react";
import {LoginWrapper} from "./LoginWrapper";

export default {
	title: "CosPractices/LoginWrapper",
	component: LoginWrapper,
	argTypes: {
		emailError: {
			control: "text",
			if: {arg: "userNameType", eq: "email"},
		},
		isGoogleLoginRequired: {control: "boolean"},
		// below are only included when isGoogleLoginRequired is true
		googleClientId: {
			control: "text",
			if: {arg: "isGoogleLoginRequired"},
		},
		onGoogleLoginSuccess: {
			control: "function",
			if: {arg: "isGoogleLoginRequired"},
		},
		onGoogleLoginFailure: {
			control: "function",
			if: {arg: "isGoogleLoginRequired"},
		},
		// below are only included when isLinkedInLoginRequired is true
		linkedInClientid: {
			control: "text",
			if: {arg: "isLinkedInLoginRequired"},
		},
		linkedInRedirectUri: {
			control: "text",
			if: {arg: "isLinkedInLoginRequired"},
		},
		onLinkedInLoginSuccess: {
			control: "function",
			if: {arg: "isLinkedInLoginRequired"},
		},
		onLinkedInLoginFailure: {
			control: "function",
			if: {arg: "isLinkedInLoginRequired"},
		},
	},
};

const Template = (args) => <LoginWrapper {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { ForgotPassword } from "./ForgotPassword";

describe("Testing Forgot Password Component", () => {
	//to check whether input field is present in the component
	test("render input field on the screen", () => {
		render(<ForgotPassword />);
		const inputField = screen.getByPlaceholderText(/enter email id/i);
		expect(inputField).toBeInTheDocument();
	});

	//to check whether there is a send button in the component
	test("render forgot password send button on the screen", () => {
		render(<ForgotPassword />);
		const sendButton = screen.getByRole("button");
		expect(sendButton).toBeInTheDocument();
	});

	//to check whether the input field accepts email
	test("input field to accept email", () => {
		render(<ForgotPassword />);
		const email = screen.getByPlaceholderText(/enter email id/i);
		userEvent.type(email, "fetrain");
		expect(email.value).not.toMatch("fetrain@gmail.com");
	});

	//to check whether request will be sent
	test("should be able to send the request", () => {
		render(<ForgotPassword />);
		const email = screen.getByPlaceholderText(/enter email id/i);
		const sendButton = screen.getByRole("button");

		userEvent.type(email, "fetrain@gmail.com");
		userEvent.click(sendButton);

		const input = screen.getByDisplayValue("fetrain@gmail.com");
		expect(input).toBeInTheDocument();
	});
});

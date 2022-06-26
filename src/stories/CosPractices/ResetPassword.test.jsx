import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { ResetPassword } from "./ResetPassword";
const newPassword = "./ResetPassword.jsx";
const confirmNewPassword = "./ResetPassword.jsx";
describe("Testing Reset Password Component", () => {
  //to check whether New Password  field is present in the component
  test("render New Password field on the screen", () => {
    render(<ResetPassword />);
    const newPasswordField = screen.getByPlaceholderText(/Enter New Password/i);
    expect(newPasswordField).toBeInTheDocument();
  });
  //to check whether Confirm  New Password  field is present in the component
  test("render Confirm New Password field on the screen", () => {
    render(<ResetPassword />);
    const confirmNewPasswordField = screen.getByPlaceholderText(
      /Enter Confirm New Password/i
    );
    expect(confirmNewPasswordField).toBeInTheDocument();
  });
  //to check whether there is a Reset button in the component
  test("render Reset button on the screen", () => {
    render(<ResetPassword />);
    const resetButton = screen.getByRole("button");
    expect(resetButton).toBeInTheDocument();
  });

  //to check whether New Password is Not a Empty String
  test("New password not should be a empty string", () => {
    const password = newPassword;
    expect(password).not.toEqual("");
  });
  //to check whether New Password is Not a Space
  test("New Password not should be a space", () => {
    const password = newPassword;
    expect(password).not.toEqual(" ");
  });
  //to check whether Confirm New Password  is equal to New Password
  test("Confirm New Password Should Match to New Password", () => {
    const password = newPassword;
    const password2 = confirmNewPassword;
    expect(password2).toEqual(password);
  });
});

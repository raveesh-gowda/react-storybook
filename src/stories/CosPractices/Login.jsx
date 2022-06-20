import PropTypes from "prop-types";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";

import "./Login.css";
import {Button} from "./Button";

// const myValidationSchema = yup.object().shape({
//     username: yup.string().trim().required("User Name is required"),
//     password: yup.string().required("Password is Required Field"),
// });

export const Login = ({
	formTitle,
	userNameType,
	loginBtnLabel,
	emailError,
	strictPassword,
	matchPassword,
	maxPassword,
	onSubmit,
	...props
}) => {
	const myValidationSchema = yup.object().shape({
		username:
			userNameType === "email"
				? yup
						.string()
						.trim()
						.email(emailError)
						.required("Email is required")
				: yup.string().trim().required("User Name is required"),
		password: strictPassword
			? yup
					.string()
					.trim()
					.required("Password is required")
					.matches(
						/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
						matchPassword
					)
					.max(12, maxPassword)
			: yup.string().trim().required("Password is required"),
	});

	return (
		<Formik
			initialValues={{
				username: "",
				password: "",
			}}
			validationSchema={myValidationSchema}
			onSubmit={onSubmit}
		>
			{(formikProps) => {
				const {values, errors, touched, setFieldValue, handleSubmit} =
					formikProps;
				return (
					<div>
						{formTitle && <h1>{formTitle}</h1>}
						<Form>
							<div>
								<label htmlFor="">
									{userNameType === "email" ? "Email" : "User Name"}
								</label>
								<div>
									<Field
										name="username"
										type="text"
										className="form-control"
									/>
								</div>
								<ErrorMessage
									component="div"
									name="username"
									className="error-message"
								/>
							</div>
							<div>
								<label htmlFor="">Password</label>
								<div>
									<Field
										name="password"
										type="password"
										className="form-control"
									/>
								</div>
								<ErrorMessage
									component="div"
									name="password"
									className="error-message"
								/>
							</div>
							<div>
								<Button
									label={loginBtnLabel}
									onClick={() => {
										console.log("values", values);
									}}
									primary
								/>
							</div>
						</Form>
					</div>
				);
			}}
		</Formik>
	);
};

Login.propTypes = {
	formTitle: PropTypes.string,
	userNameType: PropTypes.oneOf(["string", "email"]),
	loginBtnLabel: PropTypes.string,
	emailError: PropTypes.string,
	strictPassword: PropTypes.bool,
	matchPassword: PropTypes.string,
	maxPassword: PropTypes.string,
	onSubmit: PropTypes.func,
};

Login.defaultProps = {
	formTitle: "Login Form",
	userNameType: "string",
	loginBtnLabel: "Login",
	emailError: "Not a valid email",
	strictPassword: false,
	maxPassword: "Password should not exceed 12 character",
	matchPassword:
		"Password must be of 8 to 12 character with 1 special character, 1 Uppercase, 1 Lowercase and 1 number.",
	onSubmit: undefined,
};

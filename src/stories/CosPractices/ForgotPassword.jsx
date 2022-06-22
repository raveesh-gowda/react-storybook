import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const ForgotPassword = ({ btnLabel, onSubmit }) => {
	const initialValues = {
		email: "",
	};

	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.trim()
			.email("Not a valid email address")
			.required("Email is required"),
	});

	return (
		<div>
			<p>
				Forgot Password? Enter your Email address below, within a short time
				a instruction mail will be sent.
			</p>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ isValid, dirty, errors, touched }) => (
					<Form>
						<Field
							type="text"
							name="email"
							placeholder="Enter Email Id"
							className="form-control"
						/>
						<ErrorMessage name="email">
							{(msg) => (
								<div>
									<p style={{ color: "red" }}>*{msg}</p>
								</div>
							)}
						</ErrorMessage>
						<br />
						<Button type="submit" disabled={!(isValid && dirty)}>
							{btnLabel}
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

ForgotPassword.propTypes = {
	btnLabel: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
};

ForgotPassword.defaultProps = {
	btnLabel: "Send",
	onSubmit: undefined,
};

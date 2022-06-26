import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
// import { Button } from "../stories/Button";
//import "./login-component.scss";
import { Button } from "react-bootstrap";

export const ResetPassword = ({
  formTitle,
  // userNameType,
  resetBtnLabel,
  resetNewPasswordPlaceholder,
  resetConfirmNewPasswordPlaceholder,

  onSubmit,
  ...props
}) => {
  const myValidationSchema = yup.object().shape({
    newPassword: yup
      .string()
      .trim()
      .required("New Password is required")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must be of 8 to 12 character with 1 special character, 1 Uppercase, 1 Lowercase and 1 number."
      )
      .max(12, "Password should not exceed 12 character"),
    confirmNewPassword: yup
      .string()
      .trim()
      .required("Confirm New Password is required")
      .oneOf([yup.ref("newPassword")], "Passwords must match"),
  });

  return (
    <Formik
      initialValues={{
        newPassword: "",
        confirmNewPassword: "",
      }}
      validationSchema={myValidationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched, setFieldValue, handleSubmit } =
          formikProps;
        return (
          <div className="login-form">
            {formTitle && <h3>{formTitle}</h3>}

            <Form>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  New Password
                </label>
                <Field
                  name="newPassword"
                  placeholder={resetNewPasswordPlaceholder}
                  className="form-control"
                  type="text"
                />
                <ErrorMessage
                  component="div"
                  name="newPassword"
                  className="error-message"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Confirm New Password
                </label>
                <Field
                  name="confirmNewPassword"
                  placeholder={resetConfirmNewPasswordPlaceholder}
                  className="form-control"
                  type="text"
                />
                <ErrorMessage
                  component="div"
                  name="confirmNewPassword"
                  className="error-message"
                />
              </div>
              <Button type="submit" variant="primary">
                {resetBtnLabel}
              </Button>{" "}
              {/* <Button
                                label={loginBtnLabel}
                                onClick={() => {
                                    console.log("values", values);
                                }}
                                primary
                            /> */}
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

ResetPassword.propTypes = {
  formTitle: PropTypes.string,

  resetBtnLabel: PropTypes.string,
  resetNewPasswordPlaceholder: PropTypes.string,
  resetConfirmNewPasswordPlaceholder: PropTypes.string,

  onSubmit: PropTypes.func,
};

ResetPassword.defaultProps = {
  formTitle: "Reset Password Form",

  resetBtnLabel: "Reset",
  resetNewPasswordPlaceholder: "Enter New Password",
  resetConfirmNewPasswordPlaceholder: "Enter Confirm New Password",
  onSubmit: undefined,
};

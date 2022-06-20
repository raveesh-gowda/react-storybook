import PropTypes from "prop-types";
import {Col, Row} from "react-bootstrap";

import "./Login.css";
import {Login} from "./Login";
import {GoogleLoginComponent} from "./GoogleLoginComponent";
import {LinkedInLoginComponent} from "./LinkedInLoginComponent";

export const LoginWrapper = ({
	formTitle,
	userNameType,
	loginBtnLabel,
	emailError,
	onSubmit,
	isGoogleLoginRequired,
	googleClientId,
	onGoogleLoginSuccess,
	onGoogleLoginFailure,
	isLinkedInLoginRequired,
	linkedInClientid,
	linkedInRedirectUri,
	onLinkedInLoginSuccess,
	onLinkedInLoginFailure,
	...props
}) => {
	return (
		<div>
			<Login
				formTitle={formTitle}
				userNameType={userNameType}
				loginBtnLabel={loginBtnLabel}
				emailError={emailError}
				onSubmit={onSubmit}
			/>
			<br />
			<Row>
				<Col className="google-signin">
					{" "}
					{isGoogleLoginRequired && (
						<GoogleLoginComponent
							clientId={googleClientId}
							onSuccess={onGoogleLoginSuccess}
							onFailure={onGoogleLoginFailure}
						/>
					)}{" "}
				</Col>
				<Col className="sign-with-linkedin">
					{isLinkedInLoginRequired && (
						<LinkedInLoginComponent
							clientId={linkedInClientid}
							redirectUri={linkedInRedirectUri}
							onLinkedInLoginSuccess={onLinkedInLoginSuccess}
							onLinkedInLoginFailure={onLinkedInLoginFailure}
						/>
					)}
				</Col>
			</Row>
		</div>
	);
};

LoginWrapper.propTypes = {
	formTitle: PropTypes.string,
	userNameType: PropTypes.oneOf(["string", "email"]),
	loginBtnLabel: PropTypes.string,
	emailError: PropTypes.string,
	onSubmit: PropTypes.func,
	isGoogleLoginRequired: PropTypes.bool,
	googleClientId: PropTypes.string,
	onGoogleLoginSuccess: PropTypes.func,
	onGoogleLoginFailure: PropTypes.func,
	isLinkedInLoginRequired: PropTypes.bool,
	linkedInClientid: PropTypes.string,
	linkedInRedirectUri: PropTypes.string,
	onLinkedInLoginSuccess: PropTypes.func,
	onLinkedInLoginFailure: PropTypes.func,
};

LoginWrapper.defaultProps = {
	isGoogleLoginRequired: false,
	isLinkedInLoginRequired: false,
};

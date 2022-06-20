import React from "react";
import PropTypes from "prop-types";
import {LinkedIn} from "react-linkedin-login-oauth2";
// You can use provided image shipped by this package or using your own
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";

export const LinkedInLoginComponent = ({clientId, buttonText, ...props}) => {
	return (
		<div className="sign-with-linkedin">
			<LinkedIn
				clientId={clientId}
				redirectUri={`${window.location.origin}`}
				onSuccess={(code) => {
					console.log(code);
				}}
				onError={(error) => {
					console.log(error);
				}}
			>
				{({linkedInLogin}) => (
					<img onClick={linkedInLogin} src={linkedin} alt={buttonText} />
				)}
			</LinkedIn>
		</div>
	);
};

LinkedInLoginComponent.propTypes = {
	clientId: PropTypes.string,
	buttonText: PropTypes.string,
};

LinkedInLoginComponent.defaultProps = {
	clientId:
		// "86vhj2q7ukf83q",
		"78q03l5ayc8p26",
	buttonText: "Sign in with Linked In",
};

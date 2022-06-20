import PropTypes from "prop-types";
import GoogleLogin from "react-google-login";

export const GoogleLoginComponent = ({clientId, buttonText, ...props}) => {
	const responseGoogle = (response) => {
		console.log(response);
	};
	return (
		<div>
			<GoogleLogin
				clientId={clientId}
				buttonText={buttonText}
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
				cookiePolicy={"single_host_origin"}
			/>
		</div>
	);
};

GoogleLoginComponent.propTypes = {
	clientId: PropTypes.string,
	buttonText: PropTypes.string,
};

GoogleLoginComponent.defaultProps = {
	clientId:
		// "658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com",
		"162551517820-kiqih12fm2hu06pmj6hn0lolagmnv9jo.apps.googleusercontent.com",
	buttonText: "Login",
};

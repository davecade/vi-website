import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ children = "", type = "primary" }) => {
	let styleType = "";

	switch (type) {
		case "primary":
			styleType = styles.primary;
			break;

		case "secondary":
			styleType = styles.secondary;
			break;

		default:
			break;
	}

	return (
		<button className={`${styles.button} ${styleType}`}>{children}</button>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	primary: PropTypes.bool,
	variant: PropTypes.oneOf(["primary", "secondary"]),
	style: PropTypes.object,
};

export default Button;

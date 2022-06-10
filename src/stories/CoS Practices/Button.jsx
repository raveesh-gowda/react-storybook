import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx"; 

/*
clsx:
A tiny (228B) utility for constructing className strings conditionally.
Also serves as a faster & smaller drop-in replacement for the classnames module.
*/

export const Button = ({ type, label, variant, disabled, ...props }) => {
   return (
      <button
         type={type}
         className={clsx({
            btn: true,
            "btn.default": variant === "default",
            "btn.primary": variant === "primary",
            "btn-read-primary": variant === "type2",
            "btn-table btn-blue": variant === "type3",
         })}
         disabled={disabled}
         {...props}
      >
         {label}
      </button>
   );
};

Button.propTypes = {
   type: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
   label: PropTypes.string.isRequired,
   variant: PropTypes.oneOf(["default", "primary", "type2", "type3"])
      .isRequired,
   disabled: PropTypes.bool,
   onClick: PropTypes.func,
};

Button.defaultProps = {
   type: "button",
   label: "button",
   variant: "default",
   disabled: false,
   onClick: undefined,
};

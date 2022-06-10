import React from "react";
import "./Button.css";

function Button(props) {
   const { variant = "primary", children, onClick, ...rest } = props;

   return (
      <button onClick={onClick} className={`button ${variant}`} {...rest}>
         {children}
      </button>
   );
}

export default Button;

import React from "react";
import { Button as ButtonComponent } from "./Button";

export default {
   title: "CoS Practices/Button",
   component: ButtonComponent,
   args: {
      type: "button",
      variant: "default",
      label: "Button",
      disabled: false,
   },
};

const Template = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});
Button.args = {
   type: "button",
   variant: "default",
   label: "Button",
   disabled: false,
};

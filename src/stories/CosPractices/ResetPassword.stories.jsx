import React from "react";

import { ResetPassword } from "./ResetPassword";

export default {
  title: "ResetPassword",
  component: ResetPassword,
};

const Template = (args) => <ResetPassword {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

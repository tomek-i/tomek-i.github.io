import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import { Loading } from ".";

export default {
  title: "Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {};
import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import { Providers } from ".";

export default {
  title: "Providers",
  component: Providers,
} as ComponentMeta<typeof Providers>;

const Template: ComponentStory<typeof Providers> = (args) => <Providers {...args} />;

export const Default = Template.bind({});
Default.args = {};
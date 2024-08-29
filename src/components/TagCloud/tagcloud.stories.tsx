import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import { TagCloud } from ".";

export default {
  title: "TagCloud",
  component: TagCloud,
} as ComponentMeta<typeof TagCloud>;

const Template: ComponentStory<typeof TagCloud> = (args) => <TagCloud {...args} />;

export const Default = Template.bind({});
Default.args = {};
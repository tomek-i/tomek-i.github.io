import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import { CodeStats } from ".";

export default {
  title: "CodeStats",
  component: CodeStats,
} as ComponentMeta<typeof CodeStats>;

const Template: ComponentStory<typeof CodeStats> = (args) => <CodeStats {...args} />;

export const Default = Template.bind({});
Default.args = {};
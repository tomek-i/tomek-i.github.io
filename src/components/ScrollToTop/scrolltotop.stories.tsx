import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import { ScrollToTop } from ".";

export default {
  title: "ScrollToTop",
  component: ScrollToTop,
} as ComponentMeta<typeof ScrollToTop>;

const Template: ComponentStory<typeof ScrollToTop> = (args) => <ScrollToTop {...args} />;

export const Default = Template.bind({});
Default.args = {};
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Error404 } from '.';

export default {
  title: 'Error404',
  component: Error404,
} as ComponentMeta<typeof Error404>;

const Template: ComponentStory<typeof Error404> = (args) => (
  <Error404 {...args} />
);

export const Default = Template.bind({});
Default.args = {};

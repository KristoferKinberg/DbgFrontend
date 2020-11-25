import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Avalon, { Props } from "./avalon.game";

export default {
  title: 'Example/Avalon',
  component: Avalon,
} as Meta;

const clientIds = [
  "84a90051-6917-4d29-8483-39f18914b718",
  "dc132ee4-dd4c-4173-b8b2-a2034ba2cdca",
  "ff0353cf-8233-4b26-962c-949c03b6ef79",
  "44243a74-cef1-47c4-a6ad-4804efcb663c",
  "13bb4841-201f-4c9d-a09d-8caca781b752"
];

const Template: Story<Props> = (args) => <Avalon {...args} />;

export const AvalonStory = Template.bind({});
AvalonStory.args = {
  players: clientIds.map(clientId => ({ clientId })),
  host: {},
  registerMessageHandlers: () => {},
};

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TextField } from '../components/TextField';
import React from 'react';

function Template(props: Omit<React.ComponentProps<typeof TextField>, 'onChange' | 'value'>) {
  const [text, setText] = React.useState('')

  return (
    <TextField
      {...props}
      value={text}
      onChange={setText}
    />
  ) 
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/TextField',
  component: Template,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {},
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Texto',
  },
};

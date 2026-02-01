import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Header } from '@/components/Header';
import { Typography } from '@/components/Typography';

const meta = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Typography.Body4 color='black'>
          Component 1
        </Typography.Body4>,
        <Typography.Body4 color='blue'>
          Component 2
        </Typography.Body4>
      </>
    )
  },
};

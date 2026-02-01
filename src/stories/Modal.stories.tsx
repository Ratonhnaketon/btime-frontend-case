import { Modal } from '@/components/Modal';
import { Typography } from '@/components/Typography';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Modal',
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: 'text' }
  },
  args: {
    open: true
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Título',
    subtitle: 'Sub-título',
    children: (
      <Typography.Body4 color="black">
        Corpo do modal
      </Typography.Body4>
    )
  },
};

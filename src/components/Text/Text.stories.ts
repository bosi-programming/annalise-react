import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text, TextSize, TextWeight } from './Text';
import { expect } from 'storybook/test';

const meta = {
  title: 'components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'select', options: Object.values(TextSize) },
    weight: { control: 'select', options: Object.values(TextWeight) },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
    className: 'text-white',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Text')).toBeInTheDocument();
  },
};

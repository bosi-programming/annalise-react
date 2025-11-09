import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header';
import { expect } from 'storybook/test';

const meta = {
  title: 'components/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Annalise Cerqueira-Maia')).toBeInTheDocument();
  },
};

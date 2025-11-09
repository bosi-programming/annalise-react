import type { Meta, StoryObj } from '@storybook/react-vite';
import { CirculoVip } from './CirculoVip';

const meta = {
  title: 'Screens/Circulo Vip',
  component: CirculoVip,
  tags: ['autodocs'],
} satisfies Meta<typeof CirculoVip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

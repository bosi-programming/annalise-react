import type { Meta, StoryObj } from '@storybook/react-vite';
import { CirculoVipBoasVindas } from './CirculoVipBoasVindas';

const meta = {
  title: 'Screens/Circulo Vip Boas Vindas',
  component: CirculoVipBoasVindas,
  tags: ['autodocs'],
} satisfies Meta<typeof CirculoVipBoasVindas>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

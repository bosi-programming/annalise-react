import type { Meta, StoryObj } from '@storybook/react-vite';
import { CirculoVip } from './CirculoVip';
import { BrowserRouter } from 'react-router';

const StoryComponent = () => (
  <BrowserRouter>
    <CirculoVip />
  </BrowserRouter>
);

const meta = {
  title: 'Screens/Circulo Vip',
  component: StoryComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof CirculoVip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

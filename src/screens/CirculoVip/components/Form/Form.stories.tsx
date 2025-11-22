import type { Meta, StoryObj } from '@storybook/react-vite';
import { Form } from './Form';
import { BrowserRouter } from 'react-router';

const StoryComponent = () => (
  <BrowserRouter>
    <Form />
  </BrowserRouter>
);

const meta = {
  title: 'Screens/Circulo Vip/Form',
  component: StoryComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

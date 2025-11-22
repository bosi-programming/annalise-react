import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer';
import { expect } from 'storybook/test';
import { BrowserRouter } from 'react-router';

const StoryComponent = () => (
  <BrowserRouter>
    <Footer />
  </BrowserRouter>
);

const meta = {
  title: 'components/Footer',
  component: StoryComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Feito com suor, lágrimas e muita ajuda de gente boa demais.')).toBeInTheDocument();
    await expect(canvas.getByText('Obrigada pela visita! Volte mais vezes 💜')).toBeInTheDocument();
  },
};

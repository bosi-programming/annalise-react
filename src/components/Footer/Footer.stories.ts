import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer';
import { expect } from 'storybook/test';

const meta = {
  title: 'components/Footer',
  component: Footer,
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

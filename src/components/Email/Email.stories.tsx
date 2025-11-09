import type { Meta, StoryObj } from '@storybook/react-vite';
import { Email, type EmailProps } from './Email';
import { useState } from 'react';
import { expect, fn } from 'storybook/test';

const meta = {
  title: 'components/Email',
  component: Email,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<EmailProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseEmailComponent = (props: Omit<EmailProps, 'value'>) => {
  const [val, setVal] = useState('');

  const handleChange = (newVal: string) => {
    console.log(newVal);
    setVal(newVal);
    props.onChange(newVal);
  };

  return <Email {...props} value={val} onChange={handleChange} />;
};

export const Default: Story = {
  render: BaseEmailComponent,
  // @ts-expect-error No need for value or onChange
  args: {
    placeholder: 'Email',
    onChange: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    const emailField = canvas.getByPlaceholderText('Email');
    await expect(emailField).toBeInTheDocument();

    const email = 'test@test.com';
    await userEvent.type(emailField, email);
    await expect(args.onChange).toHaveBeenCalledWith(email);
  },
};

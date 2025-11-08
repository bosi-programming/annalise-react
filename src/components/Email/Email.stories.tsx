import type { Meta, StoryObj } from '@storybook/react-vite';
import { Email, type EmailProps } from './Email';
import { useState } from 'react';

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

const BaseEmailComponent = (props: Omit<EmailProps, 'value' | 'onChange'>) => {
  const [val, setVal] = useState('');

  const handleChange = (newVal: string) => {
    console.log(newVal);
    setVal(newVal);
  };

  return <Email {...props} value={val} onChange={handleChange} />;
};

export const Default: Story = {
  render: BaseEmailComponent,
  // @ts-expect-error No need for value or onChange
  args: {},
};

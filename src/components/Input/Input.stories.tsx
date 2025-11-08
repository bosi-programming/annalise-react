import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input, type InputProps } from './Input';
import { useState } from 'react';

const meta = {
  title: 'components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseInputComponent = (props: Omit<InputProps, 'value' | 'onChange'>) => {
  const [val, setVal] = useState('');

  const handleChange = (newVal: string) => {
    console.log(newVal);
    setVal(newVal);
  };

  return <Input {...props} value={val} onChange={handleChange} />;
};

export const Primary: Story = {
  render: BaseInputComponent,
  // @ts-expect-error No need for value or onChange
  args: {},
};

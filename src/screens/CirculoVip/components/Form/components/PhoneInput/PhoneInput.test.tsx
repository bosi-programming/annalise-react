import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { PhoneInput } from './PhoneInput';
import { FormProvider, useForm } from 'react-hook-form';

const Component = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <PhoneInput />
    </FormProvider>
  );
};

describe('Input', () => {
  test('should add mask to input', async () => {
    render(<Component />);
    await userEvent.type(screen.getByRole('textbox'), '27999999999');

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('(27)99999-9999');
  });
});

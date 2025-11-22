import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { FormProvider, useForm } from 'react-hook-form';
import { DOB } from './DOB';

const Component = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <DOB />
    </FormProvider>
  );
};

describe('Input', () => {
  test('should add mask to input', async () => {
    render(<Component />);
    await userEvent.type(screen.getByRole('textbox'), '12021990');

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('12/02/1990');
  });
});

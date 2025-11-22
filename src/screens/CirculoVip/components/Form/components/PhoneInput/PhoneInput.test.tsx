import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { PhoneInput } from './PhoneInput';

describe('Input', () => {
  test('should have base classes', async () => {
    render(<PhoneInput />);
    await userEvent.type(screen.getByRole('textbox'), '27999999999');

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('(27)99999-9999');
  });
});

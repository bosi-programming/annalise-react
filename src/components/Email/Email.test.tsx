import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';
import { EMAIL_BASE_CLASSES, Email } from './Email';

const onChange = vi.fn();

describe('Email', () => {
  test('should have base classes', () => {
    render(<Email value="" onChange={onChange} />);

    expect(screen.getByRole('textbox')).toHaveClass(EMAIL_BASE_CLASSES);
  });
  test('should have a placeholder', () => {
    render(<Email value="" onChange={onChange} placeholder="test" />);

    expect(screen.getByPlaceholderText('test')).toBeInTheDocument();
  });
  test('should call onChange', async () => {
    render(<Email value="" onChange={onChange} />);

    await userEvent.type(screen.getByRole('textbox'), 'a');
    expect(onChange).toHaveBeenCalledWith('a');
  });
  test('should accept a className', () => {
    render(<Email value="" onChange={onChange} className="test" />);
    expect(screen.getByRole('textbox')).toHaveClass('test');
  });
  test('should accept a type', () => {
    render(<Email value="" onChange={onChange} type="email" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
  });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';
import { INPUT_BASE_CLASSES, Input } from './Input';

const onChange = vi.fn();

describe('Input', () => {
  test('should have base classes', () => {
    render(<Input value="" onChange={onChange} />);

    expect(screen.getByRole('textbox')).toHaveClass(INPUT_BASE_CLASSES);
  });
  test('should have a placeholder', () => {
    render(<Input value="" onChange={onChange} placeholder="test" />);

    expect(screen.getByPlaceholderText('test')).toBeInTheDocument();
  });
  test('should call onChange', async () => {
    render(<Input value="" onChange={onChange} />);

    await userEvent.type(screen.getByRole('textbox'), 'a');
    expect(onChange).toHaveBeenCalledWith('a');
  });
  test('should call onFocus', async () => {
    const onFocus = vi.fn();
    render(<Input value="" onChange={onChange} onFocus={onFocus} />);

    const input = screen.getByRole('textbox');
    await userEvent.click(input);
    expect(input).toHaveFocus();
    expect(onFocus).toHaveBeenCalled();
  });
  test('should call onBlur', async () => {
    const onBlur = vi.fn();
    render(<Input value="" onChange={onChange} onBlur={onBlur} />);

    const input = screen.getByRole('textbox');
    await userEvent.click(input);
    input.blur();
    expect(onBlur).toHaveBeenCalled();
  });

  test('should accept a className', () => {
    render(<Input value="" onChange={onChange} className="test" />);
    expect(screen.getByRole('textbox')).toHaveClass('test');
  });
  test('should accept a type', () => {
    render(<Input value="" onChange={onChange} type="email" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
  });
  test('should accept pattern', () => {
    render(<Input value="" onChange={onChange} pattern="\d" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('pattern', '\\d');
  });
});

describe('Input error', () => {
  test('show error message', () => {
    render(<Input value="" onChange={onChange} error="error" />);
    expect(screen.getByText('error')).toBeInTheDocument();
  });
  test('should have error message classes', () => {
    render(<Input value="" onChange={onChange} error="error" />);
    expect(screen.getByText('error')).toHaveClass('text-err ml-4 text-small');
  });
});

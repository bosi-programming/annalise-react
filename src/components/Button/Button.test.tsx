import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { BUTTON_BASE_CLASSES, Button } from './Button';

describe('Button variant options', () => {
  it('should have base classes', () => {
    render(<Button variant="primary">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass(BUTTON_BASE_CLASSES);
  });
  it('should have primary classes', () => {
    render(<Button variant="primary">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-purple-light');
  });
  it('should have secondary classes', () => {
    render(<Button variant="secondary">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-purple-secondary');
  });
  it('should not have secondary or primary classes', () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole('button')).not.toHaveClass('bg-purple-secondary');
    expect(screen.getByRole('button')).not.toHaveClass('bg-purple-light');
  });
});

describe('Button extra properties', () => {
  it('should call onClick', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Test</Button>);

    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should accept a className', () => {
    render(<Button className="test">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('test');
  });
  it('should accept a type', () => {
    render(<Button type="submit">Test</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
});

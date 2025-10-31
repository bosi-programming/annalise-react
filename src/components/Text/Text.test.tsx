import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { BASE_CLASS, Text, TextSize, TextWeight } from './Text';
import { match } from 'ts-pattern';

describe('Text', () => {
  test('Should have base class', () => {
    render(<Text>Test</Text>);
    const component = screen.getByText('Test');
    expect(component).toHaveClass(BASE_CLASS);
    expect(component).toHaveClass('text-big');
    expect(component).toHaveClass('font-normal');
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
  });

  test.each([...Object.values(TextWeight), undefined])('should have style for weight %s', (weight) => {
    render(<Text weight={weight}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass(`font-${weight === undefined ? 'normal' : weight}`);
  });

  test.each([...Object.values(TextSize), undefined])('should return style for %s', (size) => {
    const expected = match(size)
      .with('bigTitle', () => 'text-big-title')
      .with('biggerTitle', () => 'text-bigger-title')
      .with('evenBiggerTitle', () => 'text-even-bigger-title')
      .otherwise(() => `text-${size === undefined ? 'big' : size}`);
    render(<Text size={size}>Test</Text>);
    expect(screen.getByText('Test')).toHaveClass(expected);
  });

  test('Should render component as', () => {
    render(
      <Text size="bigTitle" as="h1">
        Test
      </Text>,
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});

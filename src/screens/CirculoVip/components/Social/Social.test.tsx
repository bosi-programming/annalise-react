import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Social } from './Social';

describe('Footer Social section', () => {
  test('Should render all icons', () => {
    render(<Social />);
    expect(screen.getByTestId('amazon-icon')).toBeInTheDocument();
    expect(screen.getByTestId('bluesky-icon')).toBeInTheDocument();
    expect(screen.getByTestId('instagram-icon')).toBeInTheDocument();
    expect(screen.getByTestId('tiktok-icon')).toBeInTheDocument();
  });
});

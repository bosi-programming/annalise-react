import { describe, expect, test } from 'vitest';
import { TextSize, TextWeight } from './Text';
import { getComponent, getSizeClass, getWeightClass } from './Text.util';
import { match } from 'ts-pattern';

describe('getWeightClass', () => {
  test.each([...Object.values(TextWeight), undefined])('should return style for %s', (weight) => {
    expect(getWeightClass(weight)).toBe(`font-${weight === undefined ? 'normal' : weight}`);
  });
});

describe('getSizeClass', () => {
  test.each([...Object.values(TextSize), undefined])('should return style for %s', (size) => {
    const expected = match(size)
      .with('bigTitle', () => 'text-big-title')
      .with('biggerTitle', () => 'text-bigger-title')
      .with('evenBiggerTitle', () => 'text-even-bigger-title')
      .otherwise(() => `text-${size === undefined ? 'big' : size}`);
    expect(getSizeClass(size)).toBe(expected);
  });
});

describe('getComponent', () => {
  test.each([...Object.values(TextSize), undefined])('should return component for size %s', (size) => {
    if (size !== 'h1' && size !== 'h2' && size !== 'h3') {
      return expect(getComponent(size)).toBe('p');
    }
    expect(getComponent(size)).toBe(size);
  });
  test('Should return p if !size and !as', () => {
    expect(getComponent()).toBe('p');
  });
  test('Should return as even when !!size', () => {
    expect(getComponent('h1', 'span')).toBe('span');
  });
});

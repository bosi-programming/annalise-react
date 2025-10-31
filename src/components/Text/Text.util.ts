import { match } from 'ts-pattern';
import { type TextProps } from './Text';

export function getWeightClass(weight: TextProps['weight']) {
  return match(weight)
    .with('normal', () => 'font-normal')
    .with('bold', () => 'font-bold')
    .with(undefined, () => 'font-normal')
    .exhaustive();
}

export function getSizeClass(size: TextProps['size']) {
  return match(size)
    .with('big', () => 'text-big')
    .with('medium', () => 'text-medium')
    .with('small', () => 'text-small')
    .with('details', () => 'text-details')
    .with('terms', () => 'text-terms')
    .with('bigTitle', () => 'text-big-title')
    .with('biggerTitle', () => 'text-bigger-title')
    .with('evenBiggerTitle', () => 'text-even-bigger-title')
    .with('h1', () => 'text-h1')
    .with('h2', () => 'text-h2')
    .with('h3', () => 'text-h3')
    .with(undefined, () => 'text-big')
    .exhaustive();
}

export function getComponent(size?: TextProps['size'], as?: TextProps['as']) {
  if (as) return as;
  if (size !== 'h1' && size !== 'h2' && size !== 'h3') return 'p';
  return size || 'p';
}

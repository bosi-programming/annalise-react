import type { PropsWithChildren } from 'react';
import { getComponent, getSizeClass, getWeightClass } from './Text.util';
import type { EnumeratedProperties } from '../../utils/EnumeratedProperties';
import { mergeClassNames } from '../../utils/mergeClassNames';

export const TextSize = {
  Big: 'big',
  Medium: 'medium',
  Small: 'small',
  Details: 'details',
  Terms: 'terms',
  BigTitle: 'bigTitle',
  BiggerTitle: 'biggerTitle',
  EvenBiggerTitle: 'evenBiggerTitle',
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
} as const;
export type TextSize = EnumeratedProperties<typeof TextSize>;
export const TextWeight = {
  Normal: 'normal',
  Bold: 'bold',
} as const;
export type TextWeight = EnumeratedProperties<typeof TextWeight>;

export interface TextProps {
  size?: TextSize;
  weight?: TextWeight;
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'details';
}

export const BASE_CLASS = 'font-[Lora]';

export function Text({ size = 'big', weight = 'normal', children, as }: PropsWithChildren<TextProps>) {
  const Component = getComponent(size, as);
  const sizeClass = getSizeClass(size);
  const weightClass = getWeightClass(weight);
  const finalClassName = mergeClassNames(BASE_CLASS, sizeClass, weightClass);

  return <Component className={finalClassName}>{children}</Component>;
}

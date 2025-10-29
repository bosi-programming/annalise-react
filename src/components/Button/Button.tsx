import { match } from 'ts-pattern';
import type { PropsWithChildren } from 'react';
import { mergeClassNames } from '../../utils/mergeClassNames';

type Variant = 'primary' | 'secondary';

const getVariantClass = (variant?: Variant) => {
  return match(variant)
    .with('primary', () => 'bg-purple-light')
    .with('secondary', () => 'bg-purple-secondary')
    .with(undefined, () => '')
    .exhaustive();
};
export const BASE_CLASSES = 'cursor-pointer text-white font-bold rounded-full px-5 py-4 hover:bg-purple-900';

interface ButtonProps {
  className?: string;
  variant?: Variant;
  onClick?: () => void;
  type?: HTMLButtonElement['type'];
}
export function Button({ className, onClick, type, variant, children }: PropsWithChildren<ButtonProps>) {
  const finalClass = mergeClassNames(BASE_CLASSES, getVariantClass(variant), className);
  return (
    <button type={type} onClick={onClick} className={finalClass}>
      {children}
    </button>
  );
}

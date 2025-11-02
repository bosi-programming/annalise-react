import { mergeClassNames } from '../../utils/mergeClassNames';

export interface EmailProps {
  className?: string;
  placeholder?: string;
  type?: HTMLInputElement['type'];
  disabled?: boolean;
  name?: string;
  value: string;
  onChange: (val: string) => void;
}

export const EMAIL_BASE_CLASSES =
  'focus:outline-1 focus:outline-offset-2 focus:outline-purple-light bg-white h-12 rounded-s-full placeholder:text-gray-600 px-5 py-4';

export function Email({ className, placeholder, type, disabled, name, value, onChange }: EmailProps) {
  const finalClassName = mergeClassNames(EMAIL_BASE_CLASSES, className);
  return (
    <input
      className={finalClassName}
      name={name}
      autoComplete="on"
      type={type}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}

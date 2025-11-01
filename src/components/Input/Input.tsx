import { mergeClassNames } from '../../utils/mergeClassNames';
import { Text } from '../Text';

export const BASE_CLASSES =
  'focus:outline-1 focus:outline-offset-2 focus:outline-purple-light bg-input h-12 rounded-full w-full text-white placeholder:text-gray-300 px-5 py-4';
export interface InputProps {
  className?: string;
  placeholder?: string;
  type?: HTMLInputElement['type'];
  disabled?: boolean;
  pattern?: string;
  error?: string;
  name?: string;
  value: string;
  onChange: (val: string) => void;
  onFocus?: (val: string) => void;
  onBlur?: (val: string) => void;
}

export function Input({
  className,
  placeholder,
  type,
  disabled,
  pattern,
  error,
  name,
  value,
  onChange,
  onFocus,
  onBlur,
}: InputProps) {
  const finalClassName = mergeClassNames(BASE_CLASSES, className);
  return (
    <div>
      <input
        className={finalClassName}
        name={name}
        autoComplete="on"
        value={value}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        disabled={disabled}
        onFocus={(e) => {
          if (onFocus) {
            onFocus(e.target.value);
          }
        }}
        onBlur={(e) => {
          if (onBlur) {
            onBlur(e.target.value);
          }
        }}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      {error ? (
        <Text className="text-err ml-4" size="small">
          {error}
        </Text>
      ) : null}
    </div>
  );
}

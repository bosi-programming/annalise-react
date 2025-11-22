import { Controller, useFormContext } from 'react-hook-form';
import { useMask } from '@react-input/mask';
import { Input } from '@/components';

export function PhoneInput() {
  const inputRef = useMask({
    mask: '(__)_____-____',
    replacement: { _: /\d/ },
  });
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="tel-national"
      render={({ field, formState }) => (
        <Input
          placeholder="Celular: (DD)00000-0000"
          {...field}
          ref={inputRef}
          error={formState.errors['tel-national']?.message as string}
        />
      )}
    />
  );
}

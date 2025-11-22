import { Controller, useFormContext } from 'react-hook-form';
import { useMask } from '@react-input/mask';
import { Input } from '@/components';

export function DOB() {
  const inputRef = useMask({
    mask: '__/__/____',
    replacement: { _: /\d/ },
  });
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="bday"
      render={({ field, formState }) => (
        <Input
          placeholder="Data de nascimento: DD/MM/AAAA"
          {...field}
          ref={inputRef}
          error={formState.errors['tel-national']?.message as string}
        />
      )}
    />
  );
}

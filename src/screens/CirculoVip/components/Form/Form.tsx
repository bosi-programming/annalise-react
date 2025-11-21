import { Button, Input, Text } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import z from 'zod';
import { useState } from 'react';
import { onSubmit } from '@/model/postNewsletter';
import { useMask } from '@react-input/mask';

const schema = z.object({
  name: z.string().optional(),
  bday: z.preprocess((val) => {
    if (!val) return;
    if (typeof val === 'string') {
      const date = new Date(val).toISOString().replace(/T.+/, '');
      return date;
    }
    return val;
  }, z.iso.date().optional()),
  email: z.email(),
  'tel-national': z.string().optional(),
});

export function Form() {
  const inputRef = useMask({
    mask: '(__)_____-____',
    replacement: { _: /\d/ },
  });
  const [submitError, setSubmitError] = useState<string>();
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      bday: '',
      'tel-national': '',
      name: '',
    },
  });

  return (
    <form
      onSubmit={
        handleSubmit((data) =>
          onSubmit(data, (error: string) => {
            setSubmitError(error);
          }),
        ) as () => void
      }
      className="py-17 grid grid-cols-1 gap-3 lg:py-0"
    >
      <Controller
        control={control}
        name="name"
        render={({ field, formState }) => (
          <Input placeholder="Nome completo" {...field} error={formState.errors.name?.message} />
        )}
      />
      <Controller
        control={control}
        name="bday"
        render={({ field, formState }) => (
          <Input
            placeholder="Data de nascimento: DD/MM/AAAA"
            {...field}
            value={field.value as string}
            error={formState.errors.bday?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field, formState }) => (
          <Input placeholder="E-mail*" {...field} error={formState.errors.email?.message} />
        )}
      />
      <Controller
        control={control}
        name="tel-national"
        render={({ field, formState }) => (
          <Input
            placeholder="Celular: (DD)00000-0000"
            {...field}
            ref={inputRef}
            error={formState.errors['tel-national']?.message}
          />
        )}
      />
      <Button type="submit">
        <Text weight="bold">Entrar para o Círculo VIP</Text>
      </Button>
      {submitError ? (
        <Text className="text-err ml-4" size="small">
          {submitError}
        </Text>
      ) : null}
    </form>
  );
}

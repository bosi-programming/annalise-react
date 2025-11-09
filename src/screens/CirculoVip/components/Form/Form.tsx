import { Button, Input, Text } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import z from 'zod';
import { onSubmit } from './Form.utils';

const schema = z.object({
  name: z.string().optional(),
  bday: z.iso.date().optional(),
  email: z.email(),
  'tel-national': z.string().optional(),
});

export function Form() {
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data)) as () => void}
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
          <Input placeholder="Data de nascimento: DD/MM/AAAA" {...field} error={formState.errors.bday?.message} />
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
          <Input placeholder="Celular: (DD)00000-0000" {...field} error={formState.errors['tel-national']?.message} />
        )}
      />
      <Button type="submit">
        <Text weight="bold">Entrar para o Círculo VIP</Text>
      </Button>
    </form>
  );
}

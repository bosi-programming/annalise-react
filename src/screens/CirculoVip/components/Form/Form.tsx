import { Button, Input, Text } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm, FormProvider } from 'react-hook-form';
import z from 'zod';
import { useState } from 'react';
import { onSubmit } from '@/model/postNewsletter';
import { useNavigate } from 'react-router';
import { PhoneInput } from './components/PhoneInput';

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
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState<string>();
  const { handleSubmit, control, ...formRest } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      bday: '',
      'tel-national': '',
      name: '',
    },
  });

  return (
    <FormProvider handleSubmit={handleSubmit} control={control} {...formRest}>
      <form
        onSubmit={
          handleSubmit((data) =>
            onSubmit(
              data,
              (error: string) => {
                setSubmitError(error);
              },
              () => navigate('/circulo-vip/boas-vindas'),
            ),
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
        <PhoneInput />
        <Button type="submit">
          <Text weight="bold">Entrar para o Círculo VIP</Text>
        </Button>
        {submitError ? (
          <Text className="text-err ml-4" size="small">
            {submitError}
          </Text>
        ) : null}
      </form>
    </FormProvider>
  );
}

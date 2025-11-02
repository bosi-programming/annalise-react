import { Button } from '@/components/Button';
import { Email } from '@/components/Email';
import { Text } from '@/components/Text';
import z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { onSubmit } from './Newsletter.utils';

export interface NewsletterProps {
  className?: string;
}

const schema = z.object({ email: z.email('Digite um e-mail válido') }).required();

export function Newsletter({ className }: NewsletterProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <div className={className}>
      <Text size="h1" as="h2" weight="bold" className="pb-5 text-center leading-none text-white">
        Newsletter
      </Text>
      <Text className="pb-10 text-center leading-none text-white">
        Vamos ficar pertinho? Compartilho por email o processo de escrita, recomendações literárias, material extra do
        livro e fotos do Chicó.
      </Text>
      <form
        onSubmit={handleSubmit((data) => onSubmit(data)) as () => void}
        className="m-auto flex max-w-md items-center"
      >
        <Controller
          control={control}
          name="email"
          render={({ field }) => <Email placeholder="Email" className="w-10 flex-auto" {...field} />}
        />
        <Button type="submit" className="flex-none rounded-none rounded-e-full">
          Enviar
        </Button>
      </form>
      {errors.email ? (
        <Text className="text-err ml-4 mt-3" size="small">
          {errors.email.message}
        </Text>
      ) : null}
    </div>
  );
}

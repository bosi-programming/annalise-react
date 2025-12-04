import { Button } from '@/components/Button';
import { Email } from '@/components/Email';
import { Text } from '@/components/Text';
import z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { onSubmit } from '@/model/postNewsletter';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export interface NewsletterProps {
  className?: string;
}

const schema = z.object({ email: z.email('Digite um e-mail válido') }).required();

export function Newsletter({ className }: NewsletterProps) {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState<string>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), defaultValues: { email: '' } });

  return (
    <div
      className={`border-newsletter-border/40 rounded-4xl bg-linear-to-br from-62% border-2 border-solid from-[#6433A1B0]/30 to-[#F472B680]/30 p-8 pb-12 ${className ? className : ''}`}
    >
      <Text size="h1" as="h2" weight="bold" className="pb-5 text-center leading-none text-white">
        Newsletter
      </Text>
      <Text className="pb-10 text-center leading-none text-white">
        Falo sobre o processo de escrita, recomendações literárias, material extra do livro e fotos do Chicó.
      </Text>
      <form
        onSubmit={
          handleSubmit((data) =>
            onSubmit(
              data,
              (error) => {
                setSubmitError(error);
              },
              () => navigate('/circulo-vip/boas-vindas'),
            ),
          ) as () => void
        }
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
      {submitError ? (
        <Text className="text-err ml-4 mt-3" size="small">
          {submitError}
        </Text>
      ) : null}
    </div>
  );
}

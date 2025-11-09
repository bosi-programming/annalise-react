import { type SubmitHandler } from 'react-hook-form';

export const onSubmit: SubmitHandler<{ email: string; name?: string; bday?: string; 'tel-national'?: string }> = (
  data,
) => {
  console.log(data);
};

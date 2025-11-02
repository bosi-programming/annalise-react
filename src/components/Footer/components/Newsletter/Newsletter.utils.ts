import { type SubmitHandler } from 'react-hook-form';

export const onSubmit: SubmitHandler<{ email: string }> = (data) => {
  console.log(data);
};

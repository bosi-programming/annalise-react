interface SubmitData {
  email: string;
  name?: string;
  bday?: string;
  'tel-national'?: string;
}
const normalizeData = (data: SubmitData) => ({
  ...(data.name ? { name: data.name } : {}),
  ...(data.bday ? { dob: data.bday } : {}),
  ...(data.email ? { email: data.email } : {}),
  ...(data['tel-national'] ? { phone: data['tel-national'] } : {}),
});
export const onSubmit = async (
  data: SubmitData,
  onError: (error: string) => void,
  navigate: () => Promise<void> | void,
) => {
  const body = {
    formTemplate: import.meta.env.VITE_FORM_TEMPLATE,
    formAnswers: normalizeData(data),
  };

  try {
    const finalBody = JSON.stringify(body);
    const headers = new Headers({
      'Content-Type': 'application/json',
      responder: import.meta.env.VITE_RESPONDER,
    });
    await fetch('https://form-service.felipebosi.com/form-response', { body: finalBody, headers, method: 'POST' });
    await navigate();
  } catch (e) {
    if (e instanceof Error) {
      onError(e.message);
      return;
    }
    onError('Erro ao salvar formulário. Por favor, tente novamente.');
  }
};

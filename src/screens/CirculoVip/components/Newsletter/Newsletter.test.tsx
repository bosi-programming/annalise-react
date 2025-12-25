import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';
import { Newsletter } from './Newsletter';
import * as utils from '@/model/postNewsletter';

const mockUseNavigate = vi.fn();

vi.mock('react-router', async () => {
  const mod = await vi.importActual('react-router');
  return {
    ...mod,
    useNavigate: () => mockUseNavigate,
  };
});

describe('Newsletter', () => {
  test('Should render', () => {
    render(<Newsletter />);

    expect(screen.getByText('Newsletter')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Vamos ficar pertinho? Compartilho por email o processo de escrita, recomendações literárias, material extra do livro e fotos do Chicó.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByText('Enviar')).toBeInTheDocument();
  });

  test('Should show error message', async () => {
    const spy = vi.spyOn(utils, 'onSubmit');

    render(<Newsletter />);

    const email = screen.getByPlaceholderText('Email');
    await userEvent.type(email, 'a');
    const sendBtn = screen.getByText('Enviar');
    await userEvent.click(sendBtn);

    expect(screen.getByText('Digite um e-mail válido')).toBeInTheDocument();
    expect(spy).not.toHaveBeenCalled();
  });

  test('Should call onSubmit with correct data', async () => {
    const spy = vi.spyOn(utils, 'onSubmit');

    render(<Newsletter />);

    const emailInput = screen.getByPlaceholderText('Email');
    const email = 'test@gmail.com';
    await userEvent.type(emailInput, email);
    const sendBtn = screen.getByText('Enviar');
    await userEvent.click(sendBtn);

    expect(spy).toHaveBeenCalledWith({ email }, expect.any(Function), expect.any(Function));
  });
});

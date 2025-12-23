import { useLocation } from 'react-router';
import { Text } from '../Text';
import { Newsletter } from './components/Newsletter';
import { Social } from './components/Social';
import { useWindowSize } from '@/hooks/useWindowSize';

const PATH_TO_NOT_SHOW_FOOTER = ['circulo-vip/boas-vindas'];

export function Footer() {
  const { windowWidth } = useWindowSize();
  const isDesktop = windowWidth >= 1024;
  const location = useLocation();
  if (PATH_TO_NOT_SHOW_FOOTER.some((path) => location.pathname.includes(path))) {
    return null;
  }
  return (
    <div className="lg:max-w-screen">
      <div className="lg:pt-15">
        <Newsletter className="mb-22" />
        <Social />
        <Text className="text-center text-white" size={isDesktop ? 'medium' : 'small'}>
          Feito com suor, lágrimas e muita ajuda de gente boa demais.
        </Text>
        <Text className="lg:pb-18 pb-5 text-center text-white" size={isDesktop ? 'medium' : 'small'}>
          Obrigada pela visita! Volte mais vezes 💜
        </Text>
        <hr className="mt-30 mb-20 text-[#EE80C520]" />
        <Text className="pt-6 text-center text-white" size={isDesktop ? 'medium' : 'small'}>
          Annalise Cerqueira-Maia é um pseudônimo.
        </Text>
        <Text
          className="mx-auto pb-5 text-center text-white max-lg:max-w-[200px] lg:pb-12"
          size={isDesktop ? 'medium' : 'small'}
        >
          © 2025 todos os direitos reservados. Design by Anna & @DaBruOficial.
        </Text>
        <Text
          className="lg:pb-35 m-auto max-w-[1240px] pb-10 leading-4 text-white max-lg:max-w-[344px] lg:leading-5"
          size={isDesktop ? 'medium' : 'small'}
        >
          Oi, você que chegou até aqui! Essa é a parte das letras miúdas (pouca gente lê, mas é importante): seus dados
          são usados apenas pra te enviar novidades sobre o livro ADE. Nada de terceiros. Se participar de sorteios ou
          do clube do livro, recomendo ler os{' '}
          <a
            className="underline"
            href="https://docs.google.com/document/d/1L113L91ScvYjhnnP0RLjZ8TeO6e0RaszeWQ3duWmJ88/edit?usp=sharing"
            target="_blank"
            rel="license"
          >
            Termos e Condições.
          </a>{' '}
          Dúvidas ou quer excluir seus dados? Escreva para annalisecerqueira@gmail.com. Obrigada pelo voto de confiança
          — e por ler até aqui. Prometo que minha prosa é bem mais interessante que esse rodapé. ✨
        </Text>
      </div>
    </div>
  );
}

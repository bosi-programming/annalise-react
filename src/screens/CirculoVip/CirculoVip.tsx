import { Text } from '@/components';
import { Form, Heading } from './components';
import { useWindowSize } from '@/hooks/useWindowSize';
import { Newsletter } from './components/Newsletter';
import { Social } from './components/Social';

export function CirculoVip() {
  const { windowWidth } = useWindowSize();
  const isDesktop = windowWidth >= 1024;

  return (
    <div className="bg-[url(/bg.webp)] bg-cover">
      <div className="pb-30 lg:pt-30 m-auto max-w-[1440px] pt-20">
        <title>Círculo VIP - #ADE</title>
        <main className="lg:pt-45 lg:px-25 max-w-[1440px] px-8 pt-10 max-lg:min-h-[calc(100vh-80px)] lg:flex lg:h-screen lg:justify-between">
          <div className="max-w-[540px]">
            <Heading className="lg:leading-16 max-lg:text-heading-mobile text-white max-lg:font-normal" />
            <Text size="h2" className="mt-2.5 text-white lg:mr-16 lg:mt-9 lg:leading-7">
              Entre para o Círculo VIP e seja a primeira a receber novidades sobre o universo de A dança dos Encantos.
              Prometo pela Lua que brilha no céu: nada de spam.
            </Text>
          </div>
          <Form />
        </main>
        <Newsletter className="mb-22" />
        <Social />
        <Text className="text-center text-white" size={isDesktop ? 'medium' : 'small'}>
          Feito com suor, lágrimas e muita ajuda de gente boa demais.
        </Text>
        <Text className="lg:pb-18 pb-5 text-center text-white" size={isDesktop ? 'medium' : 'small'}>
          Obrigada pela visita! Volte mais vezes 💜
        </Text>
      </div>
    </div>
  );
}

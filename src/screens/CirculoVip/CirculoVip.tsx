import { Text } from '@/components';
import { Form, Heading } from './components';

export function CirculoVip() {
  return (
    <div className="m-auto max-w-[1440px] max-lg:min-h-[calc(100vh-80px)]">
      <title>Círculo VIP - #ADE</title>
      <main className="lg:pt-45 lg:px-25 max-w-[1440px] px-8 pt-10 lg:flex lg:h-screen lg:justify-between">
        <div className="max-w-[540px]">
          <Heading className="lg:leading-16 max-lg:text-heading-mobile text-white max-lg:font-normal" />
          <Text size="h2" className="mt-2.5 text-white lg:mr-16 lg:mt-9 lg:leading-7">
            Entre para o Círculo VIP e seja a primeira a receber novidades sobre o universo de A dança dos Encantos.
            Prometo pela Lua que brilha no céu: nada de spam.
          </Text>
        </div>
        <Form />
      </main>
    </div>
  );
}

import { Text } from '@/components';
import { Form, Heading } from './components';

export function CirculoVip() {
  return (
    <div className="m-auto max-w-[1440px]">
      <title>Círculo VIP - #ADE</title>
      <main className="lg:py-45 lg:mb-13 lg:gap-30 lg:px-25 h-full max-w-[1440px] px-8 pt-10 lg:grid lg:grid-cols-2">
        <div>
          <Heading className="leading-16 text-white" />
          <Text size="h2" className="mr-16 mt-9 leading-7 text-white">
            Entre para o Círculo VIP e seja a primeira a receber novidades sobre o universo de A dança dos Encantos.
            Prometo pela Lua que brilha no céu: nada de spam.
          </Text>
        </div>
        <Form />
      </main>
    </div>
  );
}

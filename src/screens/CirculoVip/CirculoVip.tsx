import { Text } from '@/components';
import { Form, Heading } from './components';

export function CirculoVip() {
  return (
    <div className="m-auto max-w-7xl">
      <title>Círculo VIP - #ADE</title>
      <main className="lg:py-45 lg:mb-13 lg:gap-30 lg:px-30 h-full px-8 pt-10 lg:grid lg:grid-cols-2">
        <div>
          <Heading className="leading-none text-white" />
          <Text className="mr-16 mt-10 text-white">
            Entre para o Círculo VIP e seja a primeira a receber novidades sobre o universo de #ADE. Prometo pela Lua
            que brilha no céu: nada de spam.
          </Text>
        </div>
        <Form />
      </main>
    </div>
  );
}

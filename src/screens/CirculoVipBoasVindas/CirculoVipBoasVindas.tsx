import { Button, Text } from '@/components';
import { useWindowSize } from '@/hooks/useWindowSize';
import { Link } from 'react-router';

export function CirculoVipBoasVindas() {
  const { windowWidth } = useWindowSize();
  const isDesktop = windowWidth >= 1024;
  const titleSize = isDesktop ? 'evenBiggerTitle' : 'bigTitle';
  return (
    <main className="lg:px-26 flex h-screen flex-col justify-center bg-purple-900 bg-[url(/starbg.gif)] bg-cover px-8 bg-blend-color-burn lg:justify-center lg:gap-8 lg:pt-10">
      <title>Círculo VIP - Boas Vindas</title>
      <div className="lg:flex lg:items-end">
        <div>
          <Text as="h1" size={titleSize} weight="bold" className="max-lg:pb-13 text-white">
            Boas-vindas ao Círculo VIP
          </Text>
        </div>
        <Text as="h2" size="h2" className="max-lg:pb-18 max-w-[520px] leading-[150%] text-white">
          É muito bom ter você comigo nessa jornada. Prometo que envio novidades sobre o lançamento de #ADE assim que
          tudo for definido.
        </Text>
      </div>
      <Link to="/circulo-vip">
        <Button className="w-65" variant="secondary">
          Voltar para formulário
        </Button>
      </Link>
    </main>
  );
}

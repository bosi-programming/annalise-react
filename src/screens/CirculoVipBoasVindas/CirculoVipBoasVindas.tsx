import { Button, Text } from '@/components';
import { useWindowSize } from '@/hooks/useWindowSize';

export function CirculoVipBoasVindas() {
  const { windowWidth } = useWindowSize();
  const isDesktop = windowWidth >= 1024;
  const titleSize = isDesktop ? 'evenBiggerTitle' : 'bigTitle';
  return (
    <main className="lg:px-26 flex h-full flex-col justify-center bg-purple-900 bg-[url(/starbg.gif)] bg-cover px-8 bg-blend-color-burn max-lg:min-h-[calc(100dvh-65px)] lg:h-[calc(100dvh-81px)] lg:justify-center lg:gap-8 lg:pt-10">
      <title>Círculo VIP - Boas Vindas</title>
      <div className="lg:grid lg:grid-cols-2 lg:items-end lg:gap-10">
        <div>
          <Text as="h1" size={titleSize} weight="bold" className="max-lg:pb-13 text-white">
            Boas-vindas ao Círculo VIP
          </Text>
        </div>
        <Text as="h2" size="h2" className="max-lg:pb-18 text-white">
          É muito bom ter você comigo nessa jornada. Prometo que envio novidades sobre o lançamentos de #ADE assim que
          tudo for definido.
        </Text>
      </div>
      <Button className="w-65" variant="secondary">
        <a href="/circulo-vip">Voltar para formulário</a>
      </Button>
    </main>
  );
}

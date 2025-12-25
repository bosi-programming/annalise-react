import { useWindowSize } from '@/hooks/useWindowSize';
import { Logo, TikTokIcon } from '../Icons';
import { Text } from '../Text';

export function Header() {
  const { windowWidth } = useWindowSize();
  const isDesktop = windowWidth >= 1024;
  return (
    <div className="bg-bg-header absolute mx-auto flex w-screen justify-center">
      <div className="lg:px-25 grow-1 flex max-w-[1440px] items-center justify-between px-7 py-6 lg:py-10">
        <div className="flex items-center">
          <Logo />
          {isDesktop ? (
            <Text size="h2" weight="bold" className="text-white">
              Annalise Cerqueira-Maia
            </Text>
          ) : null}
        </div>
        <a
          href="https://www.tiktok.com/@annalisecmaia?is_from_webapp=1&sender_device=pc"
          target="_blank"
          rel="external"
        >
          <TikTokIcon {...(isDesktop ? { size: 40 } : {})} />
        </a>
      </div>
    </div>
  );
}

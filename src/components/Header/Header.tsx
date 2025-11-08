import { Logo, TikTokIcon } from '../Icons';
import { Text } from '../Text';

export function Header() {
  return (
    <div className="lg:px-13 bg-bg-header flex items-center justify-between px-7 py-4 lg:py-6">
      <div className="flex items-center">
        <Logo />
        <Text weight="bold" className="text-white">
          Annalise Cerqueira-Maia
        </Text>
      </div>
      <a href="https://www.tiktok.com/@annalisecmaia?is_from_webapp=1&sender_device=pc" target="_blank" rel="external">
        <TikTokIcon />
      </a>
    </div>
  );
}

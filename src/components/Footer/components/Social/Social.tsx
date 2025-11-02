import { AmazonIcon, BlueskyIcon, InstagramIcon, TikTokIcon } from '@/components';

export function Social() {
  return (
    <div className="mx-auto grid w-fit grid-cols-4 gap-9 pb-7">
      <a href="https://amzn.to/40xthXT" target="_blank" rel="external">
        <AmazonIcon />
      </a>
      <a href="https://bsky.app/profile/annalisecmaia.bsky.social" target="_blank" rel="external">
        <BlueskyIcon />
      </a>
      <a href="https://www.instagram.com/annalisecmaia/" target="_blank" rel="external">
        <InstagramIcon />
      </a>
      <a href="https://www.tiktok.com/@annalisecmaia?is_from_webapp=1&sender_device=pc" target="_blank" rel="external">
        <TikTokIcon />
      </a>
    </div>
  );
}

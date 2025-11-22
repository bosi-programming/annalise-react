import { Text } from '@/components';

export interface HeadingProps {
  className?: string;
}

export function Heading({ className }: HeadingProps) {
  return (
    <Text size="heading" as="h1" weight="bold" className={className}>
      Descubra{' '}
      <span className="via-57% to-71% bg-radial from-[#C084FC] from-25% via-[#F472B6] to-[#D8B4FE] bg-clip-text text-transparent">
        #ADE
      </span>{' '}
      antes de todo mundo
    </Text>
  );
}

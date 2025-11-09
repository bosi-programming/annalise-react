import { Text } from '@/components';

export interface HeadingProps {
  className?: string;
}

export function Heading({ className }: HeadingProps) {
  return (
    <Text size="bigTitle" as="h1" weight="bold" className={className}>
      Descubra #ADE antes de todo mundo
    </Text>
  );
}

export function mergeClassNames(...classNames: Array<string | undefined | null>): string {
  return classNames.filter((el) => !!el).join(' ');
}

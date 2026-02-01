import spacings from '@/constants/spacings';

type Padding = keyof typeof spacings | undefined;

export type ComponentPadding =
  | Padding
  | [Padding, Padding]
  | [Padding, Padding, Padding]
  | [Padding, Padding, Padding, Padding];

/**
 * Padding helper
 */
export function makePadding(padding: ComponentPadding) {
  if (Array.isArray(padding)) {
    return padding.map((p) => (p ? spacings[p] : '0px')).join(' ');
  }
  return padding ? spacings[padding] : '0px';
}

import borders from "@/constants/border";

type Border = keyof typeof borders.width | undefined;

export type ComponentBorder =
  | Border
  | [Border, Border]
  | [Border, Border, Border, Border];

/**
 * Border helper
 */
export function makeBorder(border: ComponentBorder) {
  if (Array.isArray(border)) {
    return border.map((p) => (p ? borders.width[p] : '0px')).join(' ');
  }
  return border ? borders.width[border] : '0px';
}

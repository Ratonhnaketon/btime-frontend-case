'use client'

import border from '@/constants/border';
import spacings from '@/constants/spacings';
import { ComponentBorder, makeBorder } from '@/theme/borders';
import { ComponentPadding, makePadding } from '@/theme/paddings';
import React from 'react';
import styled from 'styled-components';

type Props = {
  /** CSS's `min-width` */
  minWidth?: string;
  /** CSS's `max-width` */
  maxWidth?: string;
  /** CSS's `width` */
  width?: string;
  /** CSS's `align-items` */
  align?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  /** `background-color` */
  backgroundColor?: string;
  /** `border-color` */
  borderColor?: string;
  /** `border-width` */
  borderWidth?: ComponentBorder;
  /** React Children */
  children: React.ReactNode;
  /** CSS's `flex-direction` */
  direction?: 'row' | 'column';
  /** `gap` between children
   * @default 0
   *
   * Options:
   * - xs5: '4px'
   * - xs4: '8px'
   * - xs3: '12px'
   * - xs2: '16px'
   * - xs1: '20px'
   * - xs: '24px'
   * - s: '32px'
   * - m: '40px'
   * - l: '64px'
   * - xl5: '80px'
   * - xl4: '96px'
   * - xl3: '120px'
   * - xl2: '144px'
   * - xl: '160px'
   */
  gap?: keyof typeof spacings;
  /** CSS's `flex-grow` */
  grow?: number;
  /** CSS's `height` */
  height?: string;
  /** CSS's `justify-content` */
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  /** `onClick` callback function */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /** `padding` formatted by ComponentPadding util */
  padding?: ComponentPadding;
  /** border-radius */
  radius?: keyof typeof border.radius;
  /** CSS's `flex-shrink` */
  shrink?: number;
  /** Custom CSS styles */
  style?: React.CSSProperties;
  /** CSS's `flex-wrap` */
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  /** CSS's `min-height` */
  minHeight?: string;
  /** CSS's `max-height` */
  maxHeight?: string;
  /** CSS's `overflow` */
  overflow?: 'auto' | 'hidden' | 'scroll' | 'visible';
  /** CSS's `flex` */
  flex?: number;
};

const StyledFlex = styled.div<Props>(({ theme, ...props }) => {
  return {
    alignItems: props.align,
    backgroundcolor: props.backgroundColor,
    borderColor: props.borderColor,
    borderRadius: props.radius ? border.radius[props.radius] : undefined,
    borderStyle: props.borderWidth ? 'solid' : 'none',
    borderWidth: makeBorder(props.borderWidth),
    cursor: props.onClick ? 'pointer' : 'inherit',
    display: 'flex',
    flex: props.flex,
    flexDirection: props.direction,
    flexGrow: props.grow,
    flexShrink: props.shrink,
    flexWrap: props.wrap,
    minWidth: props.minWidth,
    maxWidth: props.maxWidth,
    gap: props.gap ? spacings[props.gap] : 0,
    height: props.height,
    justifyContent: props.justify,
    padding: props.padding ? makePadding(props.padding) : 0,
    width: props.width,
    minHeight: props.minHeight,
    maxHeight: props.maxHeight,
    overflow: props.overflow,
  };
});

const Flex = React.forwardRef<HTMLDivElement, Props>((props, ref) => (
  <StyledFlex ref={ref} {...props} />
));

Flex.displayName = 'Flex';

export default Flex;

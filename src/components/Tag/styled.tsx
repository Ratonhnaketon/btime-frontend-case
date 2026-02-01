import border from '@/constants/border';
import fonts from '@/constants/fonts';
import spacings from '@/constants/spacings';
import { ButtonBaseProps, ButtonBase } from '@mui/material';
import styled, { css } from 'styled-components';

export interface TagStyledProps extends ButtonBaseProps {
  variant: 'success' | 'warning' | 'error'
  size?: 'extra-small' | 'small' | 'medium' | 'large';
}

function getColorsByVariant (
  variant: TagStyledProps['variant'],
) {
  switch (variant) {
    case 'error':
      return {
        textColor: 'grey',
        backgroundColor: 'red',
      };

    case 'warning':
      return {
        textColor: 'grey',
        backgroundColor: 'yellow',
      };

    case 'success':
      return {
        textColor: 'black',
        backgroundColor: 'green',
      };
  }
};

function getSizes(size: TagStyledProps['size']) {
  switch (size) {
    case 'extra-small':
      return css`
        padding: ${spacings.xs5} ${spacings.xs4} !important;
        gap: ${spacings.xs5};
        font-size: 10px;
        line-height: 12px;
      `;
    case 'small':
      return css`
        padding: ${spacings.xs5} ${spacings.xs3} !important;
        gap: ${spacings.xs5};
        font-size: ${spacings.xs3};
        line-height: 18px;
      `;
    case 'medium':
      return css`
        padding: ${spacings.xs5} ${spacings.xs3} !important;
        gap: ${spacings.xs4};
        font-size: 14px;
        line-height: 20px;
      `;
    case 'large':
    default:
      return css`
        padding: ${spacings.xs5} ${spacings.xs3} !important;
        gap: ${spacings.xs4};
        font-size: ${spacings.xs2};
        line-height: 22px;
      `;
  }
};

export const TagStyled = styled(ButtonBase)<TagStyledProps>`
  border-radius: ${() => border.radius.xl} !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-family: ${() => fonts.secondary};
  line-height: ${() => spacings.xs2};
  text-align: center;
  width: fit-content;
  ${({ size }) => getSizes(size)};
  ${({ variant }) => {
    const {
      textColor,
      backgroundColor,
    } = getColorsByVariant(variant);

    return css`
      background-color: ${backgroundColor} !important;
      color: ${textColor};
    `;
  }};
`;

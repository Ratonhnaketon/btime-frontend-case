import border from '@/constants/border';
import spacings from '@/constants/spacings';
import { Dialog, DialogContent } from '@mui/material';
import styled from 'styled-components';

export const Modal = styled(Dialog)`
  .MuiDialog-paper {
    border-radius: ${() => border.radius.l};
    max-height: ${() => `calc(100vh - ${spacings.l})`};
    max-width: fit-content;

    @media screen and (max-width: 450px) {
      margin: ${() => spacings.xs3};
    }
  }
`;

export const Container = styled(DialogContent)<{
  size: 'sm' | 'md' | 'lg' | number;
}>`
  width: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '480px';
      case 'md':
        return '800px';
      case 'lg':
        return '960px';
      default:
        return `${size.toString()}px`;
    }
  }};
  text-align: left;
  padding: 0;
  overflow-y: auto;

  @media screen and (max-width: 450px) {
    width: calc(100vw - ${() => spacings.xs1});
  }
`;

export const Content = styled.div`
  padding: ${() => `0 ${spacings.m} ${spacings.xs}`};

  @media screen and (max-width: 450px) {
    padding: ${() => `0 ${spacings.xs2} ${spacings.xs}`};
  }
`;

export const CloseContainer = styled.div`
  position: absolute;
  z-index: 10;
  right: 12px;
  top: 12px;
`;

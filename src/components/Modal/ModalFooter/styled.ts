import border from '@/constants/border';
import spacings from '@/constants/spacings';
import { DialogActions } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(DialogActions)`
  display: flex;
  border-top: ${() =>
    `${border.width.xs2} solid grey`};
  padding: ${() => `${spacings.xs3} ${spacings.m}`};

  :has(.modal-right-actions-container) {
    justify-content: center;
  }

  :has(#modal-cancel-button) {
    justify-content: space-between;
  }

  .modal-right-actions-container {
    display: flex;
    gap: ${() => spacings.xs3};
  }
`;

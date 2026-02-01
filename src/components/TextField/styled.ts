import border from '@/constants/border';
import fonts from '@/constants/fonts';
import spacings from '@/constants/spacings';
import { TextField as TextFieldMui } from '@mui/material';
import styled from 'styled-components';

export const TextFieldStyled = styled(TextFieldMui)`
  .MuiInputLabel-root {
    color: ${() => 'grey'};
    font-family: ${() => fonts.secondary};
    font-weight: 600;
    transition: all 0.2s ease-in-out;

    .MuiInputLabel-asterisk {
      color: ${() => 'red'};
    }
  }

  .MuiInputLabel-shrink {
    color: ${() => 'grey'};
  }

  .MuiFilledInput-root {
    background-color: transparent;
    border: 1px solid ${() => 'grey'};
    margin: 1px;
    border-radius: ${() => border.radius.m};
    transition:
      border-color 0.1s ease-in-out,
      background-color 0.1s ease-in-out;

    &.MuiInputBase-adornedEnd {
      padding-right: ${() => spacings.xs2};
    }

    &:hover:not(.MuiInputLabel-shrink):not(.Mui-disabled):not(.Mui-focused):not(
        .Mui-error
      ) {
      border: 2px solid ${() => 'grey'};
      margin: unset;
    }

    &.Mui-disabled {
      border: 1px solid ${() => 'grey'};
    }

    &::before,
    &::after {
      content: none;
    }

    input {
      color: ${() => 'grey'};
      font-family: ${() => fonts.secondary};
      font-weight: 600;
    }
  }

  .MuiFilledInput-input {
    border-radius: ${() => border.radius.m};
    color: ${() => 'grey'};
  }

  &.size-large {
    & .MuiInputLabel-root {
      font-size: 1rem;
      line-height: 22px;
      transform: translate(16px, 18px);
    }

    & .MuiInputLabel-shrink {
      transform: translate(16px, 9px);
      font-size: 0.75rem;
      line-height: 18px;
    }

    & .MuiFilledInput-input {
      padding: 27px 14px 7px;
      height: 1.25rem;
      line-height: 20px;
      font-size: 0.875rem;
    }
  }

  &.size-medium {
    & .MuiInputLabel-root {
      font-size: 0.875rem;
      line-height: 20px;
      transform: translate(16px, 14px);
    }

    & .MuiInputLabel-shrink {
      transform: translate(16px, 5px);
      font-size: 0.75rem;
      line-height: 18px;
    }

    & .MuiFilledInput-input {
      padding: 21px 14px 3px;
      height: 1.25rem;
      line-height: 20px;
      font-size: 0.875rem;
    }
  }

  &.size-small {
    & .MuiInputLabel-root {
      font-size: 0.875rem;
      line-height: 20px;
      transform: translate(16px, 10px);
    }

    & .MuiInputLabel-shrink {
      display: none;
    }

    & .MuiFilledInput-input {
      padding: 8px 14px;
      height: 1.25rem;
      line-height: 20px;
      font-size: 0.875rem;
    }
  }

  .Mui-focused:not(label) {
    border: 2px solid ${() => 'black'};
    margin: unset;
  }

  .Mui-focused {
    ::-webkit-scrollbar-thumb {
      background-color: var(--color-secondary-light5);
      margin: 1px;
    }

    svg {
      stroke: var(--color-secondary-light5);
    }
  }

  & .Mui-disabled,
  & .Mui-disabled input {
    color: ${() => 'black'};
    background: ${() => 'grey'};
    border-color: ${() => 'black'};
    cursor: not-allowed;
  }

  & .Mui-disabled:not(label):not(input) {
    svg {
      stroke: var(--color-neutral-light5);
    }
  }

  .Mui-error:not(label):not(.MuiFormLabel-asterisk) {
    background: ${() => 'red'};
    margin: unset;
    border: 2px solid ${() => 'grey'};
  }
`;

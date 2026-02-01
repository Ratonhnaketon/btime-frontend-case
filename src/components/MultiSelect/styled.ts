import { ButtonBase, TextField } from '@mui/material';
import styled from 'styled-components';

import spacings from '@/constants/spacings';
import border from '@/constants/border';
import fonts from '@/constants/fonts';

type FilterStyledProps = {
  active?: boolean;
}

export const Button = styled(ButtonBase)<FilterStyledProps>(() => ({
  backgroundColor: 'white',
  borderRadius: border.radius.xl,
  borderColor: 'grey',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'flex-start',
  color: 'white',
  fontWeight: 600,
  fontSize: '12px',
  lineHeight: '18px',
  textAlign: 'center',
  padding: spacings.xs4 + ' ' + spacings.xs2,
  cursor: 'pointer',
}));

export const BadgeNumber = styled.div<FilterStyledProps>((props) => ({
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: border.radius.circular,
  marginLeft: spacings.xs4,
  backgroundColor: '#ff0',
  color: 'white',
}));

export const ClearButtonContainer = styled.div`
  padding: ${() =>
    `${spacings.xs} ${spacings.xs2}`};
  border-top: 1px solid ${() => 'grey'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${() => spacings.xs3};
  padding: ${() => spacings.xs2};

  &:hover {
    background-color: ${() => 'white'};
    border-radius: ${() => border.radius.xl};
  }
`;

export const MenuContainer = styled.ul<{ showClearButton?: boolean }>`
  list-style-type: none;
  max-height: 300px;
  width: 320px;
  padding: 0px ${() => spacings.xs3};
  margin: ${() => spacings.xs5} 0px;
  overflow: ${({ showClearButton }) => (showClearButton ? 'auto' : 'visible')};
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SearchInput = styled(TextField)`
  color: ${() => 'black'};
  font-family: ${() => fonts.primary};
  font-weight: 600;
  padding-left: 40px !important;
  border: none !important;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  width: 100%;
  &:before,
  &:after {
    content: none;
  }
`;

export const SearchInputBorder = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  height: 60px;
  width: 100%;
  border: ${() => border.width.xs2} solid
    ${() => 'grey'};
  border-radius: 150px;
  &:before,
  &:after {
    content: none;
  }
`;

export const SelectAllContainer = styled.div<{ showSelectAllButton?: boolean }>`
  display: ${({ showSelectAllButton }) =>
    showSelectAllButton ? 'flex' : 'none'};
  align-items: center;
  background-color: transparent;
  gap: ${() => spacings.xs};
  width: 100%;
  border: ${() => border.width.xs2} solid
    ${() => 'grey'};
`;

export const SelectAllItem = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: transparent;
  gap: ${() => spacings.xs3};
  padding: ${() => spacings.xs2};
`;

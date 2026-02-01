import spacings from '@/constants/spacings';
import styled from 'styled-components';

export const TitleContainer = styled.div`
  padding: ${() => `${spacings.xs} ${spacings.m}`};

  @media screen and (max-width: 450px) {
    padding: ${() => `${spacings.xs} ${spacings.xs2} 0px`};
  }
`;

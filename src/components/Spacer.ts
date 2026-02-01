import spacings from '@/constants/spacings';
import styled from 'styled-components';

type SpacerProps = {
  x?: keyof typeof spacings;
  y?: keyof typeof spacings;
  useMargin?: boolean;
};

export default styled.div<SpacerProps>`
  ${(p) => (!p.useMargin ? 'width' : 'margin-right')}: ${(p) =>
    p.x ? spacings[p.x] : 0};
  ${(p) => (!p.useMargin ? 'height' : 'margin-top')}: ${(p) =>
    p.y ? spacings[p.y] : 0};
`;

import fonts from '@/constants/fonts';
import styled from 'styled-components';

type GloballySharedType = {
  /** Text alignment */
  center?: boolean;
  /** Font color */
  color: string | 'inherit';
  /** Prevents text from breaking line */
  noWrap?: boolean;
};

const GloballyShared = styled.p<GloballySharedType>`
  color: ${(p) => (p.color === 'inherit' ? 'inherit' : p.color)};
  text-align: ${(p) => (p.center ? 'center' : 'left')};
  white-space: ${(p) => (p.noWrap ? 'nowrap' : 'inherit')};
`;

const TitleBase = styled(GloballyShared)`
  font-family: ${fonts.primary};
  text-underline-offset: 3px;
`;

type BodyType = GloballySharedType & {
  /** Font weight. Defaults to 400 */
  weight?: 400 | 600 | 700;
};

const BodyBase = styled(GloballyShared)<BodyType>`
  font-family: ${fonts.secondary};
  font-weight: ${(p) => p.weight ?? 400};
`;

/* ------------------------------------- Typography variants ------------------------------------ */

const Display1 = styled(TitleBase)`
  font-size: 96px;
  font-weight: 800;
  line-height: 112px;
`;

const Display2 = styled(TitleBase)`
  font-size: 88px;
  font-weight: 800;
  line-height: 98px;
`;

const Headline1 = styled(TitleBase)`
  font-size: 72px;
  font-weight: 700;
  line-height: 80px;
`;

const Headline2 = styled(TitleBase)`
  font-size: 64px;
  font-weight: 700;
  line-height: 72px;
`;

const Headline3 = styled(TitleBase)`
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
`;

const Headline4 = styled(TitleBase)`
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
`;

const Headline5 = styled(TitleBase)`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
`;

const Headline6 = styled(TitleBase)`
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
`;

const Headline7 = styled(TitleBase)`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
`;

const Headline8 = styled(TitleBase)`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;

const Headline9 = styled(TitleBase)`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const Headline10 = styled(TitleBase)`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
`;

const Body1 = styled(BodyBase)`
  font-size: 24px;
  line-height: 32px;
`;

const Body2 = styled(BodyBase)`
  font-size: 20px;
  line-height: 28px;
`;

const Body3 = styled(BodyBase)`
  font-size: 16px;
  line-height: 22px;
`;

const Body4 = styled(BodyBase)`
  font-size: 14px;
  line-height: 20px;
`;

const Caption = styled(BodyBase)`
  font-size: 12px;
  line-height: 18px;
`;

const Caption2 = styled(BodyBase)`
  font-size: 10px;
  line-height: 12px;
`;

/* ------------------------------------------ Modifiers ----------------------------------------- */

const Link = styled.a`
  color: blue;
  font-weight: 700;
  text-decoration: underline;
`;

const Underline = styled.span`
  text-decoration: underline;
`;

export const Typography = {
  /** font-size: 96px; line-height: 112px */
  Display1,
  /** font-size: 88px; line-height: 98px */
  Display2,
  /** font-size: 72px; line-height: 80px */
  Headline1,
  /** font-size: 64px; line-height: 72px */
  Headline2,
  /** font-size: 56px; line-height: 64px */
  Headline3,
  /** font-size: 48px; line-height: 58px */
  Headline4,
  /** font-size: 40px; line-height: 48px */
  Headline5,
  /** font-size: 32px; line-height: 38px */
  Headline6,
  /** font-size: 24px; line-height: 28px */
  Headline7,
  /** font-size: 20px; line-height: 24px */
  Headline8,
  /** font-size: 16px; line-height: 24px */
  Headline9,
  /** font-size: 14px; line-height: 24px */
  Headline10,
  /** font-size: 24px; line-height: 32px */
  Body1,
  /** font-size: 20px; line-height: 28px */
  Body2,
  /** font-size: 16px; line-height: 22px */
  Body3,
  /** font-size: 14px; line-height: 20px */
  Body4,
  /** font-size: 12px; line-height: 18px */
  Caption,
  /** font-size: 10px; line-height: 12px */
  Caption2,
  /** color: primary; decoration: underline */
  Link,
  /** decoration: underline */
  Underline,
};

import { TagStyled, TagStyledProps } from './styled';

type Props = TagStyledProps;

export function Tag(
    {
      children,
      variant = 'success',
      size = 'medium',
      ...props
    }: Props
  ) {
  return (
    <TagStyled
      {...props}
      variant={variant}
      size={size}
    >
      {children}
    </TagStyled>
  );
}
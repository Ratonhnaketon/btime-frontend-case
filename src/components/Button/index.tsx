import * as SC from './styled'

type Props = {
  /** Is this the principal call to action on the page? */
  type?: 'primary' | 'secondary';
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'extra-small' | 'small' | 'medium' | 'large';
  /** Button contents */
  children: React.ReactNode;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interinaction */
export function Button ({
  type = 'primary',
  size = 'medium',
  backgroundColor,
  children,
  ...props
}: Props) {
  return (
    <SC.Button
      type="button"
      className={[size, type].join(' ')}
      {...props}
    >
      {children}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </SC.Button>
  );
};

import Flex from '../Flex';

type Props = {
  children: React.ReactNode
}

/**
 * Header component
 */
export function Header(props: Props) {
  return (
    <header>
      <Flex justify='end' padding={['xs5', 's']} align='center' gap='xs4' backgroundColor='#FFFBDE'>
        {props.children}
      </Flex>
    </header>
  )
}

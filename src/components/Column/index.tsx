import Flex from "../Flex";
import { Typography } from "../Typography";

type Props = {
  title: string;
  children: React.ReactNode;
}

/**
 * Kanban Column component
 */
export function Column(props: Props) {
  return (
    <Flex
      direction="column"
      height="100%"
      flex={1}
      gap="xs3"
      bordercolor="grey"
      borderwidth='xs2'
      align="center"
      padding={['xs5', 'xs4']}
    >
      <Typography.Headline4 color="black">
        {props.title}
      </Typography.Headline4>
      <Flex gap='xs5' direction="column">
        {props.children}
      </Flex>
    </Flex>
  )
}

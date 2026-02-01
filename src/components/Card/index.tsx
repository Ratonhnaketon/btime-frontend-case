import formatDate from "@/masks/formatDate";
import Flex from "../Flex";
import { Tag } from "../Tag";
import { Typography } from "../Typography";

type Props = {
  title: string;
  date: Date;
  tag: {
    variant: 'success' | 'warning' | 'error',
    text: string
  },
  onClick?(): void;
}

/**
 * Card component
 */
export function Card(props: Props) {
  return (
    <Flex
      direction="column"
      width="310px"
      height="130px"
      onClick={props.onClick}
      gap="xs3"
      bordercolor="grey"
      borderwidth='xs2'
      radius="m"
      align="center"
      justify="space-between"
      padding={['xs5', 'xs4']}
    >
      <Flex align="center">
        <Typography.Headline8 color="black">
          {props.title}
        </Typography.Headline8>
      </Flex>
      <Flex direction="row" gap="xs4" align="center">
        <Typography.Caption color="grey">
          {formatDate(props.date)}
        </Typography.Caption>
        <Tag size="small" variant={props.tag.variant}>
          {props.tag.text}
        </Tag>
      </Flex>
    </Flex>
  )
}

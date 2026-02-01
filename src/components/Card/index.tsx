import formatDate from "@/masks/formatDate";
import Flex from "../Flex";
import { Tag } from "../Tag";
import { Typography } from "../Typography";

type Props = {
  title: string;
  description: string;
  date: Date;
  tag: {
    variant: 'success' | 'warning' | 'error',
    text: string
  },
  onClick?(): void;
}

/**
 * Kanban Card component
 */
export function Card(props: Props) {
  return (
    <Flex
      direction="column"
      width="310px"
      height="200px"
      onClick={props.onClick}
      gap="xs3"
      borderColor="grey"
      borderWidth='xs2'
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
      <Typography.Body4 color="black">
        {props.description}
      </Typography.Body4>
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

import Flex from "@/components/Flex";
import { Modal } from "@/components/Modal";
import { Tag } from "@/components/Tag";
import { Typography } from "@/components/Typography";
import formatDate from "@/masks/formatDate";
import ModalService from "@/services/ModalService";

type Props = {
  title?: string;
  description?: string;
  date?: Date;
  tag?: {
    variant: React.ComponentProps<typeof Tag>['variant'];
    text: string
  },
}

function KanbanCardModal (props: Props) {
  const controller = ModalService.useModalController()

  return (
    <Modal
      onClose={controller.remove}
      open={controller.visible}
      title={props.title ?? ''}
    >
      <Flex
        direction="column"
        gap="xs3"
        radius="m"
        align="center"
        justify="space-between"
        padding={['xs5', 'xs4']}
      >
        <Flex direction="row" gap="xs4" align="center">
          <Typography.Caption color="grey">
            {formatDate(props.date)}
          </Typography.Caption>
          {props.tag && (
            <Tag size="small" variant={props.tag.variant}>
              {props.tag.text}
            </Tag>
          )}
        </Flex>
        <Typography.Body4 color="black">
          {props.description}
        </Typography.Body4>
      </Flex>
    </Modal>
  )

}

export default ModalService.create(KanbanCardModal)

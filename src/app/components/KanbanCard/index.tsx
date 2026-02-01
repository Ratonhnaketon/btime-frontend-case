import { Card } from "@/components/Card";
import ModalService from "@/services/ModalService";
import KanbanCardModal from "./KanbanCardModal";

type Props = Omit<React.ComponentProps<typeof Card>, 'tag' | 'onClick'> & {
  priority: 'low' | 'high' | 'critical'
}

export function KanbanCard({ priority, ...props }: Props) {
  const tagProps = tagMapper(priority)

  return (
    <Card
      {...props}
      tag={tagProps}
      onClick={() => {
        ModalService.show(KanbanCardModal, {
          title: props.title,
          description: props.description,
          date: props.date,
          tag: tagProps,
        })
      }}
    />
  ) 
}

function tagMapper (priority: 'low' | 'high' | 'critical') {
  switch (priority) {
    case 'critical':
      return {
        text: 'Urgente',
        variant: 'error'
      } as const
    case "low":
      return {
        text: 'Baixa',
        variant: 'success'
      } as const
    case "high":
      return {
        text: 'Alta',
        variant: 'warning'
      } as const
  }
}

import * as SC from './styled';
import { Button } from '@/components/Button';

type ButtonAction = {
  description: string;
  disabled?: boolean;
  onClick?(): void;
  loading?: boolean;
  color?: 'default' | 'success' | 'info' | 'error' | 'neutral';
  type?: React.ComponentProps<typeof Button>['type'];
};

type Props = {
  cancel?: Omit<ButtonAction, 'type'>;
  primary?: ButtonAction;
  secondary?: ButtonAction;
};

/**
 * Modal footer sub component
 */
export function ModalFooter(props: Props) {
  return (
    <SC.Container>
      {props.cancel && (
        <Button
          {...props.cancel}
          type="secondary"
          backgroundColor='blue'
        >
          {props.cancel.description}
        </Button>
      )}

      {(props.primary ?? props.secondary) && (
        <div className="modal-right-actions-container">
          {props.secondary && (
            <Button
              type="secondary"
              {...props.secondary}
              onClick={() => props.secondary?.onClick?.()}
            >
              {props.secondary.description}
            </Button>
          )}

          {props.primary && (
            <Button
              type="primary"
              {...props.primary}
              onClick={() => props.primary?.onClick?.()}
            >
              {props.primary.description}
            </Button>
          )}
        </div>
      )}
    </SC.Container>
  );
}

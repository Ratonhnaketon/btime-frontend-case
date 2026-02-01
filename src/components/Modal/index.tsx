import React from 'react';

import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';
import * as SC from './styled';
import { Button } from '../Button';

type Props = {
  open: boolean;
  onClose?(): void;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  /**
   * Add footer with button actions
   */
  actions?: React.ComponentProps<typeof ModalFooter>;
  /**
   * @default md
   */
  size?: 'sm' | 'md' | 'lg' | number;
};

/**
 * Modal Component
 */
export function Modal(props: Props) {
  const hasActions =
    props.actions?.cancel ?? props.actions?.primary ?? props.actions?.secondary;

  /**
   *
   */
  function onClose() {
    props.onClose?.();
  }

  return (
    <SC.Modal open={props.open} onClose={onClose}>
      {props.onClose && (
        <SC.CloseContainer>
          <Button
            onClick={props.onClose}
            size="extra-small"
            type="secondary"
          >X</Button>
        </SC.CloseContainer>
      )}

      <SC.Container size={props.size ?? 'md'}>
        <ModalHeader
          title={props.title}
          subtitle={props.subtitle}
        />

        <SC.Content>{props.children}</SC.Content>
      </SC.Container>

      {hasActions && <ModalFooter {...props.actions} />}
    </SC.Modal>
  );
}

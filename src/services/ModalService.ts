import NiceModal, { NiceModalHocProps } from '@ebay/nice-modal-react';
import React from 'react';

export default class ModalService {
  /** Used to register a modal component to the context.
   *
   * **The modal prop 'id' is reserved and therefore cannot be used**
   *
   * @example ```
   * const Modal: React.FC<Props> = () => {...}
   * export default ModalService.create(Modal)
   * ```
   */
  static create<TProps extends object>(
    component: React.FC<TProps extends { id: unknown } ? never : TProps>,
  ) {
    return NiceModal.create(component);
  }

  /** Displays the modal */
  static show<T extends React.FC<NiceModalHocProps>>(
    component: T,
    props: Omit<React.ComponentProps<T>, 'id'>,
  ) {
    void NiceModal.show(component, props);
  }

  /** Hides the modal */
  static hide(component: React.FC) {
    void NiceModal.hide(component);
  }

  /** Hook that should be used inside the modal to access its controller */
  static useModalController = NiceModal.useModal;
}

export type ModalProps<T extends React.FC<NiceModalHocProps>> = Omit<
  React.ComponentProps<T>,
  'id'
>;

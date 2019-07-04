import React from 'react';
import { bool, func, string } from 'prop-types';
import { Modal, ModalBody, ModalHeader } from 'shards-react';

import StopForm from './StopForm';

const EditModal = ({ address, closeModal, id, name, open }) => {
  return (
    <Modal open={open} toggle={closeModal}>
      <ModalHeader>Edit Stop</ModalHeader>
      <ModalBody>
        <StopForm address={address} id={id} name={name} edit />
      </ModalBody>
    </Modal>
  );
};

EditModal.propTypes = {
  address: string.isRequired,
  closeModal: func.isRequired,
  name: string.isRequired,
  open: bool.isRequired,
};

export default EditModal;

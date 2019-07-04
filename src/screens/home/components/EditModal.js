import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { bool, func, string } from 'prop-types';
import { Modal, ModalBody, ModalHeader } from 'shards-react';

import StopForm from './StopForm';
import { STATUS_SUCCESS } from '../../../redux/constants';

const EditModal = ({ address, closeModal, id, name, open }) => {
  const isSuccess = useSelector(state => state.stops.status === STATUS_SUCCESS);

  useEffect(() => {
    if (isSuccess) closeModal();
  }, [isSuccess]);

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

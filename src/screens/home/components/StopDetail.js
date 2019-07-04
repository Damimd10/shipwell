import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { number, oneOfType, string } from 'prop-types';

import { Button, Col, Container, FormCheckbox, ListGroupItem, Row } from 'shards-react';

import EditModal from './EditModal';

import { deleteStop } from '../../../redux/stops/actions';

const StopDetail = ({ formattedAddress, id, stopName, stopNumber }) => {
  const [completed, setCompleted] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const closeModal = () => setOpenModal(false);

  const handleChange = () => setCompleted(!completed);

  const handleEdit = () => setOpenModal(true);

  const handleDelete = () => dispatch(deleteStop(id));

  return (
    <ListGroupItem>
      <Container>
        <Row>
          <Col sm="12" md="3" lg="1">
            {stopNumber}
          </Col>
          <Col sm="12" md="3" lg="2">
            {stopName}
          </Col>
          <Col sm="12" md="3" lg="6">
            {formattedAddress}
          </Col>
          <Col
            sm="12"
            md="3"
            lg="3"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <FormCheckbox toggle small checked={completed} onChange={handleChange}>
              Done
            </FormCheckbox>
            <Button outline pill theme="info" size="sm" onClick={handleEdit}>
              Edit
            </Button>
            <Button outline pill theme="danger" size="sm" onClick={handleDelete}>
              Delete
            </Button>
          </Col>
        </Row>
      </Container>
      <EditModal
        address={formattedAddress}
        closeModal={closeModal}
        id={id}
        name={stopName}
        open={openModal}
      />
    </ListGroupItem>
  );
};

StopDetail.propTypes = {
  formattedAddress: string.isRequired,
  id: string.isRequired,
  stopName: string.isRequired,
  stopNumber: oneOfType([number, string]).isRequired,
};

export default StopDetail;

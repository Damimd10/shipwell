import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { Col, Container, ListGroup, Row } from 'shards-react';
import StopDetail from './StopDetail';

const StopList = () => {
  const stopList = useSelector(state => state.stops.data, shallowEqual);
  return (
    <Container style={{ marginTop: '1rem' }}>
      <Row>
        <Col>
          <ListGroup>
            {stopList.map(info => (
              <StopDetail key={info.id} {...info} />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default StopList;

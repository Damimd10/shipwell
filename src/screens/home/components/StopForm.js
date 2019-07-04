import React, { useEffect, useRef } from 'react';
import { string } from 'prop-types';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  FormInput,
  Row,
} from 'shards-react';

import { hasLengthAtLeast, hasValue } from '../../../utils/validations';
import useInput from '../../../utils/hooks/useInput';

import { validateAddress } from '../../../redux/stops/actions';
import { STATUS_FETCHING, STATUS_SUCCESS, STATUS_FAILURE } from '../../../redux/constants';

const VALIDATIONS = {
  stopName: [{ fn: hasValue, message: 'Required' }],
  stopAddress: [
    { fn: hasValue, message: 'Required' },
    { fn: hasLengthAtLeast(3), message: 'Minimum characters: 3' },
  ],
};

const StopForm = ({ address, id, edit, name }) => {
  const inputRef = useRef(null);
  const status = useSelector(state => state.stops.status, shallowEqual);
  const errorDescription = useSelector(state => state.stops.error, shallowEqual);
  const dispatch = useDispatch();
  const stopName = useInput('stopName', name, VALIDATIONS.stopName);
  const stopAddress = useInput('stopAddress', address, VALIDATIONS.stopAddress);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (status === STATUS_SUCCESS && !Boolean(edit)) {
      stopAddress.props.onChange({ target: { value: '' } });
      stopName.props.onChange({ target: { value: '' } });
    }
  }, [status, edit, stopAddress.props, stopName.props]);

  const hasErrors = !!(stopName.props.error || stopAddress.props.error);

  const isLoading = status === STATUS_FETCHING;

  const handleSaveStop = () =>
    dispatch(validateAddress({ address: stopAddress.props.value, id, name: stopName.props.value }));

  return (
    <Container style={{ marginTop: '1rem' }}>
      <Row>
        <Col sm={{ size: 8, order: 2, offset: 2 }}>
          <Form>
            <FormGroup>
              <label htmlFor="#stopName">Stop Name</label>
              <FormInput
                id="#stopName"
                placeholder="Stop name"
                innerRef={inputRef}
                {...stopName.props}
              />
              <FormFeedback tag="div">{stopName.props.error}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <label htmlFor="#stopAddress">Stop Address</label>
              <FormInput id="#stopAddress" placeholder="Stop Address" {...stopAddress.props} />
              <FormFeedback tag="div">{stopAddress.props.error}</FormFeedback>
            </FormGroup>
            <FormGroup style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button outline squared disabled={isLoading || hasErrors} onClick={handleSaveStop}>
                {isLoading ? 'Loading...' : 'Save'}
              </Button>
            </FormGroup>
          </Form>
          {status === STATUS_FAILURE && (
            <Alert theme="danger">{`Error - ${errorDescription}`}</Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

StopForm.defaultProps = {
  id: '',
  stopAddress: '',
  stopName: '',
};

StopForm.propTypes = {
  id: string,
  stopAddress: string,
  stopName: string,
};

export default StopForm;

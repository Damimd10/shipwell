import axios from 'axios';

import {
  VALIDATE_ADDRESS_FAILURE,
  VALIDATE_ADDRESS_INIT,
  VALIDATE_ADDRESS_SUCCESS,
} from '../../constants';

const validateAddressRequest = () => ({
  type: VALIDATE_ADDRESS_INIT,
});

const validateAddressFailure = error => ({
  type: VALIDATE_ADDRESS_FAILURE,
  error,
});

const validateAddressSuccess = (payload, data) => ({
  type: VALIDATE_ADDRESS_SUCCESS,
  payload: {
    ...payload,
    ...data,
  },
});
const validateAddress = ({ address, id, name }) => dispatch => {
  const url = 'https://dev-api.shipwell.com/v2/locations/addresses/validate/';
  const data = { formatted_address: address };

  dispatch(validateAddressRequest());

  return axios.post(url, data).then(
    response => {
      dispatch(validateAddressSuccess(response.data, { id, name }));
    },
    error => {
      dispatch(validateAddressFailure(error.response.data.error_description));
    },
  );
};

export default validateAddress;

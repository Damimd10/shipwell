import uuidv4 from 'uuid/v4';
import {
  VALIDATE_ADDRESS_INIT,
  VALIDATE_ADDRESS_FAILURE,
  VALIDATE_ADDRESS_SUCCESS,
  STATUS_FETCHING,
  STATUS_FAILURE,
  STATUS_SUCCESS,
  DELETE_STOP,
} from '../constants';

const initialState = {
  data: [],
  error: null,
  loading: false,
  status: null,
};

const addAddress = (data, payload) => [
  ...data,
  {
    id: uuidv4(),
    stopNumber: data.length > 0 ? data.pop().stopNumber + 1 : 1,
    stopName: payload.name,
    formattedAddress: payload.provided_formatted_address,
  },
];

const editAddress = (data, payload) => {
  return data.map(x => {
    console.log('HERE', x.id === payload.id, payload);
    if (x.id === payload.id) {
      return {
        ...x,
        stopName: payload.name,
        formattedAddress: payload.provided_formatted_address,
      };
    }

    return x;
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE_ADDRESS_INIT: {
      return {
        ...state,
        loading: true,
        status: STATUS_FETCHING,
      };
    }
    case VALIDATE_ADDRESS_FAILURE: {
      return {
        ...state,
        error: action.error,
        loading: false,
        status: STATUS_FAILURE,
      };
    }
    case VALIDATE_ADDRESS_SUCCESS: {
      return {
        ...state,
        data:
          action.payload.id !== ''
            ? editAddress(state.data, action.payload)
            : addAddress(state.data, action.payload),
        error: null,
        loading: true,
        status: STATUS_SUCCESS,
      };
    }
    case DELETE_STOP: {
      return {
        ...state,
        data: state.data.filter(x => x.id !== action.id),
      };
    }
    default:
      return state;
  }
};

export { reducer as stopsReducer };

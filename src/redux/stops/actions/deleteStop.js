import { DELETE_STOP } from '../../constants';

const deleteStop = id => ({
  type: DELETE_STOP,
  id,
});

export default deleteStop;

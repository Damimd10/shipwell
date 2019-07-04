import React, { Fragment } from 'react';

import StopForm from './components/StopForm';
import StopList from './components/StopList';

const Home = () => {
  return (
    <Fragment>
      <StopForm />
      <StopList />
    </Fragment>
  );
};

export default Home;

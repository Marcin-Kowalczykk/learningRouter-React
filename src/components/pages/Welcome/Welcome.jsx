import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from '.';
import BoxWrapper from '../../../Layout';
import BoxMainText from '../../../Ui';

const Welcome = () => {
  return (
    <BoxWrapper>
      <BoxMainText>Welcome Page</BoxMainText>
      <Route path="/welcome/new-user">
        <h1>new user</h1>
      </Route>
      <Container></Container>
    </BoxWrapper>
  );
};

export default Welcome;

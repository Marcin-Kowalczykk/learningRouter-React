import React from 'react';
import { Link } from 'react-router-dom';

import BoxWrapper from '../../../Layout';
import { Container } from '.';
import BoxMainText from '../../../Ui';

const Products = () => {
  return (
    <BoxWrapper>
      <BoxMainText>Products Section</BoxMainText>
      <ul>
        <li>
          <Link to="/products/p1">Book</Link>
        </li>
        <li>
          <Link to="/products/p2">Laptop</Link>
        </li>
        <li>
          <Link to="/products/p3">desc</Link>
        </li>
      </ul>
      <Container></Container>
    </BoxWrapper>
  );
};

export default Products;

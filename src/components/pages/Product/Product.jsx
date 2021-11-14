import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const params = useParams();

  console.log(params.id);

  return (
    <div>
      <h1>Product detail</h1>
      <p>{params.id}</p>
    </div>
  );
};

export default Product;

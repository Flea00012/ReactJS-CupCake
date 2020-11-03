import React from 'react';

import cupcake from '../Images/cupcakes/...';

export default function ReadImags() {
  return (
    <div>
      <h3> Image Name </h3>
      <img
        src={cupcake}
        alt="birthday cupcake"
        border-radius="50%"
        height="300px"
        width="300px"
      />
      <p>Price of the cupcake</p>
    </div>
  );
}

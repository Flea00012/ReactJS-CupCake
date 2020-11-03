import React from 'react';

import cupcake from '../Images/cupcakes/ccBirthday.j';

export default function SingleElement() {
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

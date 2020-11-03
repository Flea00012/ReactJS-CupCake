import React from 'react';

import cupcake from '../Images/cupcakes/ccBirthday.jpeg';

export default function SingleElement() {
  return (
    <div>
      <img
        src={cupcake}
        alt="birthday cupcake"
        border-radius="50%"
        height="300px"
        width="300px"
      />
    </div>
  );
}

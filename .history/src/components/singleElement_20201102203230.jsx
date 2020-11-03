import React from 'react';

import cupcake from '../Images/cupcakes/ccBirthday.jpeg';

export default function SingleElement() {
  return (
    <div>

      <img
        src={cupcake}
        alt="birthday cupcake"
        height="300px"
        width="300px"
        {{border-adius="50%"}}
      />
    </div>
  );
}

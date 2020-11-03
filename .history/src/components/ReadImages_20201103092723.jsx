import React from 'react';

// import cupcake from '../Images/cupcakes/...';

// const getImages = () => {
//   cupcake.reduce((img) => img);
// };

async function findImages() {
  
  try{
  const file = await fetch('../Images/cupcakes/').then((res) => res.map((img) => img));
  //make a promise for this section
  return file;
  
}

export default function ReadImages() {
  return (
    <div>
      <h3> Image Name </h3>
      <img
        src={findImages}
        alt="birthday cupcake"
        height="500px"
        width="300px"
      />
      <p>Price of the cupcake</p>
    </div>
  );
}

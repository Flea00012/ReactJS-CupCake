import React from 'react';

// import cupcake from '../Images/cupcakes/...';

// const getImages = () => {
//   cupcake.reduce((img) => img);
// };

async function findImages() {
  try {
    let file = [];
    await fetch('../Images/cupcakes/').then(res => );

    console.log(`file is : ${file}`);
    //make a promise for this section
    return file;
  } catch (err) {
    console.log(`There was an ${err} error while fetching file`);
    throw err;
  }
}

export default function ReadImages() {
  return (
    <div>
      <h3> Image Name </h3>
      <img
        src={findImages()}
        alt="birthday cupcake"
        height="500px"
        width="300px"
      />
      <p>Price of the cupcake</p>
    </div>
  );
}

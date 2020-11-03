import React from 'react';

// import cupcake from '../Images/cupcakes/...';

// const getImages = () => {
//   cupcake.reduce((img) => img);
// };

async function findImages() {
  try {
    let file = [];
    await fetch('../Images/cupcakes/ccBran.jpeg').then((res) => file=res.url);

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
      {findImages()}
        
      <p>Price of the cupcake</p>
    </div>
  );
}

import React, { useState } from 'react';


// function CakeCupCake(){

//     const [count, setCount] = useState(0);

//     return(){
//         <div>
//         <h1> {count}</h1>
        
        
//         </div>


//     };
// };

// export default CakeCupCake;

class App extends React.Component {

    constructor(){

        
    }

    jump(){

    }
    
    state = { name: 'lee' }
    render() { 
        return ( 

            <h1>{this.name}</h1>


         );
    }
}
 
export default App ;
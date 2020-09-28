import React, { useState } from 'react'

// class CounterExample extends React.Component{
    
//     render(){
//         const [count,setCount]=useState(0);
//         return(
           
//         <div>{count}
//        
//             </div>
//         );

//     }

// }

function CounterExample()
{
    const [count,setCount]=useState(0);
           return(
               
           <div>{count}
           <h1 onClick={()=>setCount(count+1)}>Plus</h1>
           <h1 onClick={()=>setCount(count-1)}>Minus</h1>
            </div>
           );
}
export default CounterExample
import React, {useState} from 'react';

const Counter = ({initialCount}) => {

  console.log('Render Counter');
  
  const [count, setCount] = useState(initialCount);
 
  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount - 1)}> - </button>
      <span>{count}</span>
      <button onClick={() => setCount(prevCount => prevCount + 1)}> + </button>
    </div>
  )    
}

export default Counter;
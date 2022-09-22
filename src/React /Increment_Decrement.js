import React, { useState } from "react";

const Increment_Decrement = ()=> {

  const [count, setCount] = useState(0);

  const countManagement = (sign) => {
    let val = count + (sign?1:-1);
    if(val<0)
      return;
    setCount(val);
  };

  return (
    <div style={{ justifyContent:'center',display:'flex',marginTop:'300px'}}>
      <button style={{color:"red"}} onClick={()=>countManagement(0)}>-</button>

      &nbsp;
      &nbsp;
      &nbsp;

      {count}
      
      &nbsp;
      &nbsp;
      &nbsp;
    
     <button style={{color:"green"}} onClick={()=>countManagement(1)}>+</button>
    </div>
  );
}

export default Increment_Decrement;


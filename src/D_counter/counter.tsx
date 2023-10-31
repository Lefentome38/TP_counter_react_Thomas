import { useCallback, useState } from "react";

function Counter() {

    const [nbr, setNbr] = useState(0);
   
    const counterPlus = useCallback(
        () => setNbr(nbr + 1),
    [nbr]
    ); 

    return (
      <>
        <div className="div_counter">
            <p>{nbr}</p>
            <button onClick={counterPlus}>+</button>
        </div>
      </>
    )
  }
  
  export default Counter  
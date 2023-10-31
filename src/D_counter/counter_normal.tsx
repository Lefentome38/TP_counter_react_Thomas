import { useCallback, useState } from "react";

const Counter_normal = (props: { name: string, cpt: number}) => {
    const [nbr, setNbr] = useState(0);

    const counterPlus = useCallback(
        () => setNbr(nbr + 1),
    [nbr]
    );

    return (
      <>
        <div className="div_counter">
            <p>{props.name}</p>
            <p>{nbr + props.cpt}</p>
            <button onClick={counterPlus}>+</button>
        </div>
      </>
    )
  }
  
  export default Counter_normal  
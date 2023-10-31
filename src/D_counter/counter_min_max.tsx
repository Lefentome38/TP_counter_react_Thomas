import { useCallback, useMemo, useState } from "react";

const Counter_min_max = (props: { name: string, cpt: number}) => {
    const [nbr, setNbr] = useState(0);

    const counterPlus = useCallback(
        () => setNbr(nbr + 1),
    [nbr]
    );

    const Max = useMemo(
      () => {
        if (nbr + props.cpt < 10) {
          return (nbr + props.cpt)
        } 
        else{
          return 10
        }},
      [nbr, props.cpt]
    )

    return (
      <>
        <div className="div_counter">
            <p>{props.name}</p>
            <p>{Max}</p>
            <button onClick={counterPlus}>+</button>
        </div>
      </>
    )
  }
  
  export default Counter_min_max
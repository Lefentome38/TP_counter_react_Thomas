import { useCallback, useState } from "react"
import Counter_normal from "./D_counter/counter_normal"
import Counter_min_max from "./D_counter/counter_min_max";

function App() {

  const [P_nbr, setP_nbr] = useState(0)
  const [P_nbr_min_max, setP_nbr_min_max] = useState(0)

  const counter_normal = useCallback(
    () => setP_nbr(P_nbr + 1),
    [P_nbr]
  );

  const counter_Min_Max = useCallback(
    () => setP_nbr_min_max(P_nbr_min_max + 1),
    [P_nbr_min_max]
  );

  return (
    <>
     <div className="div_exo_normal">
        <h1>Counters normal</h1>
        <div className="body_counter">
          <Counter_normal name="toto" cpt={P_nbr}/>
          <Counter_normal name="Thomas" cpt={P_nbr}/>
        </div>
        <div className="div_button">
          <button onClick={counter_normal}>+</button>
        </div>
      </div>

      <div className="div_exo_min_et_max">
        <h1>Counters min et max</h1>
        <div className="body_counter">
          <Counter_min_max name="Logane" cpt={P_nbr_min_max}/>
          <Counter_min_max name="Hakira" cpt={P_nbr_min_max}/>
        </div>
        <div className="div_button">
          <button onClick={counter_Min_Max}>+</button>
        </div>
      </div>
    </>
  )
}

export default App

import { useCallback, useState } from "react"
import Counter_normal from "./D_counter/counter_normal"
import Counter_min_max from "./D_counter/counter_min_max";
import Counter_exo5 from "./D_counter/Counter_exoCinq";

function App() {

  const [P_cpt1_exo5,setP_cpt1_exo5] = useState(0)
  const [P_cpt2_exo5,setP_cpt2_exo5] = useState(0)

  const [P_nbr, setP_nbr] = useState(0)
  const [P_nbr_min_max, setP_nbr_min_max] = useState(0)

  const counter_exo5 = useCallback(
    () => {
      setP_cpt1_exo5(P_cpt1_exo5 + 1)
      setP_cpt2_exo5(P_cpt2_exo5 + 1)

      console.log("numberchange cpt1" ,P_cpt2_exo5 + 1);
      console.log("numberchange cpt2" ,P_cpt2_exo5 + 1);
    },
    [P_cpt1_exo5, P_cpt2_exo5]
    );

    const numberchange = () => {
      console.log("numberchange counter_1" ,P_cpt1_exo5 + 1);
      setP_cpt1_exo5(P_cpt1_exo5 + 1)
    }

    const numberchange2 = () => {
      console.log("numberchange counter_2" ,P_cpt2_exo5 + 1);
      setP_cpt2_exo5(P_cpt2_exo5 + 1)
    }

    const numberchangeMoins = () => {
      console.log("numberchangeMoins counter_1" ,P_cpt1_exo5 - 1);
      setP_cpt1_exo5(P_cpt1_exo5 - 1)
    }

    const numberchangeMoins2 = () => {
      console.log("numberchange counter_2" ,P_cpt2_exo5 - 1);
      setP_cpt2_exo5(P_cpt2_exo5 - 1)
    }

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
      <div className="div_counter_exo5">
        <h1>Counter exo5 parent</h1>
        <div className="body_counter">
          <Counter_exo5 cpt_value={P_cpt1_exo5} onIncrement={numberchange}/>
          <Counter_exo5 cpt_value={P_cpt2_exo5} onIncrement={numberchange2}/>
        </div>
        <div className="div_button">
          <button onClick={counter_exo5}>+</button>
          <p>parent: cpt1-{P_cpt1_exo5} cpt-2 {P_cpt2_exo5}</p>
        </div>
      </div>

     <div className="div_exo_normal">
        <h1>Counters normal enfant</h1>
        <div className="body_counter">
          <Counter_normal name="toto" cpt={P_nbr}/>
          <Counter_normal name="Thomas" cpt={P_nbr}/>
        </div>
        <div className="div_button">
          <button onClick={counter_normal}>+</button>
        </div>
      </div>

      <div className="div_exo_min_et_max">
        <h1>Counters min et max(10) enfant</h1>
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

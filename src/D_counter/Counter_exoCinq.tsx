const Counter_exo5 = (props: {cpt_value:number, onIncrement:()=> void}) => {

    return (
      <>
        <div className="counter">
            <p>...</p>
            <p>{props.cpt_value}</p>
            <button onClick={props.onIncrement}>+</button>
        </div>
      </>
    )
  }
  export default Counter_exo5  
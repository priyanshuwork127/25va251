import React,{ useState } from "react";

function App(){

  let [count,setCount]=useState(0);
  function Increament(){

    setCount(count+1);
  }
  function  Decreament(){

    setCount(count-1);
  }
  function Reset(){

    setCount(0);
  }

  return(
    <>
    <h1>Counter</h1>
    <h3>Count:{count}</h3>

    <button onClick={Increament}>Increament</button>
    <button onClick={Decreament}>Decreament</button>
    <button onClick={Reset}>Reset</button>
    </>
  )
}

export default App;
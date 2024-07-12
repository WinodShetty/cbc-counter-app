import React, { useState } from "react";

function CounterApp(){

    const[counter, setCounter] = useState(0)

    const incriment = () => setCounter((prevState) => prevState + 1 );
    const decriment = () => setCounter((prevState) => prevState - 1 );

        

    
    return(
        <div>
            <h1>Counter App</h1>
            <h6>Count: {counter}</h6>
            <button onClick={incriment}>Increment</button>
            <button onClick={decriment}>Decrement</button>
        </div>
    )
}

export default CounterApp;
import { useState } from "react";

const Clicker = () => {
    const [counter, setCounter] = useState(0)
    const [incrementValue, setIncrementValue] = useState(1)

    const handleInput = (e) => {
        setIncrementValue(e.target.value)
    }

    const handleClick = () => {
        setCounter(counter + +incrementValue)
    }

    return <div>
        <input type="number" value={incrementValue} onChange={handleInput} />
        <span>{counter}</span>
        <button onClick = {handleClick}>Click me</button>
    </div>
}

export default Clicker
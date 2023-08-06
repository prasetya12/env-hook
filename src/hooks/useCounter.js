import { useState } from "react"

const useCounter = (initialValue, valueInc) => {
    const [counter, setCounter] = useState(initialValue)

    const increment = () => {
        setCounter(counter + valueInc)
    }

    const decrement = () => {
        setCounter(counter - valueInc)

    }

    return {
        counter,
        increment,
        decrement
    }

}

export default useCounter
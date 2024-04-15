import { useState } from "react";

function useCounter(initialvalue: number, maxCount: number, minCount: number) {
    const [count, setCount] = useState<number>(initialvalue) // state to keep track of Count


    // function to increment/decrement count
    const increment = () => {
        if (count < maxCount) {
            setCount(count + 1)

        } else {
            alert("Max value achieved")
        }
    }

    const decrement = () => {
        if (count > minCount) {
            setCount(count - 1)
        } else {
            alert("Min value achieved")
        }

    }
    const reset = () => setCount(initialvalue)




    // Returns count and increment function
    return { count, setCount, increment, decrement, reset, maxCount, minCount }
}
export default useCounter;
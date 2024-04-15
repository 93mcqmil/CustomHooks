import { useState } from "react";

function useCounter(initialvalue: number, maxCount: number, minCount: number) {
    const [count, setCount] = useState<number>(initialvalue) // state to track count
    const [isEven, setIsEven] = useState(initialvalue % 2 === 0)




    // function to increment no further than MAX
    const increment = () => {
        if (count < maxCount) {
            setCount(count => count + 1)
            setIsEven((count + 1) % 2 === 0)

        } else {
            alert("Max value achieved")
        }
    }

    // function to decrement no further than MIN
    const decrement = () => {
        if (count > minCount) {
            setCount(count => count - 1)
            setIsEven((count - 1) % 2 === 0)
        } else {
            alert("Min value achieved")
        }

    }

    const add10 = () => {
        if (count > maxCount) {
            setCount(count + 10)

        } else {
            alert("Max value achieved")
        }

    }

    const min10 = () => {
        if (count < minCount) {
            setCount(count - 10)


        } else {
            alert("Min value achieved")
        }
    }
    const reset = () => setCount(initialvalue)




    // Returns count and increment function
    return { count, isEven, setCount, increment, add10, min10, decrement, reset, maxCount, minCount }
}
export default useCounter;
import { useState } from "react";

export type CounterTypes = {
    [key: string]: number;
}
function useCounter(initialValue: number, maxCount: number, minCount: number, step: number,) {
    const [count, setCount] = useState<number>(initialValue) // state to track count
    const [isEven, setIsEven] = useState(initialValue % 2 === 0)




    // function to increment no further than MAX
    const increment = () => {
        if (count < maxCount) {
            setCount(count => count + 1)
            setIsEven((count + 1) % 2 === 0)

        } else {
            alert("Max value achieved")
        }
    }

    // function to decrement no further than minimum
    const decrement = () => {
        if (count > minCount) {
            setCount(count => count - 1)
            setIsEven((count - 1) % 2 === 0)
        } else {
            alert("Min value achieved")
        }

    }
    //Step10 function
    const add10 = () => {
        if (count + 10 <= maxCount) {
            setCount(count + 10)

        } else {
            alert("Max value achieved")
        }

    }
    // Minus 10 function
    const minus10 = () => {
        if (count - 10 >= minCount) {
            setCount(count - 10)



        } else {
            alert("Min value achieved")
        }
    }
    const reset = () => setCount(initialValue)




    // Returns count and increment function and everything on here i'd like to use
    return { count, isEven, add10, minus10, setCount, increment, decrement, reset, maxCount, minCount }
}
export default useCounter;
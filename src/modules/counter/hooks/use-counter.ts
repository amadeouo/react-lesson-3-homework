import { useState } from 'react'

const useCounter = (initialValue: number = 0) => {
    const [count, setCount] = useState<number>(initialValue)

    return {
        count: count,
        increment: () => setCount(prev => prev + 1),
        decrement: () => setCount(prev => prev - 1),
        reset: () => setCount(initialValue),
    }
}

export default useCounter
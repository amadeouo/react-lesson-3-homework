import { useContext } from 'react'
import { CounterContext } from '../contexts/counter-context.tsx'

export const useCounterContext = () => {
    const context = useContext(CounterContext)

    if (!context) {
        throw new Error('useCounterContext must be used within CounterContext')
    }

    return context
}


import { createContext } from 'react'

export type CounterContextType = {
    counter: number
    incrementContext?: () => void
    decrementContext?: () => void
    resetContext?: () => void
}

export const CounterContext = createContext<CounterContextType | undefined>(undefined)
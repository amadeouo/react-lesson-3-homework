import { createContext } from 'react'

export type CounterContextType = {
    counter: number
    increment?: () => void
    decrement?: () => void
    reset?: () => void
}

export const CounterContext = createContext<CounterContextType | undefined>(undefined)
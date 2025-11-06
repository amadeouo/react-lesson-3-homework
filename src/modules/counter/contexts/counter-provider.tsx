import { type ReactNode, useState } from 'react'
import { CounterContext } from './counter-context.tsx'

export type CounterProviderProps = {
    children: ReactNode
}

export const CounterProvider = (props: CounterProviderProps) => {
    const {
        children,
    } = props
    
    const [counter, setCounter] = useState<number>(0)

    const increment = () => {
        setCounter(prev => prev++)
    }

    const decrement = () => {
        setCounter(prev => prev--)
    }

    const reset = () => {
        setCounter(0)
    }

    return (
        <CounterContext.Provider value={{ counter, increment, decrement, reset }}>
            {children}
        </CounterContext.Provider>
    )
}
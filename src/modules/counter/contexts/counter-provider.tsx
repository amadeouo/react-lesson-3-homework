import { type ReactNode } from 'react'
import { CounterContext } from './counter-context.tsx'
import { useLocalStorage } from '../../../shared/hooks/use-local-storage.ts'

export type CounterProviderProps = {
    children: ReactNode
}

export const CounterProvider = (props: CounterProviderProps) => {
    const {
        children,
    } = props
    
    const [counter, setCounter] = useLocalStorage<number>('counter-context', 0)

    const incrementContext = () => {
        setCounter(prev => prev + 1)
    }

    const decrementContext = () => {
        setCounter(prev => prev - 1)
    }

    const resetContext = () => {
        setCounter(0)
    }

    return (
        <CounterContext.Provider value={{ counter, incrementContext, decrementContext, resetContext }}>
            {children}
        </CounterContext.Provider>
    )
}
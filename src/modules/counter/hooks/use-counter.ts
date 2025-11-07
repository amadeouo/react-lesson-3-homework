import { useLocalStorage } from '../../../shared/hooks/use-local-storage.ts'

export const useCounter = (initialValue: number = 0, id: string | number) => {
    const [count, setCount] = useLocalStorage<number>(`counter-hook-${id}}`, initialValue)

    return {
        count: count,
        increment: () => setCount(prev => prev + 1),
        decrement: () => setCount(prev => prev - 1),
        reset: () => setCount(initialValue),
    }
}
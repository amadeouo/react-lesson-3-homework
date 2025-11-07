import classes from './counter-with-hook.module.css'
import { Button } from '../../../../components/Button'
import { useCounter } from '../../hooks/use-counter.ts'

type CounterWithHookProps = {
    idCounter: string | number
}

export const CounterWithHook = (props: CounterWithHookProps) => {
    const {
        idCounter
    } = props

    const {count, increment, decrement, reset} = useCounter(0, idCounter)

    return (
        <div className={classes.wrapper}>
            <Button onClick={decrement}>-</Button>
            <span className={classes.count}>{count}</span>
            <Button onClick={increment}>+</Button>
            <Button
                className={classes.reset}
                onClick={reset}
            >
                reset
            </Button>
        </div>
    )
}
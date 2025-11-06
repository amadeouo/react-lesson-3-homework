import classes from './counter-with-context.module.css'
import Button from '../../../../components/Button/Button.tsx'
import { useCounterContext } from '../../hooks/use-counter-context.ts' // это можно пофиксить элиасами я знаю, чуть позже разберусь с этим

export const CounterWithContext = () => {
    const [counter, increment, decrement, reset] = useCounterContext()

    return (
        <div className={classes.wrapper}>
            <Button onClick={decrement}>-</Button>
            <span className={classes.count}>{counter}</span>
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
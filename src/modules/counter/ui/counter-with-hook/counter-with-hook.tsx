import useCounter from '../../hooks/use-counter.ts'
import classes from './counter-with-hook.module.css'
import Button from '../../../../components/Button/Button.tsx' // это можно пофиксить алиасами я знаю, чуть позже разберусь с этим

export const CounterWithHook = () => {
    const {count, increment, decrement, reset} = useCounter(0)

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
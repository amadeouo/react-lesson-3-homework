import classes from './counter-with-context.module.css'
import { Button } from '../../../../components/Button'
import { useCounterContext } from '../../hooks/use-counter-context'

export const CounterWithContext = () => {
    const { counter, incrementContext, decrementContext, resetContext } = useCounterContext()

    return (
        <div className={classes.wrapper}>
            <Button
                onClick={decrementContext}
                contextButton
            >
                -
            </Button>
            <span className={classes.count}>{counter}</span>
            <Button
                onClick={incrementContext}
                contextButton
            >
                +
            </Button>
            <Button
                className={classes.reset}
                onClick={resetContext}
                contextButton
            >
                reset
            </Button>
        </div>
    )
}
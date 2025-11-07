import classNames from 'classnames'
import classes from './Button.module.css'

export type ButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    contextButton?: boolean
}

export const Button = (props: ButtonProps) => {
    const {
        children,
        onClick,
        className,
        contextButton,
    } = props

    return (
        <button
            className={classNames(
                className,
                classes.button,
                contextButton ? classes.contextButton : undefined
            )}
            onClick={onClick}
            type="button"
        >
            {children}
        </button>
    )
}
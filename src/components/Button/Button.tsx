import classNames from 'classnames'
import classes from './Button.module.css'

export type ButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const Button = (props: ButtonProps) => {
    const {
        children,
        onClick,
        className,
    } = props

    return (
        <button
            className={classNames(className, classes.button)}
            onClick={onClick}
            type="button"
        >
            {children}
        </button>
    )
}
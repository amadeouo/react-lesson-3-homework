import { useTheme } from '../../hooks/use-theme'
import styles from './theme-toggle.module.css'
import { Button } from '../../../../components/Button'

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button className={styles.toggle} onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'} Переключить тему
        </Button>
    )
}


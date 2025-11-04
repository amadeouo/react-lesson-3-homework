import { useTheme } from '../../hooks/use-theme'
import styles from './theme-toggle.module.css'

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button className={styles.toggle} onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'} Переключить тему
        </button>
    )
}


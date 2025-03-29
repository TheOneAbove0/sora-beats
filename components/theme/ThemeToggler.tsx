"use client"

import { useThemeStore } from '@/store/theme-store'

import styles from './ThemeToggler.module.scss'
import Icon from '../ui/Icon'

const ThemeToggler = () => {
    const darkMode = useThemeStore((state) => state.darkMode)
    const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode)

    return <div className={styles.wrapper} onClick={toggleDarkMode}>
        <Icon icon={`${darkMode ? "sun" : "moon"}`} />
    </div>
}

export default ThemeToggler;
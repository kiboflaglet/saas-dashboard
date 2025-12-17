import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../../hooks/useTheme'

const ToggleTheme = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <button className='cursor-pointer' onClick={toggleTheme}>
            {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
    )
}

export default ToggleTheme

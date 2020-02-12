import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue)

    useEffect(() => {
        if (darkMode === true) {
            const body = document.querySelector('body');
            body.classList.add('dark-mode');
        }
        else {
            const body = document.querySelector('body');
            body.classList.remove('dark-mode');
        }
    }, [darkMode])

    return [darkMode, setDarkMode];
}
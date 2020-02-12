import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (JSON.parse(window.localStorage.getItem(key))) {
            return JSON.parse(window.localStorage.getItem(key))
        }
        else {
            return initialValue
        }
    })

    const setValue = (value) => {
        setStoredValue(value)
        return window.localStorage.setItem(key, JSON.stringify(value))
    }
    
    return [storedValue, setValue];
}
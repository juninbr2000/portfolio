import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = 'dark' | 'light';

interface ThemeContextProps {
    theme: Theme,
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: "dark",
    toggleTheme: () =>{}
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        if(typeof window !== 'undefined'){
            return (localStorage.getItem('theme') as Theme) || 'dark'
        }
        return 'dark'
    })

    useEffect(() => {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
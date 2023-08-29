import { useContext } from 'react';
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY, type ThemeType } from './ThemeContext';

interface useThemeResult {
    theme: ThemeType;
    toggleTheme: () => void;
}

export function useTheme(): useThemeResult {
    const { setTheme, theme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: ThemeType;

        switch (theme) {
            case Theme.LIGHT:
                newTheme = Theme.DARK;
                break;
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            default:
                newTheme = Theme.LIGHT;
                break;
        }

        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme
    };
}

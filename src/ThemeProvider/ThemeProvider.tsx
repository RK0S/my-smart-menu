import { PropsWithChildren, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeType } from "./ThemeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType || Theme.LIGHT

export const ThemeProvider = ({children}: PropsWithChildren) => {
    const [theme, setTheme] = useState<ThemeType>(defaultTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
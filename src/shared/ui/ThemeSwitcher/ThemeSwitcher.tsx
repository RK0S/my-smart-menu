import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ThemeIcon from 'shared/assets/icons/ThemeSwitcher.svg';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const { toggleTheme } = useTheme();

    return (
        <div onClick={toggleTheme} role='button' className={classNames(cls.themeSwitcher, {}, [className])}>
            <ThemeIcon />
        </div>
    );
});
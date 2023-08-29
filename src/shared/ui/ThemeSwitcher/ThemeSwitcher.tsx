import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ThemeIcon from 'shared/assets/icons/ThemeSwitcher.svg';
import { useTheme } from 'app/providers/ThemeProvider';
import { Button } from '../Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const { toggleTheme } = useTheme();

    return (
        <Button onClick={toggleTheme} role="button" className={classNames(cls.themeSwitcher, {}, [className])}>
            <ThemeIcon />
        </Button>
    );
});

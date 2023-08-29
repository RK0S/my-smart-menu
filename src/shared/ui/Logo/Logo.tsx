import { memo } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Logo.module.scss';

interface LogoProps {
    className?: string;
}

export const Logo = memo((props: LogoProps) => {
    const { className } = props;

    return (
        <Link to="/" className={classNames(cls.logo, {}, [className])}>
            MY_SMART_MENU
        </Link>
    );
});

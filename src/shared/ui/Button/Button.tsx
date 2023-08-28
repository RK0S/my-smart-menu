import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    onClick: () => void;
    children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const { className, onClick, children } = props;

    return (
        <button onClick={onClick} className={classNames(cls.button, {}, [className])}>
            {children}
        </button>
    );
});
import { memo, type ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

type AppLinkSize = 'small' | 'medium' | 'large';

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    to: string;
    size?: AppLinkSize;
    lineBottom?: boolean;
}

export const AppLink = memo((props: AppLinkProps) => {
    const { className, children, to, size = 'medium', lineBottom = false } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, { [cls['line-bottom']]: lineBottom }, [
                className,
                cls[size]
            ])}
        >
            {children}
        </Link>
    );
});

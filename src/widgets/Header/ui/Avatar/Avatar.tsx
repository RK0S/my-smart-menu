import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Icon from 'shared/assets/icons/Avatar.svg';
import cls from './Avatar.module.scss';

export const Avatar = memo(() => {
    return (
        <div className={classNames(cls.avatar)}>
            <Icon />
        </div>
    );
});
import { classNames } from 'shared/lib/classNames/classNames';
import { Logo } from 'shared/ui/Logo/Logo';
import { Avatar } from '../Avatar/Avatar';
import { Nav } from '../Nav/Nav';
import { Utils } from '../Utils/Utils';
import cls from './Header.module.scss';


export const Header = () => {

    return (
        <header className={classNames(cls.header, {}, [])}>
            <Logo />
            <Nav />
            <div className={cls['right-side']}>
                <Utils className={cls.utils} />
                <Avatar />
            </div>
        </header>
    );
};


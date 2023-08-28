import { RoutePaths } from 'app/providers/Router';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Nav.module.scss';

export const Nav = () => {

    return (
        <nav>
            <ul className={classNames(cls.nav)}>
                <li>
                    <AppLink to={RoutePaths.MAIN} size='large' lineBottom={true}>Главная</AppLink>
                </li>
                <li>
                    <AppLink to={RoutePaths.ARTICLES} size='large' lineBottom={true}>Статьи</AppLink>
                </li>
                <li>
                    <AppLink to={RoutePaths.ABOUT} size='large' lineBottom={true}>О сайте</AppLink>
                </li>
                <li>
                    <AppLink to={RoutePaths.PROFILE} size='large' lineBottom={true}>Профиль</AppLink>
                </li>
            </ul>
        </nav>
    );
};
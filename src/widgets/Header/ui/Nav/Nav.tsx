import { RoutePaths } from 'app/providers/Router';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Nav.module.scss';

export const Nav = () => {
    const { t } = useTranslation()
    return (
        <nav>
            <ul className={classNames(cls.nav)}>
                <li>
                    <AppLink to={RoutePaths.MAIN} size='large' lineBottom={true}>{t('Home')}</AppLink>
                </li>
                <li>
                    <AppLink to={RoutePaths.ARTICLES} size='large' lineBottom={true}>{t('Articles')}</AppLink>
                </li>
                <li>
                    <AppLink to={RoutePaths.ABOUT} size='large' lineBottom={true}>{t('About')}</AppLink>
                </li>
                <li>
                    <AppLink to={RoutePaths.PROFILE} size='large' lineBottom={true}>{t('Profile')}</AppLink>
                </li>
            </ul>
        </nav>
    );
};
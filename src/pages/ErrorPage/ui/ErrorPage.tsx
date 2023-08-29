import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ErrorPage.module.scss';

export const ErrorPage = memo(() => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.errorPage, {}, [])}>
            <h2>{t('Something went wrong')}</h2>
        </div>
    );
});

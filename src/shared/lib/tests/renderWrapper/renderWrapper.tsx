import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import i18nForTests from '../i18n/i18nForTests';

export const renderWrapper = (component: ReactNode, routes?: string[]) => {
    return render(
        <I18nextProvider i18n={i18nForTests}>
            <MemoryRouter initialEntries={routes}>
                {component}
            </MemoryRouter>
        </I18nextProvider>
    );
};

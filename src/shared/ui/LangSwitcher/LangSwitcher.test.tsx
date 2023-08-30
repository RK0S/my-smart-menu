import { fireEvent, screen } from '@testing-library/react';
import { renderWrapper } from 'shared/lib/tests/renderWrapper/renderWrapper';
import { LangSwitcher } from './LangSwitcher';

describe('LangSwitcher.test', () => {
    test('render', () => {
        renderWrapper(<LangSwitcher />);
        expect(screen.getByTestId('LangSwitcher')).toBeInTheDocument();
    });

    test('change language', () => {
        renderWrapper(<LangSwitcher />);
        const langButton = screen.getByTestId('LangSwitcher');
        expect(screen.getByText('RU')).toBeInTheDocument();
        fireEvent.click(langButton);
        expect(screen.getByText('EN')).toBeInTheDocument();
        fireEvent.click(langButton);
        expect(screen.getByText('RU')).toBeInTheDocument();
    });
});

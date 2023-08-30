import { screen } from '@testing-library/react';
import { renderWrapper } from 'shared/lib/tests/renderWrapper/renderWrapper';
import { AppLink } from './AppLink';

describe('AppLink.test', () => {
    test('render', () => {
        renderWrapper(<AppLink to="/">Test</AppLink>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('add class', () => {
        renderWrapper(<AppLink size="large" to="/">Test</AppLink>);
        expect(screen.getByText('Test')).toHaveClass('large');
    });
});

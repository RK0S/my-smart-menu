import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: ['app', Theme.LIGHT], color: '#FFFFFF' },
                { name: 'dark', class: ['app', Theme.DARK], color: '#000000' }
            ]
        }
    },
    decorators: [StyleDecorator, RouterDecorator]
};

export default preview;

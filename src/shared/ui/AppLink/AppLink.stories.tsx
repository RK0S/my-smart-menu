import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
    component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Default: Story = {
    args: {
        children: 'AppLink',
        to: '/'
    }
};

export const Small: Story = {
    args: {
        children: 'AppLink',
        to: '/',
        size: 'small'
    }
};

export const Large: Story = {
    args: {
        children: 'AppLink',
        to: '/',
        size: 'large'
    }
};

export const WithBottomLine: Story = {
    args: {
        children: 'AppLink',
        to: '/',
        lineBottom: true
    }
};

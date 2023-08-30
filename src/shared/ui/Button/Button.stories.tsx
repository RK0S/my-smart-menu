import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Button',
        onClick: () => ({}),
    }
};

export const Filled: Story = {
    args: {
        children: 'Button',
        onClick: () => ({}),
        variant: 'filled'
    }
};

export const Outlined: Story = {
    args: {
        children: 'Button',
        onClick: () => ({}),
        variant: 'outlined'
    }
};

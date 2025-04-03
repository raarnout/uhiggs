import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'radio' },
      options: ['primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'link'
      ]
    },
    size: {
      control: { type: 'radio' },
      options: [undefined, 'sm', 'lg'], 
      labels: {
        sm: 'Small',
        undefined: 'default',
        lg: 'Large'
      }
    },
    outline: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    square: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    pill: {
      control: { type: 'boolean' },
      defaultValue: false,
    }
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Btn: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    outline: false,
    square: false,
    pill: false
  },
};


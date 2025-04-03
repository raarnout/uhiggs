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
      defaultValue: 'md',
      options: ['sm', 'md', 'lg'], 
      labels: {
        sm: 'Small',
        md: 'Medium',
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
    },
    shadow: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    block: {
      control: { type: 'boolean' },
      defaultValue: false,
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Deze knop toont een icoon aan het begin én aan het einde van de knoptekst.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const button: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    outline: false,
    disabled: false,
    square: false,
    pill: false,
    shadow: false,
    block: false,
    iconStart: 'cloud-download',
    iconEnd: 'arrow-right',
  },
};


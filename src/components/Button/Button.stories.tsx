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
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'link',
      ],
    },
    size: {
      control: { type: 'radio' },
      defaultValue: 'md',
      options: ['sm', 'md', 'lg'],
      labels: {
        sm: 'Small',
        md: 'Medium',
        lg: 'Large',
      },
    },
    outline: {
      control: { type: 'boolean' }
    },
    square: {
      control: { type: 'boolean' }
    },
    pill: {
      control: { type: 'boolean' }
    },
    shadow: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    block: {
      control: { type: 'boolean' }
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    outline: false,
    disabled: false,
    square: false,
    pill: false,
    shadow: false,
    block: false,
    iconStart: '',
    iconEnd: '',
    className: '',
  },
};

export const ButtonSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'block',
      }}
    >
      <Button size="sm" className="m-2">
        Small
      </Button>
      <Button className="m-2">
        Normal
      </Button>
      <Button size="lg" className="m-2">
        Large
      </Button>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const ButtonVariants: Story = {
  render: () => (
    <div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button variant="primary" disabled={true}>
          Primary
        </Button>
        <Button variant="secondary" disabled={true}>
          Secondary
        </Button>
        <Button variant="success" disabled={true}>
          Success
        </Button>
        <Button variant="danger" disabled={true}>
          Danger
        </Button>
        <Button variant="warning" disabled={true}>
          Warning
        </Button>
        <Button variant="info" disabled={true}>
          Info
        </Button>
        <Button variant="light" disabled={true}>
          Light
        </Button>
        <Button variant="dark" disabled={true}>
          Dark
        </Button>
        <Button variant="link" disabled={true}>
          Link
        </Button>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const OutlineButtons: Story = {
  render: () => (
    <div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <Button variant="primary" outline={true}>
          Primary
        </Button>
        <Button variant="secondary" outline={true}>
          Secondary
        </Button>
        <Button variant="success" outline={true}>
          Success
        </Button>
        <Button variant="danger" outline={true}>
          Danger
        </Button>
        <Button variant="warning" outline={true}>
          Warning
        </Button>
        <Button variant="info" outline={true}>
          Info
        </Button>
        <Button variant="light" outline={true}>
          Light
        </Button>
        <Button variant="dark" outline={true}>
          Dark
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button variant="primary" outline={true} disabled={true}>
          Primary
        </Button>
        <Button variant="secondary" outline={true} disabled={true}>
          Secondary
        </Button>
        <Button variant="success" outline={true} disabled={true}>
          Success
        </Button>
        <Button variant="danger" outline={true} disabled={true}>
          Danger
        </Button>
        <Button variant="warning" outline={true} disabled={true}>
          Warning
        </Button>
        <Button variant="info" outline={true} disabled={true}>
          Info
        </Button>
        <Button variant="light" outline={true} disabled={true}>
          Light
        </Button>
        <Button variant="dark" outline={true} disabled={true}>
          Dark
        </Button>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const PillButtons: Story = {
  render: () => (
    <div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <Button variant="primary" pill={true}>
          Primary
        </Button>
        <Button variant="secondary" pill={true}>
          Secondary
        </Button>
        <Button variant="success" pill={true}>
          Success
        </Button>
        <Button variant="danger" pill={true}>
          Danger
        </Button>
        <Button variant="warning" pill={true}>
          Warning
        </Button>
        <Button variant="info" pill={true}>
          Info
        </Button>
        <Button variant="light" pill={true}>
          Light
        </Button>
        <Button variant="dark" pill={true}>
          Dark
        </Button>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const SquareButtons: Story = {
  render: () => (
    <div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <Button variant="primary" square={true}>
          Primary
        </Button>
        <Button variant="secondary" square={true}>
          Secondary
        </Button>
        <Button variant="success" square={true}>
          Success
        </Button>
        <Button variant="danger" square={true}>
          Danger
        </Button>
        <Button variant="warning" square={true}>
          Warning
        </Button>
        <Button variant="info" square={true}>
          Info
        </Button>
        <Button variant="light" square={true}>
          Light
        </Button>
        <Button variant="dark" square={true}>
          Dark
        </Button>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const ShadowedButtons: Story = {
  render: () => (
    <div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <Button variant="primary" shadow={true}>
          Primary
        </Button>
        <Button variant="secondary" shadow={true}>
          Secondary
        </Button>
        <Button variant="success" shadow={true}>
          Success
        </Button>
        <Button variant="danger" shadow={true}>
          Danger
        </Button>
        <Button variant="warning" shadow={true}>
          Warning
        </Button>
        <Button variant="info" shadow={true}>
          Info
        </Button>
        <Button variant="light" shadow={true}>
          Light
        </Button>
        <Button variant="dark" shadow={true}>
          Dark
        </Button>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const BlockButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary" block={true}>
        Primary
      </Button>
      <Button variant="secondary" block={true}>
        Secondary
      </Button>
      <Button variant="success" block={true}>
        Success
      </Button>
      <Button variant="danger" block={true}>
        Danger
      </Button>
      <Button variant="warning" block={true}>
        Warning
      </Button>
      <Button variant="info" block={true}>
        Info
      </Button>
      <Button variant="light" block={true}>
        Light
      </Button>
      <Button variant="dark" block={true}>
        Dark
      </Button>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const buttonIcon: Story = {
  args: {
    children: 'Button With Icon',
    iconStart: 'cloud-download',
    iconEnd: '',
    className: '',
  },
  render: () => (
    <div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <Button size="sm" iconStart="arrow-left">
          Left
        </Button>
        <Button size="sm" iconEnd="arrow-right">
          Right
        </Button>
        <Button size="sm" iconStart="arrow-left" iconEnd="arrow-right">
          Left and Right
        </Button>
        <Button size="sm" pill={true} iconStart="facebook"></Button>
        <Button size="sm" variant='dark' square={true} iconStart="twitter-x"></Button>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

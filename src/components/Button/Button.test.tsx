import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  test('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick handler', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(onClick).toHaveBeenCalled();
  });

  test('applies variant class', () => {
    render(<Button variant="danger">Delete</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-danger');
  });

  test('applies outline class when outline=true', () => {
    render(<Button variant="success" outline={true}>Save</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-outline-success');
  });

  test('applies size class', () => {
    render(<Button size="lg">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-lg');
  });

  test('applies square class', () => {
    render(<Button square>Square</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-square');
  });

  test('applies shadow class', () => {
    render(<Button shadow>Shadow</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-shadowed');
  });

  test('applies pill class', () => {
    render(<Button pill>Pill</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-pill');
  });

  test('renders iconStart', () => {
    render(<Button iconStart="check">OK</Button>);
    expect(document.querySelector('.bi.bi-check')).toBeInTheDocument();
  });

  test('renders iconEnd', () => {
    render(<Button iconEnd="arrow-right">Next</Button>);
    expect(document.querySelector('.bi.bi-arrow-right')).toBeInTheDocument();
  });

  test('adds block class', () => {
    render(<Button block>Full width</Button>);
    expect(screen.getByRole('button')).toHaveClass('w-100');
  });

  test('is disabled when disabled is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('applies custom className', () => {
    render(<Button className="custom-class">Styled</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });
});

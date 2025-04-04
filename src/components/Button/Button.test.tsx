import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { axe } from 'jest-axe'; 
import userEvent from '@testing-library/user-event'; 

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

describe('Button accessibility', () => {
    test('has no a11y violations (default)', async () => {
      const { container } = render(<Button>Click me</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  
    test('has no a11y violations when disabled', async () => {
      const { container } = render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  
    test('has no a11y violations when using iconStart and iconEnd', async () => {
      const { container } = render(
        <Button iconStart="check" iconEnd="arrow-right">Submit</Button>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  
    test('has no a11y violations for icon-only button with aria-label', async () => {
      const { container } = render(
        <Button iconStart="check" aria-label="Confirm action" />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  
    test('fails a11y test if icon-only button has no label', async () => {
      const { container } = render(<Button iconStart="check" />);
      const results = await axe(container);
      expect(results.violations.length).toBeGreaterThan(0);
    });
  
    test('has accessible role and is focusable', () => {
      render(<Button>Focusable</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    test('is focusable via keyboard (Tab)', async () => {
    render(
        <>
        <button>Before</button>
        <Button>Focusable</Button>
        <button>After</button>
        </>
    );

    const user = userEvent.setup();
    await user.tab(); // focus op "Before"
    await user.tab(); // focus op Button

    expect(screen.getByRole('button', { name: 'Focusable' })).toHaveFocus();
    });
});

describe('Button snapshot', ()=> {
    test('matches snapshot', () => {
        const { container } = render(
          <Button
            variant="primary"
            size="lg"
            shadow={true}
            square={true}   
            iconStart="check"
            iconEnd="arrow-right"
          >
            Snapshot Button
          </Button>
        );
      
        expect(container).toMatchSnapshot();
      });
})



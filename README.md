# UHiggs

A comprehensive React component library built on top of Bootstrap 5, providing enhanced, accessible, and fully customizable UI components.

## Overview

UHiggs extends Bootstrap 5's component library with additional features, improved accessibility, and TypeScript support. It's designed to provide a robust foundation for building modern web applications while maintaining Bootstrap's familiar design language.

## Key Features

- 🎯 **100% Test Coverage**: Every component is thoroughly tested with Jest and React Testing Library
- ♿ **Accessibility First**: WCAG 2.1 compliant components with built-in ARIA support
- 🛠 **TypeScript Support**: Full type safety and autocompletion
- 🎨 **Bootstrap 5 Integration**: Seamless integration with Bootstrap 5's design system
- 📚 **Comprehensive Documentation**: Detailed Storybook documentation with examples
- 🧪 **Quality Assurance**: Strict linting and formatting rules
- 🔍 **Accessibility Testing**: Automated a11y testing with jest-axe

## Prerequisites

Before installing UHiggs, ensure you have the following peer dependencies installed:

```bash
npm install bootstrap@^5.3.4 bootstrap-icons@^1.11.3 react@^18.0.0 react-dom@^18.0.0
```

## Installation

```bash
npm install uhiggs
```

## Usage

```jsx
import { Button } from 'uhiggs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('Clicked!')}>
      Click me
    </Button>
  );
}
```

## Development

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- `npm run build` - Build the library
- `npm run storybook` - Start Storybook documentation
- `npm run build-storybook` - Build static Storybook documentation
- `npm run format` - Format code with Prettier
- `npm test` - Run tests with coverage
- `npm run lint` - Run ESLint

### Testing

The library maintains 100% test coverage using:

- Jest for testing
- React Testing Library for component testing
- jest-axe for accessibility testing
- User Event for interaction testing

## Contributing

We welcome contributions! Please read our contributing guidelines before submitting pull requests. All components must:

- Have 100% test coverage
- Pass accessibility tests
- Include comprehensive documentation
- Follow our coding standards

## License

ISC

## Support

For support, feature requests, or bug reports, please open an issue on our GitHub repository.

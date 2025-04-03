# UHiggs Component Library

A modern, lightweight React component library designed to provide high-quality, reusable UI components for your React applications.

## Features

- 🎨 Modern and clean design
- ⚡ Lightweight and performant
- 🛠 Built with TypeScript for type safety
- 📦 Easy to install and use
- 🎯 Fully customizable
- 📱 Responsive components

## Installation

```bash
npm install uhiggs
# or
yarn add uhiggs
```

## Usage

```jsx
import { Button } from 'uhiggs';

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('Clicked!')}>
      Click me
    </Button>
  );
}
```

## Components

### Button
A versatile button component with multiple variants and states.

```jsx
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
```

## Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup
1. Clone the repository
```bash
git clone git@github.com:raarnout/uhiggs.git
cd uhiggs
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start Storybook
```bash
npm run storybook
# or
yarn storybook
```

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## License

ISC

## Support

If you encounter any issues or have questions, please file an issue on our GitHub repository.

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
    <Button variant="primary" onClick={() => console.log('clicked')}>
      Click me
    </Button>
  );
}
```

## Components

### Button

A customizable button component with Bootstrap styling.

#### Props

| Prop     | Type      | Default   | Description                                                                            |
| -------- | --------- | --------- | -------------------------------------------------------------------------------------- |
| variant  | string    | 'primary' | Button style variant (primary, secondary, success, danger, warning, info, light, dark) |
| size     | string    | -         | Button size (sm, lg)                                                                   |
| outline  | boolean   | false     | Use outline style                                                                      |
| disabled | boolean   | false     | Disable button                                                                         |
| block    | boolean   | false     | Full width button                                                                      |
| square   | boolean   | false     | Square corners                                                                         |
| pill     | boolean   | false     | Pill shaped button                                                                     |
| shadow   | boolean   | false     | Add shadow effect                                                                      |
| onClick  | function  | -         | Click handler                                                                          |
| children | ReactNode | -         | Button content                                                                         |

#### Examples

```jsx
// Basic button
<Button variant="primary">Click me</Button>

// Outline button
<Button variant="primary" outline>Click me</Button>

// Disabled button
<Button variant="primary" disabled>Click me</Button>

// Full width button
<Button variant="primary" block>Click me</Button>

// Square button
<Button variant="primary" square>Click me</Button>

// Pill button
<Button variant="primary" pill>Click me</Button>

// Button with shadow
<Button variant="primary" shadow>Click me</Button>

// Small button
<Button variant="primary" size="sm">Click me</Button>

// Large button
<Button variant="primary" size="lg">Click me</Button>
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

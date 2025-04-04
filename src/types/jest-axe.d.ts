import { AxeResults } from 'axe-core';

declare module 'jest-axe' {
  export const axe: (element: Element, options?: any) => Promise<AxeResults>;
  export const toHaveNoViolations: {
    (results: AxeResults): {
      pass: boolean;
      message: () => string;
    };
  };
}

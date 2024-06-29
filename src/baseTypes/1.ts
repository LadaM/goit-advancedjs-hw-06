// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: unknown; // undefined also can be used
type Callback = (a: number) => number;
let callback: Callback = (a) => {
  return 100 + a;
};

export {};

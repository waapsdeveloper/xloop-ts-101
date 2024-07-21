### Slide 3: Functions in TypeScript
**Title:** "Functions in TypeScript"

**Points:**

- **Function Parameter Types:**
  - **Specifying Types for Parameters:**
    ```typescript
    function add(a: number, b: number): number {
      return a + b;
    }
    ```
  - Ensures that the correct types are passed to the function, reducing runtime errors.

- **Return Type Annotations:**
  - **Defining Return Types Explicitly:**
    ```typescript
    function greet(name: string): string {
      return `Hello, ${name}!`;
    }
    ```
  - Provides clarity on what type of value a function will return.

- **Optional and Default Parameters:**
  - **Optional Parameters:**
    ```typescript
    function log(message: string, userId?: string) {
      console.log(message, userId || "Guest");
    }
    ```
  - **Default Parameters:**
    ```typescript
    function increment(value: number, step: number = 1): number {
      return value + step;
    }
    ```

- **Rest Parameters:**
  - **Handling Multiple Arguments:**
    ```typescript
    function sum(...numbers: number[]): number {
      return numbers.reduce((acc, curr) => acc + curr, 0);
    }
    ```
  - Enables functions to accept an arbitrary number of arguments, ensuring type safety for each.

- **Arrow Functions:**
  - **Short Syntax for Functions:**
    ```typescript
    const multiply = (a: number, b: number): number => a * b;
    ```
  - **Lexical `this` Binding:**
    - Arrow functions do not have their own `this` context, which can simplify code that uses callbacks.

- **Function Overloading:**
  - **Defining Multiple Function Signatures:**
    ```typescript
    function formatCommandLine(command: string): string[];
    function formatCommandLine(command: string, args: string[]): string;
    function formatCommandLine(command: string, args?: string[]): string | string[] {
      if (args) {
        return `${command} ${args.join(" ")}`;
      }
      return command.split(" ");
    }
    ```
  - Allows a function to handle different argument types and return types, enhancing flexibility and type safety.

These points provide a comprehensive overview of functions in TypeScript, emphasizing type safety, flexibility, and clarity in function definitions and usage.
### Slide 10: Modules and Namespaces in TypeScript
**Title:** "Modules and Namespaces in TypeScript"

**Points:**

- **Modules:**
  - **Definition and Purpose:**
    - Modules are used to organize code by splitting it into separate files and pieces, each with its own scope.
    - Help in maintaining a clean global scope, avoiding name collisions.
  - **Exporting and Importing:**
    - **Exporting:**
      ```typescript
      export function add(a: number, b: number): number {
        return a + b;
      }
      ```
    - **Importing:**
      ```typescript
      import { add } from './math';
      console.log(add(2, 3));
      ```
  - **Default Exports:**
    - Allows exporting a single value as the default export.
      ```typescript
      export default function subtract(a: number, b: number): number {
        return a - b;
      }
      ```
    - Importing default exports.
      ```typescript
      import subtract from './math';
      console.log(subtract(5, 2));
      ```

- **Namespaces:**
  - **Definition and Purpose:**
    - Namespaces are a way to logically group related code, especially useful for organizing large codebases.
    - Provide an internal module mechanism, ensuring compatibility with older TypeScript versions.
  - **Defining and Using Namespaces:**
    - **Namespace Definition:**
      ```typescript
      namespace Geometry {
        export function calculateArea(width: number, height: number): number {
          return width * height;
        }
      }
      ```
    - **Accessing Namespaced Members:**
      ```typescript
      let area = Geometry.calculateArea(10, 20);
      console.log(area);
      ```
  - **Nested Namespaces:**
    - Namespaces can be nested for more fine-grained organization.
      ```typescript
      namespace App {
        export namespace Utilities {
          export function log(message: string) {
            console.log(message);
          }
        }
      }
      App.Utilities.log("Hello, world!");
      ```

- **Modules vs. Namespaces:**
  - **Use Cases:**
    - **Modules:**
      - Preferred for organizing code in modern TypeScript projects.
      - Aligns with ES6 module standards, making it easier to integrate with other tools and libraries.
    - **Namespaces:**
      - Useful for organizing older codebases and internal libraries.
      - Helps avoid name collisions in large applications.

- **Practical Applications:**
  - **Combining Modules and Namespaces:**
    - Can use namespaces within modules to group related functions and interfaces.
    ```typescript
    export namespace Utilities {
      export function toUpperCase(str: string): string {
        return str.toUpperCase();
      }
    }
    import { Utilities } from './utils';
    console.log(Utilities.toUpperCase("hello"));
    ```
  - **Integrating with Node.js:**
    - TypeScript modules are compatible with Node.js, enabling server-side application development.
    ```typescript
    // math.ts
    export function multiply(a: number, b: number): number {
      return a * b;
    }
    // app.ts
    import { multiply } from './math';
    console.log(multiply(3, 4));
    ```

- **Best Practices:**
  - **Clear Module Boundaries:**
    - Ensure each module has a clear responsibility and avoid tightly coupling modules.
  - **Consistent Naming Conventions:**
    - Use consistent naming conventions for namespaces and modules to enhance code readability.
  - **Documentation:**
    - Document the purpose and usage of modules and namespaces to aid in maintainability.

These points cover the essentials of using modules and namespaces in TypeScript, emphasizing their importance in organizing and managing code effectively.
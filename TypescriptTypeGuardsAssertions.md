### Slide 7: Type Guards and Type Assertions in TypeScript
**Title:** "Type Guards and Type Assertions in TypeScript"

**Points:**

- **Type Guards:**
  - **Definition and Purpose:**
    - Type guards are techniques to check the type of a variable at runtime, enabling more precise type narrowing within a code block.
  - **Using `typeof` for Primitives:**
    - Works well for primitive types like string, number, and boolean.
    ```typescript
    function padLeft(value: string | number, padding: string | number) {
      if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
      }
      if (typeof padding === "string") {
        return padding + value;
      }
      throw new Error(`Expected string or number, got '${padding}'.`);
    }
    ```

- **Using `instanceof` for Objects:**
  - **Checking Object Types:**
    - Useful for determining the constructor of an object instance.
    ```typescript
    class Bird {
      fly() { console.log("Flying"); }
    }
    class Fish {
      swim() { console.log("Swimming"); }
    }
    function move(animal: Bird | Fish) {
      if (animal instanceof Bird) {
        animal.fly();
      } else {
        animal.swim();
      }
    }
    ```

- **User-Defined Type Guards:**
  - **Creating Custom Type Guards:**
    - Functions that return a type predicate.
    ```typescript
    interface Cat {
      meow(): void;
    }
    interface Dog {
      bark(): void;
    }
    function isCat(animal: Cat | Dog): animal is Cat {
      return (animal as Cat).meow !== undefined;
    }
    function makeSound(animal: Cat | Dog) {
      if (isCat(animal)) {
        animal.meow();
      } else {
        animal.bark();
      }
    }
    ```

- **Type Assertions:**
  - **Forcing Type Conversion:**
    - Type assertions tell the compiler to treat a value as a specific type, overriding the inferred type.
    ```typescript
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;
    ```
  - **Two Forms of Syntax:**
    - **Angle-Bracket Syntax:**
      ```typescript
      let someValue: any = "this is a string";
      let strLength: number = (<string>someValue).length;
      ```
    - **`as` Syntax:**
      ```typescript
      let someValue: any = "this is a string";
      let strLength: number = (someValue as string).length;
      ```

- **Using `in` Operator:**
  - **Checking for Property Existence:**
    - The `in` operator checks if a property exists in an object.
    ```typescript
    interface Admin {
      name: string;
      privileges: string[];
    }
    interface User {
      name: string;
      startDate: Date;
    }
    function printEmployeeInformation(emp: Admin | User) {
      console.log("Name: " + emp.name);
      if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
      }
      if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
      }
    }
    ```

- **Combining Type Guards and Assertions:**
  - **Complex Type Scenarios:**
    - Use type guards for narrowing types and assertions when certain about the type.
    ```typescript
    function getNetworkState(state: NetworkState) {
      if (state.state === "loading") {
        return "Loading request";
      } else if (state.state === "failed") {
        return `Failed with code ${state.code}`;
      } else {
        return `Got data: ${(state as SuccessState).data}`;
      }
    }
    ```

These points provide a comprehensive understanding of type guards and type assertions, illustrating how they help ensure type safety and precise type handling in TypeScript applications.
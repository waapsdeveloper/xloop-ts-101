### Slide 6: Union and Intersection Types in TypeScript
**Title:** "Union and Intersection Types in TypeScript"

**Points:**

- **Union Types:**
  - **Definition and Usage:**
    - Union types allow a variable to hold one of several types.
    ```typescript
    let value: string | number;
    value = "hello"; // Valid
    value = 42; // Valid
    ```
  - **Working with Union Types:**
    - TypeScript provides type narrowing to work safely with union types.
    ```typescript
    function printId(id: number | string) {
      if (typeof id === "string") {
        console.log(`ID: ${id.toUpperCase()}`);
      } else {
        console.log(`ID: ${id}`);
      }
    }
    ```

- **Intersection Types:**
  - **Definition and Usage:**
    - Intersection types combine multiple types into one, requiring a variable to satisfy all included types.
    ```typescript
    interface Person {
      name: string;
    }
    interface Employee {
      employeeId: number;
    }
    type EmployeePerson = Person & Employee;
    let employee: EmployeePerson = { name: "Alice", employeeId: 12345 };
    ```

- **Type Guards for Union Types:**
  - **Custom Type Guards:**
    - Type guards help TypeScript infer the type within conditional blocks.
    ```typescript
    function isString(value: any): value is string {
      return typeof value === "string";
    }
    function processValue(value: string | number) {
      if (isString(value)) {
        console.log(`String value: ${value}`);
      } else {
        console.log(`Number value: ${value}`);
      }
    }
    ```

- **Common Use Cases:**
  - **Handling Different Return Types:**
    - Union types are useful for functions that can return different types.
    ```typescript
    function getValue(): string | number {
      return Math.random() > 0.5 ? "hello" : 42;
    }
    ```
  - **Combining Interfaces:**
    - Intersection types are beneficial for combining multiple interfaces into one.
    ```typescript
    interface Readable {
      read(): void;
    }
    interface Writable {
      write(): void;
    }
    type ReadWrite = Readable & Writable;
    class Document implements ReadWrite {
      read() { console.log("Reading..."); }
      write() { console.log("Writing..."); }
    }
    ```

- **Discriminated Unions:**
  - **Using a Common Property:**
    - Discriminated unions use a common property to distinguish between different types in a union.
    ```typescript
    interface Square {
      kind: "square";
      size: number;
    }
    interface Rectangle {
      kind: "rectangle";
      width: number;
      height: number;
    }
    type Shape = Square | Rectangle;
    function area(shape: Shape) {
      switch (shape.kind) {
        case "square":
          return shape.size * shape.size;
        case "rectangle":
          return shape.width * shape.height;
      }
    }
    ```

- **Complex Type Combinations:**
  - **Advanced Type Combinations:**
    - Union and intersection types can be combined to create complex type relationships.
    ```typescript
    type Admin = {
      name: string;
      privileges: string[];
    };
    type Employee = {
      name: string;
      startDate: Date;
    };
    type ElevatedEmployee = Admin & Employee;
    let elevatedEmployee: ElevatedEmployee = {
      name: "John",
      privileges: ["create-server"],
      startDate: new Date()
    };
    ```

These points elaborate on the versatility and power of union and intersection types in TypeScript, showing how they can be used to handle complex type scenarios effectively.
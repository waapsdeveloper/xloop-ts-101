### Slide 8: Enums and Literal Types in TypeScript
**Title:** "Enums and Literal Types in TypeScript"

**Points:**

- **Enums:**
  - **Definition and Purpose:**
    - Enums (enumerations) allow for defining a set of named constants, improving code readability and maintainability.
    ```typescript
    enum Direction {
      Up,
      Down,
      Left,
      Right
    }
    ```
  - **Numeric Enums:**
    - By default, enums are assigned numeric values starting from 0, but custom values can be assigned.
    ```typescript
    enum Status {
      Active = 1,
      Inactive,
      Pending
    }
    ```
  - **String Enums:**
    - Enums can also hold string values, providing more meaningful constant values.
    ```typescript
    enum Response {
      Success = "SUCCESS",
      Failure = "FAILURE"
    }
    ```
  - **Reverse Mapping:**
    - TypeScript provides reverse mapping for numeric enums, allowing lookup by value.
    ```typescript
    enum Color {
      Red,
      Green,
      Blue
    }
    let colorName: string = Color[2]; // "Blue"
    ```

- **Literal Types:**
  - **String and Number Literals:**
    - Literal types allow for creating variables that can only hold specific values, enhancing type safety.
    ```typescript
    type Direction = "up" | "down" | "left" | "right";
    let move: Direction;
    move = "up"; // Valid
    move = "down"; // Valid
    move = "north"; // Error: Type '"north"' is not assignable to type 'Direction'.
    ```
  - **Boolean Literals:**
    - Boolean literals ensure variables can only be true or false.
    ```typescript
    type IsEnabled = true | false;
    let feature: IsEnabled;
    feature = true; // Valid
    feature = false; // Valid
    feature = "yes"; // Error: Type '"yes"' is not assignable to type 'IsEnabled'.
    ```

- **Literal Inference with `const`:**
  - **Using `const` for Literal Types:**
    - Declaring variables with `const` infers their literal type automatically.
    ```typescript
    const direction = "up"; // Type is "up"
    let dir: "up" | "down" = direction; // Valid
    ```
  - **Literal Narrowing:**
    - Using `const` for function return values or object properties helps narrow down types.
    ```typescript
    function getResponse() {
      return "SUCCESS" as const;
    }
    let response: "SUCCESS" = getResponse();
    ```

- **Combining Enums and Literal Types:**
  - **Enhanced Type Safety with Enums:**
    - Enums can be combined with literal types for stricter type checking.
    ```typescript
    enum PetType {
      Dog = "DOG",
      Cat = "CAT"
    }
    type Pet = {
      type: PetType;
      name: string;
    };
    let pet: Pet = { type: PetType.Dog, name: "Buddy" }; // Valid
    ```

- **Discriminated Unions with Literal Types:**
  - **Creating Discriminated Unions:**
    - Literal types are commonly used in discriminated unions to create precise type-safe APIs.
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

- **Practical Examples and Use Cases:**
  - **Enum-Based Switch Cases:**
    - Using enums and literal types in switch cases enhances code clarity and reduces errors.
    ```typescript
    enum UserRole {
      Admin,
      User,
      Guest
    }
    function getPermissions(role: UserRole) {
      switch (role) {
        case UserRole.Admin:
          return "Full Access";
        case UserRole.User:
          return "Limited Access";
        case UserRole.Guest:
          return "Guest Access";
      }
    }
    ```

These points highlight the utility of enums and literal types in TypeScript, demonstrating how they enhance type safety, code readability, and maintainability in various scenarios.
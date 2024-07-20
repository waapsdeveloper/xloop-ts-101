TypeScript’s static type system provides early detection of potential errors at compile time, which helps prevent runtime errors and bugs. Here are some examples to illustrate how TypeScript catches errors before the code is executed:

### Example 1: Type Mismatch

TypeScript catches type mismatches where the type of a value doesn’t match the expected type.

```typescript
// Function expecting a number parameter
function square(num: number): number {
  return num * num;
}

// TypeScript error: Argument of type 'string' is not assignable to parameter of type 'number'.
const result = square("hello");
```

In this example, TypeScript detects that `"hello"` is not a number and raises an error before the code runs.

### Example 2: Undefined Properties

TypeScript checks for access to properties or methods that do not exist on an object.

```typescript
interface Person {
  name: string;
  age: number;
}

// Object with required properties
const person: Person = {
  name: "Alice",
  age: 30
};

// TypeScript error: Property 'address' does not exist on type 'Person'.
console.log(person.address);
```

TypeScript raises an error when trying to access the `address` property, which is not defined in the `Person` interface.

### Example 3: Function Return Type

TypeScript verifies that functions return values consistent with their declared return types.

```typescript
// Function expecting to return a number
function add(a: number, b: number): number {
  return a + b;
}

// TypeScript error: Type 'string' is not assignable to type 'number'.
const result = add(5, "10");
```

TypeScript detects that `"10"` is a string and not a number, preventing a potential type error.

### Example 4: Type Assertion and Type Guards

TypeScript checks the correctness of type assertions and type guards.

```typescript
// Function with a type guard
function process(value: number | string) {
  if (typeof value === "string") {
    // TypeScript knows 'value' is a string here
    console.log(value.toUpperCase());
  } else {
    // TypeScript knows 'value' is a number here
    console.log(value.toFixed(2));
  }
}

// TypeScript error: Property 'toUpperCase' does not exist on type 'number'.
process(123.456);
```

TypeScript correctly infers the type of `value` based on the type guard but throws an error if you use `value` as a string outside the guarded block.

### Example 5: Array Indexing

TypeScript checks that array indices are valid and that elements are accessed correctly.

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];

// TypeScript error: Index signature in type 'number[]' only permits reading property '5'.
const fifthElement = numbers[5];
```

TypeScript detects that index `5` is out of bounds for the `numbers` array, which only has indices `0` through `4`.

### Example 6: Missing Required Parameters

TypeScript checks for missing required parameters in function calls.

```typescript
function greet(name: string, age: number): string {
  return `Hello, ${name}. You are ${age} years old.`;
}

// TypeScript error: Expected 2 arguments, but got 1.
const greeting = greet("Alice");
```

TypeScript detects that the function call is missing the required `age` parameter.

### Example 7: Enum and Type Safety

TypeScript provides type safety for enums and checks that values match defined enum members.

```typescript
enum Status {
  Active,
  Inactive,
  Pending
}

// TypeScript error: Argument of type '4' is not assignable to parameter of type 'Status'.
const status: Status = 4;
```

TypeScript detects that `4` is not a valid member of the `Status` enum.

### Example 8: Class Properties and Methods

TypeScript ensures that class properties and methods are used correctly according to their declarations.

```typescript
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const user = new User("Bob", 25);

// TypeScript error: Property 'sayHello' does not exist on type 'User'.
user.sayHello();
```

TypeScript raises an error when calling a method `sayHello` that does not exist on the `User` class.

By catching these types of errors at compile time, TypeScript helps ensure that your code is more robust and reduces the likelihood of runtime issues.
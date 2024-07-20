Type annotations in TypeScript provide a way to explicitly declare the types of variables, function parameters, and return values. This helps catch type-related errors at compile time and makes the code more predictable and easier to understand. 

Here are some examples to elaborate on type annotations:

### Variable Type Annotations
You can specify the type of a variable when you declare it.

```typescript
// Explicitly declare a variable type
let name: string = "John Doe";
let age: number = 25;
let isStudent: boolean = true;

// Array type annotation
let scores: number[] = [95, 88, 76];

// Object type annotation
let person: { name: string; age: number } = { name: "Alice", age: 30 };
```

### Function Parameter Type Annotations
You can specify the types of parameters that a function expects.

```typescript
// Function with parameter type annotations
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!

// Function with multiple parameter types
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10)); // Output: 15
```

### Function Return Type Annotations
You can also specify the type of value that a function returns.

```typescript
// Function with return type annotation
function square(num: number): number {
  return num * num;
}

console.log(square(4)); // Output: 16

// Function with void return type (no return value)
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello, TypeScript!"); // Output: Hello, TypeScript!
```

### Combined Example
Combining variable, parameter, and return type annotations in a single example.

```typescript
// Variable type annotations
let username: string = "Charlie";
let userAge: number = 28;
let userScores: number[] = [90, 85, 88];

// Function with parameter and return type annotations
function getUserInfo(name: string, age: number, scores: number[]): string {
  let averageScore: number = scores.reduce((a, b) => a + b, 0) / scores.length;
  return `${name}, age ${age}, has an average score of ${averageScore}.`;
}

console.log(getUserInfo(username, userAge, userScores)); 
// Output: Charlie, age 28, has an average score of 87.66666666666667.
```

### Benefits of Type Annotations
1. **Error Detection**: Type annotations help catch errors at compile time rather than runtime.
   ```typescript
   // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
   console.log(add(5, "10"));
   ```

2. **Code Completion and Intellisense**: Type annotations improve developer experience by providing better code completion and IntelliSense in editors.
   
3. **Documentation**: Type annotations serve as documentation for anyone reading the code, making it clear what types of values are expected and returned.

By using type annotations, TypeScript ensures that the variables, function parameters, and return values are used consistently throughout the code, reducing bugs and improving code maintainability.
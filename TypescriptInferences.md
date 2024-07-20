TypeScript has a powerful type inference system that can automatically determine the types of variables, function parameters, and return values based on the values they are assigned. This reduces the need for explicit type annotations and can make the code more concise and readable.

Here are some examples to demonstrate TypeScript's type inference:

### Variable Type Inference
TypeScript infers the type of a variable based on the initial value assigned to it.

```typescript
// TypeScript infers the type of 'name' as 'string'
let name = "John Doe"; 
// name: string

// TypeScript infers the type of 'age' as 'number'
let age = 25; 
// age: number

// TypeScript infers the type of 'isStudent' as 'boolean'
let isStudent = true; 
// isStudent: boolean

// TypeScript infers the type of 'scores' as 'number[]'
let scores = [95, 88, 76]; 
// scores: number[]
```

### Function Return Type Inference
TypeScript can infer the return type of a function based on the return value.

```typescript
// TypeScript infers the return type as 'string'
function greet(name: string) {
  return `Hello, ${name}!`;
}
// greet(name: string): string

console.log(greet("Alice")); // Output: Hello, Alice!

// TypeScript infers the return type as 'number'
function add(a: number, b: number) {
  return a + b;
}
// add(a: number, b: number): number

console.log(add(5, 10)); // Output: 15
```

### Contextual Typing
TypeScript infers types based on the context in which a variable or function is used.

```typescript
// TypeScript infers the type of 'double' as '(num: number) => number'
const double = function (num: number) {
  return num * 2;
};
// double: (num: number) => number

console.log(double(10)); // Output: 20

// TypeScript infers the type of 'numbers' as 'number[]'
const numbers = [1, 2, 3, 4, 5];

// TypeScript infers the type of 'square' as '(value: number, index: number, array: number[]) => number'
const squares = numbers.map(value => value * value);
// squares: number[]
console.log(squares); // Output: [1, 4, 9, 16, 25]
```

### Object Type Inference
TypeScript can infer the types of properties within an object.

```typescript
// TypeScript infers the type of 'person' as '{ name: string; age: number; isStudent: boolean; }'
let person = {
  name: "Alice",
  age: 30,
  isStudent: false
};
// person: { name: string; age: number; isStudent: boolean }

console.log(person.name); // Output: Alice
console.log(person.age); // Output: 30
console.log(person.isStudent); // Output: false
```

### Array Type Inference
TypeScript can infer the types of elements within an array.

```typescript
// TypeScript infers the type of 'points' as 'number[]'
let points = [10, 20, 30, 40, 50];
// points: number[]

console.log(points); // Output: [10, 20, 30, 40, 50]

// TypeScript infers the type of 'mix' as '(string | number | boolean)[]'
let mix = [10, "hello", true];
// mix: (string | number | boolean)[]

console.log(mix); // Output: [10, "hello", true]
```

### Example of Combined Inference
Combining variable, function, and return type inference in a single example.

```typescript
// TypeScript infers the type of 'message' as 'string'
let message = "TypeScript is great!";
// message: string

// TypeScript infers the type of 'logMessage' as '() => void'
const logMessage = function () {
  console.log(message);
};
// logMessage: () => void

logMessage(); // Output: TypeScript is great!

// TypeScript infers the type of 'multiply' as '(a: number, b: number) => number'
const multiply = (a: number, b: number) => {
  return a * b;
};
// multiply: (a: number, b: number) => number

console.log(multiply(4, 5)); // Output: 20
```

In these examples, TypeScript infers the types based on the initial values and the context in which variables and functions are used. This helps reduce the need for explicit type annotations while still providing the benefits of strong typing.
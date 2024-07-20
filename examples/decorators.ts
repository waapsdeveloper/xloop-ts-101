
// Decorator example
// "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */

function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result:`, result);
    return result;
  };
}

class Calculator {
  @Log
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const calculator = new Calculator();
calculator.multiply(4, 5); // Output: Calling multiply with arguments: [4, 5], Result: 20
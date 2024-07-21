### Slide 4: Object-Oriented Programming in TypeScript
**Title:** "Object-Oriented Programming in TypeScript"

**Points:**

- **Class Definition and Properties:**
  - **Creating Classes and Defining Properties:**
    ```typescript
    class Animal {
      name: string;
      constructor(name: string) {
        this.name = name;
      }
    }
    ```
  - TypeScript provides a clear syntax for defining classes and initializing properties in the constructor.

- **Inheritance and Method Overriding:**
  - **Extending Classes:**
    ```typescript
    class Dog extends Animal {
      bark() {
        console.log('Woof! Woof!');
      }
    }
    ```
  - **Overriding Methods:**
    ```typescript
    class Cat extends Animal {
      move(distance: number = 0) {
        console.log(`${this.name} moved silently ${distance}m.`);
      }
    }
    ```

- **Access Modifiers:**
  - **Public, Private, and Protected:**
    ```typescript
    class Person {
      public name: string;
      private age: number;
      protected height: number;

      constructor(name: string, age: number, height: number) {
        this.name = name;
        this.age = age;
        this.height = height;
      }
    }
    ```
  - Controls visibility and accessibility of class members, enhancing encapsulation and data hiding.

- **Abstract Classes and Methods:**
  - **Defining Abstract Classes:**
    ```typescript
    abstract class Department {
      constructor(public name: string) {}
      abstract printMeeting(): void; // Must be implemented by subclasses
    }
    ```
  - **Implementing Abstract Methods:**
    ```typescript
    class AccountingDepartment extends Department {
      printMeeting() {
        console.log(`The Accounting Department meets every Monday.`);
      }
    }
    ```

- **Interfaces and Implementations:**
  - **Defining Interfaces:**
    ```typescript
    interface ClockInterface {
      currentTime: Date;
      setTime(d: Date): void;
    }
    ```
  - **Implementing Interfaces in Classes:**
    ```typescript
    class Clock implements ClockInterface {
      currentTime: Date;
      setTime(d: Date) {
        this.currentTime = d;
      }
      constructor(h: number, m: number) {}
    }
    ```

- **Static Properties and Methods:**
  - **Using Static Members:**
    ```typescript
    class Grid {
      static origin = { x: 0, y: 0 };
      calculateDistanceFromOrigin(point: { x: number; y: number }) {
        let xDist = point.x - Grid.origin.x;
        let yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist);
      }
    }
    ```
  - Allows access to methods and properties on the class itself rather than instances, useful for utility functions and shared data.

These points offer an in-depth look at how TypeScript supports object-oriented programming concepts, making it easier to design and maintain large-scale applications with robust, type-safe code.
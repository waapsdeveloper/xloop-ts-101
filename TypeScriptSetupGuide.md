# Setting Up TypeScript on Your Local Machine

Starting with TypeScript programming on your local machine involves several steps, including installing Node.js and TypeScript, setting up your development environment, and creating a simple TypeScript project. Here's a step-by-step guide to get you started:

## Step 1: Install Node.js

TypeScript is built on top of JavaScript, so you'll need Node.js, which includes `npm` (Node Package Manager).

1. **Download and install Node.js**:
   - Go to the [Node.js website](https://nodejs.org/) and download the LTS version for your operating system.
   - Follow the installation instructions for your operating system.

2. **Verify the installation**:
   - Open a terminal or command prompt.
   - Run the following commands to check the installed versions:
     ```bash
     node -v
     npm -v
     ```

## Step 2: Install TypeScript

Once Node.js is installed, you can install TypeScript globally using npm.

1. **Install TypeScript**:
   - Run the following command in your terminal or command prompt:
     ```bash
     npm install -g typescript
     ```

2. **Verify the installation**:
   - Run the following command to check the installed version:
     ```bash
     tsc -v
     ```

## Step 3: Set Up Your Development Environment

Choose a code editor that supports TypeScript. Visual Studio Code (VS Code) is a popular choice because of its robust TypeScript support.

1. **Download and install Visual Studio Code**:
   - Go to the [Visual Studio Code website](https://code.visualstudio.com/) and download the version for your operating system.
   - Follow the installation instructions.

2. **Install TypeScript extension (optional)**:
   - Open VS Code.
   - Go to the Extensions view by clicking the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
   - Search for "TypeScript" and install any relevant extensions, such as "TypeScript Hero" or "TypeScript Importer".

## Step 4: Create a TypeScript Project

Now you're ready to create your first TypeScript project.

1. **Create a new project directory**:
   - In your terminal or command prompt, navigate to the location where you want to create your project and run:
     ```bash
     mkdir my-typescript-project
     cd my-typescript-project
     ```

2. **Initialize a new npm project**:
   - Run the following command and follow the prompts to create a `package.json` file:
     ```bash
     npm init -y
     ```

3. **Install TypeScript locally in your project**:
   - Run the following command to install TypeScript as a dev dependency:
     ```bash
     npm install --save-dev typescript
     ```

4. **Create a `tsconfig.json` file**:
   - Run the following command to create a `tsconfig.json` file with default settings:
     ```bash
     npx tsc --init
     ```

5. **Create a TypeScript file**:
   - Create a new file named `index.ts` in your project directory.
   - Open `index.ts` in your code editor and add some TypeScript code, for example:
     ```typescript
     function greet(name: string): string {
       return `Hello, ${name}!`;
     }

     console.log(greet('World'));
     ```

6. **Compile the TypeScript file**:
   - Run the following command to compile `index.ts` to JavaScript:
     ```bash
     npx tsc
     ```
   - This will generate an `index.js` file in the same directory.

7. **Run the compiled JavaScript file**:
   - Run the following command to execute the generated JavaScript file:
     ```bash
     node index.js
     ```

You should see the output `Hello, World!` in your terminal.

Congratulations! You've successfully set up TypeScript on your local machine and created your first TypeScript project.

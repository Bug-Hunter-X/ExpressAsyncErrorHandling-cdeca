# Unhandled Asynchronous Error in Node.js Express.js Server

This repository demonstrates a common error in Node.js applications involving unhandled exceptions within asynchronous operations.  The example uses Express.js to create a simple server that simulates an asynchronous task that might fail, leading to a server crash if not handled properly. The solution showcases how to use error handling to prevent this crash.

## Bug
The `bug.js` file contains a simple Express.js server.  It simulates an asynchronous operation (using `setTimeout`) that randomly throws an error. If the random number generated is less than 0.5, it responds successfully. Otherwise, it throws an error, causing the server to crash without proper error handling.

## Solution
The `bugSolution.js` file demonstrates the correct way to handle the asynchronous error.  It uses a `try...catch` block within the asynchronous operation's callback to gracefully catch and handle any potential errors. This prevents the server from crashing and allows for better error reporting or recovery.

## How to Run
1. Clone the repository.
2. Navigate to the directory.
3. Run `node bug.js` (to see the bug)
4. Run `node bugSolution.js` (to see the solution)
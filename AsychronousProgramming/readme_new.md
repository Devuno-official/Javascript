# Asynchronous JavaScript Programming Guide 2025

## 1. Callback Hell
Callback Hell is a situation in JavaScript where multiple nested callbacks create code that's difficult to read and maintain. It occurs when you have several asynchronous operations that depend on each other.

### Understanding Callback Hell with Examples

```javascript
// Real-world example: User Registration Process
function validateUser(userData, callback) {
    setTimeout(() => {
        if (userData.username && userData.email) {
            callback(null, { ...userData, isValid: true });
        } else {
            callback(new Error("Invalid user data"));
        }
    }, 1000);
}

function saveToDatabase(validatedData, callback) {
    setTimeout(() => {
        const savedUser = { ...validatedData, id: Date.now() };
        callback(null, savedUser);
    }, 1000);
}

function sendWelcomeEmail(userData, callback) {
    setTimeout(() => {
        const emailSent = {
            to: userData.email,
            subject: "Welcome!",
            sent: true
        };
        callback(null, emailSent);
    }, 1000);
}

// Callback Hell in Action
validateUser({ username: "john_doe", email: "john@example.com" }, (error, validData) => {
    if (error) {
        console.error("Validation failed:", error);
        return;
    }
    saveToDatabase(validData, (error, savedData) => {
        if (error) {
            console.error("Save failed:", error);
            return;
        }
        sendWelcomeEmail(savedData, (error, emailResult) => {
            if (error) {
                console.error("Email send failed:", error);
                return;
            }
            console.log("Registration successful!", emailResult);
        });
    });
});
```

## 2. Promises
Promises provide a more elegant way to handle asynchronous operations. They represent a value that might be available now, or in the future, or never.

### Promise Example

```javascript
// Converting previous example to Promises
function validateUser(userData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userData.username && userData.email) {
                resolve({ ...userData, isValid: true });
            } else {
                reject(new Error("Invalid user data"));
            }
        }, 1000);
    });
}

function saveToDatabase(validatedData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const savedUser = { ...validatedData, id: Date.now() };
            resolve(savedUser);
        }, 1000);
    });
}

function sendWelcomeEmail(userData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                to: userData.email,
                subject: "Welcome!",
                sent: true
            });
        }, 1000);
    });
}
```

## 3. Promise Chaining
Promise chaining allows you to execute multiple asynchronous operations sequentially in a more readable way.

### Promise Chaining Example

```javascript
// Using Promise chaining
validateUser({ username: "john_doe", email: "john@example.com" })
    .then(validData => {
        console.log("Validation successful");
        return saveToDatabase(validData);
    })
    .then(savedData => {
        console.log("Save successful");
        return sendWelcomeEmail(savedData);
    })
    .then(emailResult => {
        console.log("Registration process completed!", emailResult);
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
```

## 4. Async/Await
Async/Await is a modern way to handle Promises, making asynchronous code look and behave more like synchronous code.

### Async/Await Example

```javascript
// Using async/await
async function registerUser(userData) {
    try {
        // Validate user
        const validData = await validateUser(userData);
        console.log("Validation successful");

        // Save to database
        const savedData = await saveToDatabase(validData);
        console.log("Save successful");

        // Send welcome email
        const emailResult = await sendWelcomeEmail(savedData);
        console.log("Registration process completed!", emailResult);

        return {
            success: true,
            user: savedData,
            email: emailResult
        };
    } catch (error) {
        console.error("Registration failed:", error);
        throw error;
    }
}

// Using the async function
registerUser({ username: "john_doe", email: "john@example.com" })
    .then(result => console.log("Success:", result))
    .catch(error => console.error("Error:", error));
```

### Practice Exercise

1. Create a simple todo application that:
   - Fetches todos from an API
   - Adds a new todo
   - Updates a todo
   - Deletes a todo

Try implementing this using:
- Callbacks
- Promises
- Async/Await

```javascript
// Example API endpoints
const API_URL = 'https://api.example.com/todos';

// Async/Await implementation
async function TodoManager() {
    // Fetch todos
    async function fetchTodos() {
        try {
            const response = await fetch(API_URL);
            return await response.json();
        } catch (error) {
            throw new Error('Failed to fetch todos');
        }
    }

    // Add todo
    async function addTodo(title) {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify({ title }),
                headers: { 'Content-Type': 'application/json' }
            });
            return await response.json();
        } catch (error) {
            throw new Error('Failed to add todo');
        }
    }

    // Usage
    try {
        const todos = await fetchTodos();
        console.log('Current todos:', todos);

        const newTodo = await addTodo('Learn Async/Await');
        console.log('Added new todo:', newTodo);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Run the example
TodoManager();
```

Note: For the best development experience, use Node.js version 14.0 or higher, which provides full support for modern async/await features and ES modules.

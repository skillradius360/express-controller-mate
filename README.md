# express-controller-mate

A utility package for handling async/await in Express routes along with standardized API responses and error handling.

## ✨ Features

- ✅ `asyncHandler` for cleaner async route functions
- ✅ `apiResponse` class to standardize success responses
- ✅ `apiError` class for custom error handling
- ✅ TypeScript support out of the box

---

## 📦 Installation

```bash
npm install express-controller-mate
```

or with yarn:

```bash
yarn add express-controller-mate
```

---

## 📚 Usage

### 1. asyncHandler

Simplify async route handlers and avoid repetitive `try/catch` blocks:

```ts
import express from 'express';
import { asyncHandler } from 'express-controller-mate';

const router = express.Router();

router.get(
  '/example',
  asyncHandler(async (req, res, next) => {
    const data = await someAsyncFunction();
    res.json(data);
  })
);
```

### 2. apiResponse

Standardize your success responses:

```ts
import apiResponse from 'express-controller-mate';

res.status(200).json(new apiResponse(200, { userId: 123 }, 'User fetched successfully'));
```

### 3. apiError

Create and throw custom errors with status codes and optional stack traces:

```ts
import { apiError } from 'express-controller-mate';

throw new apiError(404, 'User not found');
```

---

## 🧪 Example Express Setup

```ts
app.use('/api', router);

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    error: err.error || [],
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
});
```

---

## 🚠 TypeScript Support

Fully typed for a better developer experience.

```ts
new apiResponse<string>(200, "hello", "success");
```

---

## 📄 License

MIT


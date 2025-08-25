# Task Manager (Bootcamp Project)

A simple, bootcamp-style task management application to create, view, update, and delete task.

---

# Live Demo

🔗 https://taskmanager-bootcamp-project.onrender.com/

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About the Project

**Task Manager Bootcamp Project** is a lightweight application for managing task—ideal for learning how to build full-stack apps. It allows users to:

- Create new task
- View a list of task
- Update task details or status
- Delete task

---

## Features

- Add, read, update, and delete task (CRUD operations)
- Organize task with status (e.g., pending, in-progress, completed)
- Clean and intuitive UI
- RESTful API endpoints

---

## Tech Stack

| Layer    | Technologies                |
| -------- | --------------------------- |
| Backend  | Node.js, Express, MongoDB\* |
| Frontend | Vite + React                |
| Database | MongoDB \*                  |
| Tools    | Postman, Nodemon            |

---

## Folder Structure

```

├── backend/
   ├── src/
   │   ├── controllers/
   │   ├── models/
   │   ├── routes/
   │   ├── app.js
   │   └── config/
   ├── package.json
   └── README.md
├── frontend/
   ├── public/
   ├── src/
   ├── package.json
   └── README.md


```

---

## Getting Started

### Prerequisites

Ensure you have the following installed: Node.js, npm (or yarn), and a database like MongoDB.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mahamudul-hassan-bs/taskManager-Bootcamp-project.git
   ```

2. **Backend Setup**:

   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup** (if applicable):

   ```bash
   cd ../frontend
   npm install
   ```

### Configuration

Create a `.env` file in the appropriate directory (e.g., `backend/`) with configurations such as:

```
PORT=5000
DB_URI=your_database_uri
JWT_SECRET=your_secret_key
```

### Running the Application

**Backend**:

```bash
cd backend
npm start
```

**Frontend**:

```bash
cd frontend
npm start
```

Access the app at `http://localhost:3000`.

---

## Usage

- Navigate to the frontend UI to manage task visually.
- Or use tools like Postman to interact with backend endpoints.

---

## API Endpoints

| Method | Endpoint                   | Description                 |
| ------ | -------------------------- | --------------------------- |
| GET    | `/api/users/register`      | Register user               |
| GET    | `/api/users/login`         | Login User                  |
| GET    | `/api/users/userInfo`      | Get user info               |
| GET    | `/api/task/allTask`        | List all tasks              |
| POST   | `/api/task/addTask`        | Add task                    |
| POST   | `/api/task`                | Create a new task           |
| GET    | `/api/task/taskStats`      | Get Statistics of all tasks |
| PUT    | `/api/task/updateTask/:id` | Update an existing task     |
| DELETE | `/api/task/delete/:id`     | Remove a task               |

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your enhancements.

---

## License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## Contact

**Created by:** MD. Mahamudul Hassan

**GitHub:** [https://github.com/mahamudul-hassan-bs](https://github.com/mahamudul-hassan-bs)

---

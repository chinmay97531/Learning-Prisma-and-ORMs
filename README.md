# Learning Prisma and ORMs

This repository contains a simple Express.js application that demonstrates how to use **Prisma ORM** for database interactions. It includes examples of querying users and their related todos.

## Features
- Uses **Express.js** as the backend framework.
- Connects to a database using **Prisma ORM**.
- Provides REST API endpoints for fetching users and their associated todos.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/chinmay97531/Learning-Prisma.git
   cd Learning-Prisma
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up Prisma:
   - Ensure you have **PostgreSQL** or another supported database installed.
   - Configure your database connection in a `.env` file:
     ```sh
     DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
     ```
   - Run the following command to generate Prisma client:
     ```sh
     npx prisma generate
     ```
   - Run migrations to sync database schema:
     ```sh
     npx prisma migrate dev --name init
     ```

## Running the Application

Start the server with:
```sh
node index.js
```
The server will be running on **http://localhost:3000**.

## API Endpoints

### Fetch all users
**GET** `/users`
```json
{
  "users": [
    {
      "id": 1,
      "username": "Chinmay",
      "age": 21
    }
  ]
}
```

### Fetch todos for a user
**GET** `/todos/:id`
```json
{
  "user": {
    "username": "Chinmay",
    "password": "12345",
    "age": 21,
    "todos": [
      { "id": 1, "task": "Learn Prisma" }
    ]
  }
}
```

## Database Model (Example)
Modify your Prisma schema (`prisma/schema.prisma`) to include the following:
```prisma
model User {
  id        Int @default(autoincrement()) @id
  username  String @unique
  password  String
  age       Int
  city      String
  todos     Todo[]
}

model Todo {
  id          Int @default(autoincrement()) @id
  title       String
  description String
  done        Boolean
  userId      Int
  user        User @relation(fields: [userId], references: [id])
}
```

## Additional Prisma Commands
To create a new user, you can use:
```sh
npx prisma studio
```
This opens an interactive database UI to manage data.

## License
This project is open-source and available under the **MIT License**.


# Mini Bank Frontend

A simple banking frontend built using **React**, **Zustand**, **TailwindCSS**, **react-router** and more. Scaffolded with Vite.

## Technologies Used

**Client:** React, Zustand, TailwindCSS, react-router, shadcn/ui, react-hot-toast, lucide-react

**Server:** Java, Spring Boot, PostgreSQL, Docker, Docker Compose

## Requirements

You need to install Docker, Docker Compose and run the Docker engine in order to run the minibank app. https://www.docker.com/

- NodeJS 22
- npm (or equivalent)

## Running

In order to run the minibank backend app:

Clone the repository:

```bash
  git clone https://github.com/alpturan-dev/minibank-frontend.git
```

Change directory

```bash
  cd minibank-frontend
```

Create the .env file according to .env.example, for example:

```bash
  VITE_API_URL=http://localhost:8080/api
```

Install packages

```bash
  npm install
```

Run the app

```bash
  npm run dev
```

Done, now you can navigate to the port:

http://localhost:5173/signin

You should run the minibank-backend first to run the server! https://github.com/alpturan-dev/minibank-backend

## Features

- Secure Login / Register pages
- Home page for introducing the minibank app
- Accounts page to manage your accounts

## Writers

- [@alpturandev](https://www.github.com/alpturandev) for design and development.

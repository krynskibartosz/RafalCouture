# RafalCouture

A project that utilizes [Node.js](https://nodejs.org/en/), [Pnpm](https://pnpm.io/), [PostgreeSQL](https://www.postgresql.org/), [Express](https://expressjs.com/) and [Svelte-kit](https://kit.svelte.dev/) to create a website. It follows the principles of Clean Architecture.

## Table of Contents

- [RafalCouture](#rafalcouture)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
    - [Usage](#usage)
  - [Folder Structure](#folder-structure)
  - [Built With](#built-with)
    - [Running the tests](#running-the-tests)
  - [What's inside?](#whats-inside)
    - [Apps and Packages](#apps-and-packages)
    - [Utilities](#utilities)
  - [Architecture](#architecture)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Pnpm](https://pnpm.io/)

### Installing

1. Clone the repository
2. Install the dependencies

   ```
   pnpm i
   ```

3. Create a .env file in the root folder with the necessary environment variables.

   ```
   NODE_ENV=env
   DB_TYPE=dbtype
   DB_HOST=host
   DB_PORT=dbPort
   PORT=port
   DB_USERNAME=username
   DB_PASSWORD=password
   DB_DATABASE=db
   DB_DATABASE_TEST=dbTest
   DB_SYNCHRONIZE=synchronize
   ```

4. Start the development server

   ```
   pnpm dev
   ```

### Usage

1. Once the server is running, visit [port](http://127.0.0.1:3000/) `http://127.0.0.1:3000/` in your web browser to see the website.
2. You can also run tests by navigating to the `apps/backend` directory and running `pnpm test`.

## Folder Structure

- **backend**: contains the backend code, it's divided into several subfolders, including **tests** for tests, "application" for application logic, "config" for configuration files, "domain" for domain logic, "infrastructure" for infrastructure-related code, and "presentation" for code related to handling user input and output.
- **web**: contains the frontend code, it's divided into "src" for source code and "static" for static assets.
- **packages**: contains packages that are not part of the application code.

## Built With

- [Node.js](https://nodejs.org/en/)
- [Pnpm](https://pnpm.io/)
- [Express](https://expressjs.com/)
- [PostgreeSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Vitest](https://vitest.dev/)
- [Faker](https://fakerjs.dev/)
- [Zod](https://zod.dev/)
- [Svelte-kit](https://kit.svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io)
- [TurboRepo](https://turbo.build/repo)

### Running the tests

```
cd apps/backend && pnpm test
```

## What's inside?

### Apps and Packages

- `web`: a [svelte-kit](https://kit.svelte.dev/) app
- `backend`: a [typescript](https://www.typescriptlang.org/)
- `ui`: a stub Svelte component library
- `eslint-config-custom`: `eslint` configurations (includes `eslint-plugin-svelte` and `eslint-config-prettier`)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [TurboRepo](https://turbo.build/repo) for package management

## Architecture

This project follows the principles of Clean Architecture, it's divided into three main layers:

- **Application**: contains the application logic. It includes a dao folder with the data access objects and a server.ts file
- **Domain**: contains the domain logic. It includes entities folder with the business entities, and a type.ts file
- **Infrastructure**: contains the infrastructure-related code. It includes a db.ts file
- **Presentation**: contains the controllers, routes, middleware, services, and validation.

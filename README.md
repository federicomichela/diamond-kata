# Diamond Of Letters (DOL)

## Overview

This is a TypeScript-based web application powered by Vite. \
Vite is a modern build tool that offers fast development and builds processes.

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: [Download and install Node.js](https://nodejs.org/) (recommended version: 18.x or higher).
- **npm** or **yarn**: Node.js package managers (npm comes bundled with Node.js; you can also use [yarn](https://yarnpkg.com/)).

## Getting Started

Follow these steps to set up and run the application:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/federicomichela/diamond-kata.git
cd diamond-kata
```

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

Start the development server using Vite. This will serve the application and provide hot-reloading during development:

```bash
npm run dev
# or
yarn dev
```

The application should be accessible at `http://localhost:5173` by default. Open this URL in your web browser to view the app.

### 4. Build for Production

To create a production build of your application, run the build command:

```bash
npm run build
# or
yarn build
```

The production-ready files will be output to the `dist` directory.

### 5. Preview the Production Build

To preview the production build locally, use the following command:

```bash
npm run preview
# or
yarn preview
```

This will start a local server to preview the production build.

## Configuration

Configuration files are located in the root directory:

- **`vite.config.ts`**: Vite configuration file.
- **`tsconfig.json`**: TypeScript configuration file.

You can modify these files according to your project requirements.

## Scripts

- **`npm run dev`** or **`yarn dev`**: Starts the development server.
- **`npm run build`** or **`yarn build`**: Builds the project for production.
- **`npm run preview`** or **`yarn preview`**: Previews the production build locally.
- **`npm run test`** or **`yarn test`**: Runs all tests with coverage

## Troubleshooting

If you encounter issues, consider the following:

- Ensure Node.js and npm/yarn are properly installed.
- Check for errors in the terminal output.
- Ensure all dependencies are correctly installed (`npm install` or `yarn install`).

## Contributing

Feel free to submit issues or pull requests. Follow standard GitHub contribution guidelines for contributions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Replace `<repository-url>` and `<repository-folder>` with the actual URL of your Git repository and the folder name, respectively. Adjust any specific details related to your project as needed.
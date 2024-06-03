# Notes App

### Overview

The Notes App is a web application that allows users to create, view, edit, and delete notes. This app is built with modern web technologies and is designed to be fast, responsive, and easy to use.

### Live Demo

You can access the live demo of the project [here](https://notes-app-a.vercel.app/).

### Setup Instructions

### Prerequisites

- Node.js (version 14.x or later)
- npm (version 6.x or later)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dimitarsabev00/Notes-App.git
   cd Notes-App
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

This will launch the app in development mode. Open http://localhost:5173 to view it in your browser.

### Building for Production

To create a production build, run:

```bash
npm run build
```

The build artifacts will be stored in the dist directory. You can serve these files using any static file server.

### Project Structure

The project is structured as follows:

```bash
src/
  components/        # React components
  pages/             # Application pages
  styles/            # SCSS styles
  App.tsx            # Main application component
  index.tsx          # Entry point for the React application
public/              # Static assets
dist/                # Production build output (generated after running npm run build)
```

### Available Scripts

In the project directory, you can run:

npm run dev
Runs the app in development mode.
Open http://localhost:5173 to view it in your browser.

```bash
npm run build
```

Builds the app for production.

```bash
npm run start
```

Starts the production server.

```bash
npm run lint
```

Lints the codebase using ESLint.

### Technologies Used

<ul>
<li>React: JavaScript library for building user interfaces.</li>
<li>TypeScript: Superset of JavaScript that adds static typing.</li>
<li>SCSS: CSS preprocessor for easier styling.</li>
<li>Vite: Frontend tooling for fast development and build.</li>
</ul>

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

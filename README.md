# Travel Planner Frontend Documentation

## Overview

The Travel Planner frontend is built using **Next.js** for the user interface, **Zustand** for state management, and **Tailwind CSS** for styling. The frontend fetches data from the backend API, including a list of cities and their respective weather and description details.

### Demo
- **Frontend Demo:** [Travel Planner Frontend](https://travel-planner-fe-kohl.vercel.app)

## Setup and Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v14+)
- npm (v6+)
- [NextJS](https://nextjs.org/docs/)

### Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Run the following command to install the required dependencies:
    ```bash
    npm install
    ```

### Environment Variables

Ensure the **frontend** is configured to use the correct backend API. You can configure the backend API URL in the `.env.local` file or directly in your API call configurations.

Example `.env.local`:

```env
NEXT_PUBLIC_BACKEND_API_URL=your_hosted_uri or localhost
```

Replace the URL with the actual deployed URL of your backend.

### Scripts

- **Development**: Runs the application in development mode.
    ```bash
    npm run dev
    ```

- **Build**: Builds the application for production.
    ```bash
    npm run build
    ```

- **Start**: Starts the production build.
    ```bash
    npm run start
    ```

- **Lint**: Runs linting checks on your codebase.
    ```bash
    npm run lint
    ```

### Running the Application

To run the application in development mode:

```bash
npm run dev
```

To build the application for production:

```bash
npm run build
```

## Project Structure

The project is structured as follows:

```
src/
│
├── components/
│   ├── DashedCard.tsx      # A card component for displaying content with a dashed border
│   ├── Spinner.tsx         # A loading spinner component
│   ├── TextDisplay.tsx     # A reusable component to display text content
│
├── lib/
│   └── apiClient.ts        # Contains API client code for fetching city and weather data
│
├── stores/
│   └── useCityStore.ts     # Zustand store for managing selected city and fetching city details
│
├── types/                 # Folder containing type definitions
├── views/                 # Folder containing view components displayed in pages
├── page.tsx               # Main page component
├── layout.tsx             # Main layout component
```

## Deployment

1. Build the production version:
    ```bash
    npm run build
    ```

2. Start the production server:
    ```bash
    npm run start
    ```

## Dependencies

Here are the key dependencies used in the project:

- **Next.js**: React-based framework for server-side rendering and static website generation.
- **React**: Core library for building user interfaces.
- **Zustand**: Lightweight state management solution for React.
- **Axios**: Library for making HTTP requests.
- **Tailwind CSS**: Utility-first CSS framework for building custom designs.

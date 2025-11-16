This is the frontend of the Full Stack Developer assessment project.
It is built using Vite + React with Tailwind CSS for fast development, clean UI, and optimized performance.


🚀 Tech Stack

  - Vite – Lightning-fast dev server & bundler
  
  - React – Component-based UI
  
  - Tailwind CSS – Utility-first styling
  
  - Axios / Fetch – API communication
  
  - JavaScript (ES6+)


🔌 How It Works

The frontend communicates with the backend API using REST endpoints.
All data (auth, CRUD operations, etc.) is fetched using Axios/Fetch and rendered using React components.


🧪 Setup Instructions
1. Install Dependencies
    - npm install

2. Start Development Server
    - npm run dev


🎨 Styling

Tailwind CSS is imported globally via:

@import "tailwindcss";

in index.css.

📡 API Integration

All API requests hit the backend routes such as:

POST 
- /api/entries

GET 
- /api/entries

You can configure base URLs inside services/ or via environment variables.


🚀 Features

- Clean and minimal UI

- Fully responsive (Tailwind)

- API-ready structure

- Easy to maintain code

- Fast Vite development experience

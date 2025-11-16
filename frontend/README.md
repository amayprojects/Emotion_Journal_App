This is the frontend of the Full Stack Developer assessment project.
It is built using Vite + React with Tailwind CSS for fast development, clean UI, and optimized performance.

🚀 Tech Stack

Vite – Lightning-fast dev server & bundler

React – Component-based UI

Tailwind CSS – Utility-first styling

Axios / Fetch – API communication

JavaScript (ES6+)

📁 Project Structure
frontend/
│── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
│── public/
│── index.html
│── package.json
│── tailwind.config.js
│── postcss.config.js
└── README.md

🔌 How It Works

The frontend communicates with the backend API using REST endpoints.
All data (auth, CRUD operations, etc.) is fetched using Axios/Fetch and rendered using React components.

🧪 Setup Instructions
1. Install Dependencies
npm install

2. Start Development Server
npm run dev

3. Environment Variables

Create a .env file (not pushed to GitHub):

VITE_API_URL=http://localhost:5000


Use it inside the code:

const API = import.meta.env.VITE_API_URL;

🛠️ Build for Production
npm run build

🎨 Styling

Tailwind CSS is imported globally via:

@import "tailwindcss";


in index.css.

Write styles directly in components using utility classes like:

<div className="p-4 bg-gray-100 rounded-xl shadow">

📡 API Integration

All API requests hit the backend routes such as:

POST /api/auth/login
GET /api/data
POST /api/item


You can configure base URLs inside services/ or via environment variables.

📦 Production Deployment

You can host this frontend on:

Vercel

Netlify

GitHub Pages (static mode)

AWS S3 + CloudFront

Just upload the built folder:

dist/

🚀 Features

Clean and minimal UI

Fully responsive (Tailwind)

API-ready structure

Easy to maintain code

Fast Vite development experience

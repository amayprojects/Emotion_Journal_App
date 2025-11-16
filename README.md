📘 Emotional Journal App — Full Stack Assessment Project

This is a simple full-stack Emotional Journal web app. The project allows users to log their current emotion along with a short journal entry, and view all their past entries.

The stack includes a React (Vite) frontend, Node.js + Express backend, and MongoDB Atlas for database storage.

🚀 Features

Select or type an emotion (Happy, Sad, Angry, Calm, etc.)

Write a short journal entry

View all previously submitted entries

Clean and responsive UI using Tailwind CSS

REST API with validation and error handling

Fully functional frontend–backend integration

🛠 Tech Stack
Frontend

React (Vite)

Tailwind CSS

Fetch API for requests

Backend

Node.js

Express

Mongoose (MongoDB Atlas)

📂 Project Structure
emotion_journal_app/
 ├── backend/
 │    ├── server.js
 |    ├── config/
 │    ├── model/
 │    ├── routes/
 └── frontend/
      ├── src/
      │    ├── components/
      │    ├── App.jsx
      │    └── index.css
      └── index.html

⚙️ How to Run Locally
1. Clone the repository
git clone https://github.com/your-username/emotional-journal.git
cd emotion_journal_app

2. Run the Backend
cd backend
npm install
npm run dev

Make sure to set your environment variable or you can use mine from the :

MONGO_URI=your_mongodb_atlas_link

3. Run the Frontend
cd ../frontend
npm install
npm run dev


The frontend will run on:
👉 http://localhost:5173
The backend will run on:
👉 http://localhost:5000

📡 API Endpoints
GET /api/entries

Returns all journal entries.

POST /api/entries

Creates a new entry.

Body example:

{
  "emotion": "Happy",
  "note": "Had a productive day!"
}

🧠 Assessment Notes (What this project demonstrates)

Clean separation of frontend + backend

Good architectural thinking and REST API design

Practical use of MongoDB with Mongoose schemas

State management & real-time UI updates in React

Error handling on both client and server

Simple, clean UX with reusable UI classes

🚀 Future Enhancements (If given more time)

User authentication (private entries)

Mood analytics & charts

Dark mode

Search & filters

Pagination for large datasets

Deployment to Render + Vercel

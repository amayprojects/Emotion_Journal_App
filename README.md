📘 Emotional Journal App — Full Stack Assessment Project

This is a simple Full-Stack Emotional Journal Web App. The project allows users to log their current emotion along with a short journal entry, and view all their past entries.

The stack includes a React (Vite) frontend, Node.js + Express backend, and MongoDB Atlas for database storage.

🚀 Features

- Select or type an emotion (Happy, Sad, Angry, Calm, etc.)

- Write a short journal entry

- View all previously submitted entries

- Clean and responsive UI using Tailwind CSS

- REST API with validation and error handling

- Fully functional frontend–backend integration

🛠 Tech Stack
Frontend

- React (Vite)

- Tailwind CSS

- Fetch API for requests

Backend

- Node.js

- Express

- Mongoose (MongoDB Atlas)

⚙️ How to Run Locally
1. Clone the repository
    - git clone https://github.com/amayprojects/Emotion_Journal_App.git
    - cd Emotion_Journal_App

2. Run the Backend
    - cd backend
    - npm install
    - npm run dev

Make sure to set your environment variable or you can use mine from the repository:

- MONGO_URI=your_mongodb_atlas_link

3. Run the Frontend
    - cd ../frontend
    - npm install
    - npm run dev


The frontend will run on:
 👉 http://localhost:5173
The backend will run on:
 👉 http://localhost:5000

📡 API Endpoints
 
 - Returns all journal entries:
      - GET /api/entries

 - Creates a new entry:
      - POST /api/entries

Body example:

 {
   "emotion": "Happy",
   "note": "I am happy!"
 }

🧠 Assessment Notes (What this project demonstrates)

- Clean separation of frontend + backend

- Good architectural thinking and REST API design

- Practical use of MongoDB with Mongoose schemas

- State management & real-time UI updates in React

- Error handling on both client and server

- Simple, clean UX with reusable UI classes

🚀 Future Enhancements (If given more time)

- User authentication (private entries)

- Mood analytics & charts

- Dark mode

- Search & filters

- Pagination for large datasets

- Deployment to Render + Vercel

❔Reflection Questions
1. Architecture Thinking: Why this frontend + backend? How do they communicate?

   I used a React frontend and a Node.js (Express) backend to keep the application modular and maintainable. React handles all UI rendering, state updates, and user interactions, while the backend is responsible for validation, storing entries, and returning data. This separation makes the codebase cleaner and easier to scale.
   Both layers communicate through REST API endpoints (/api/entries for GET and POST). The frontend sends JSON using fetch(), and the backend responds with JSON from MongoDB. This simple API contract makes the system flexible for future features like authentication or mobile app support.

3. Problem Solving: What was the hardest part, and how did you solve it?

   The hardest part was ensuring the frontend and backend stayed synced, especially when a new entry was added. Without careful state management, the list wouldn’t update instantly or would require a full page reload. I solved this by lifting state in the App component and updating it immediately after receiving a successful POST response.
   Another challenge was managing error handling and invalid inputs. I added validation on both sides, frontend for user feedback, backend for data integrity, so the app behaves predictably.

3. Database Design: How is the data structured? How would you scale it for 1M users?

   To scale for 1 million users, I would:
    - Add indexes on createdAt and userId (once auth is added).
    - Move to a sharded MongoDB cluster to distribute writes.
    - Introduce pagination or infinite scroll instead of loading all entries.
    - Use a message queue (like RabbitMQ/Kafka) if write spikes occur.

5. User Experience: How did you ensure smooth, simple UX?

   I focused on a minimal, predictable flow: select emotion → type entry → save → see it instantly. The UI uses clean spacing, readable typography, and simple colors so the user never feels overwhelmed.
   Instant updates, form validation, and clear error messages help the user stay confident while using the app. The layout is responsive and mobile-friendly, ensuring a smooth experience on all devices.

7. Improvement Vision: If you had 3 more days, what would you improve?

   I would add:
    - User authentication (so each user has private journal entries).
    - Search + filters (search moods, view by date, etc.).
    - Analytics dashboard — mood charts, weekly summaries, emotional patterns.
    - Dark mode & theme customization.
    - Deployment pipeline (CI/CD with GitHub Actions).
   These would transform the app from a basic CRUD journal into a polished emotional wellness tool.

9. (NEW) Deployment Steps: List a clear, step-by-step guide to deploy both frontend & backend.

   Backend (Node + Express)
    - Push code to GitHub.
    - Create a Render / Railway / Cyclic backend project.
    - Add environment variable:
       MONGO_URI=your-mongodb-atlas-url
    - Build & deploy → get backend URL like:
       https://your-api.onrender.com

     - Verify endpoints:
        GET /api/entries
        POST /api/entries

    Frontend (Vite + React)
     - In React code, update API calls from:
        http://localhost:5000/api/entries
        to:
        https://your-api.onrender.com/api/entries
    
      - Push frontend to GitHub.
      - Deploy on Vercel / Netlify:
         Select repo
         Framework: Vite
      - Build completes → get URL like:
         https://your-journal-app.vercel.app
      - Confirm frontend + backend communication works.

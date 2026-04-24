# 🐍 SnakesLucifer AI Chat

> An advanced full-stack AI chat application built with the **MERN stack** and **Google Gemini API**, featuring real-time streaming responses, session context, MongoDB persistence, and a cinematic glassmorphic dark UI.

---

## ✨ Overview

**SnakesLucifer** is a modern AI chat assistant powered by **Google Gemini** and built using the **MERN stack** (MongoDB, Express, React, Node.js).  
It supports **real-time streaming responses** via **Server-Sent Events (SSE)** and includes an elegant **dark/light mode toggle**, chat history persistence, and safety features.

---

## 🧩 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React, CSS (Custom glassmorphic design) |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (local or Atlas) |
| **AI Engine** | Google Gemini API (Gemini 2.5 Flash / Pro) |
| **Realtime** | Server-Sent Events (SSE) |
| **Security** | JWT (optional), Rate Limiting, Input Validation |

---

## 📁 Folder Structure

SnakesLucifer/
├── nimbus-chat-backend/
│   ├── server.js
│   ├── routes/
│   │   └── chat.js
│   ├── services/
│   │   └── geminiService.js
│   ├── models/
│   │   ├── Message.js
│   │   ├── Session.js
│   │   └── User.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── rateLimiter.js
│   │   └── safetyCheck.js
│   ├── package.json
│   └── .env
│
└── nimbus-chat-frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ChatWindow.jsx
    │   │   ├── MessageBubble.jsx
    │   │   └── ProviderSelector.jsx
    │   ├── api/
    │   │   └── chatApi.js
    │   ├── App.jsx
    │   ├── index.js
    │   └── styles.css
    ├── package.json
    └── .env


---

## ⚙️ Backend Setup (`nimbus-chat-backend`)

### 1️⃣ Install dependencies
```bash
cd nimbus-chat-backend
npm install
2️⃣ Create .env
env
Copy code
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxxx.mongodb.net/snakeslucifer
GEMINI_API_KEY=YOUR_GOOGLE_GEMINI_API_KEY
GEMINI_MODEL=gemini-2.5-flash
🧩 Get your Gemini API key here: Google AI Studio

3️⃣ Run the backend
bash
Copy code
npm start
Expected output:

arduino
Copy code
✅ MongoDB connected successfully
🚀 Server running on port 5000
💻 Frontend Setup (nimbus-chat-frontend)
1️⃣ Install dependencies
bash
Copy code
cd nimbus-chat-frontend
npm install
2️⃣ Create .env (optional)
env
Copy code
REACT_APP_API_URL=http://localhost:5000
3️⃣ Run the frontend
bash
Copy code
npm start
Open 👉 http://localhost:3000

💬 Usage
Type your message in the input box

Watch Gemini stream real-time responses

Toggle 🌙 / ☀️ to switch between dark/light mode

Use 🧹 Clear Chat to reset the session

All messages are saved in MongoDB

🧠 Example API Usage
Endpoint: POST /api/chat
Send a message to the AI and get a real-time streamed response.

bash
Copy code
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello Gemini!"}'
Response:

kotlin
Copy code
data: {"text":"Hello there!"}
data: [DONE]
🧰 Environment Variables
Variable	Description
PORT	Backend server port
MONGO_URI	MongoDB connection string
GEMINI_API_KEY	Google Gemini API key
GEMINI_MODEL	Gemini model (e.g. gemini-2.5-flash)
REACT_APP_API_URL	Frontend API URL (optional)

🪄 UI Features
🖤 Cinematic Dark Theme with soft neon gradients

💎 Glassmorphic Design (blurred background with depth)

⚡ Streaming Responses via SSE

🌗 Light/Dark Toggle

🧱 Responsive Layout for all devices

✨ Smooth Transitions and animations

🧾 Example Models
If your Gemini key is active, you can list models using this snippet:

js
Copy code
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
🧰 Troubleshooting
❌ MongoDB connection failed: ECONNREFUSED 127.0.0.1:27017
Your MongoDB service isn’t running locally.
✅ Fix: Use MongoDB Atlas or start MongoDB manually:

bash
Copy code
net start MongoDB
❌ API_KEY_INVALID
Invalid Gemini API key
✅ Fix: Regenerate your key from AI Studio

❌ Stream interrupted
Usually due to CORS or frontend SSE timeout
✅ Fix: Ensure CORS is enabled and /api/chat uses Server-Sent Events

🌌 Screenshots
🖥️ Dark Theme

💡 Light Theme

🧱 Future Enhancements
🧍 User Authentication (JWT)

🧠 Session-based memory management

🔄 Chat export/download

💬 Multi-provider support (OpenAI, Claude, etc.)

🧰 Admin dashboard for monitoring token usage

🧑‍💻 Author
🐍 SnakesLucifer AI
Developed with ❤️ using Node.js + React + Gemini
💬 Powered by Google Generative AI
🌐 Inspired by ChatGPT & Gemini Web

⚖️ License
This project is open-source under the MIT License.
Feel free to fork, modify, and build upon it!

⭐ Support the Project
If you like this project, please star ⭐ the repository on GitHub — it helps a lot!

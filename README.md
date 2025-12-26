# Full Stack Authentication System (JWT)

A full-stack authentication system built using **Node.js, Express, MongoDB, and React (Vite)**.  
The project demonstrates secure authentication using **JWT (JSON Web Tokens)** with login persistence until logout.

---

## 📂 Project Structure

jwt-auth-fullstack/
│
├── Backend/ # Node.js + Express (MVC architecture)
└── Frontend/ # React (Vite)


---

## 🚀 Features

- User Registration (Signup)
- User Login
- JWT-based Authentication
- Protected Routes
- Persistent Login (until logout)
- MVC Architecture (Backend)
- Clean React Frontend (Vite)

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

### Frontend
- React
- Vite
- Axios
- React Router

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/jwt-auth-fullstack.git
cd jwt-auth-fullstack  bash
```

### 2️⃣ Backend Setup
```bash
npm install

# Create a .env file inside Backend:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


# Run backend:

npm start


# Backend runs on:

http://localhost:8080
```
### 3️⃣ Frontend Setup
```bash
cd ../Frontend
npm install
npm run dev

# Frontend runs on:
http://localhost:5173
```
### 🔐 Authentication Flow

-- User logs in or signs up
-- Backend generates JWT
-- Token is sent to frontend
-- Token is stored on client side
-- Token is sent with each request
-- Backend verifies JWT for protected routes

### 📌 Future Improvements

-- Refresh Tokens
-- Role-based authorization
-- Email verification
-- Password reset
 --Deployment (Render / Vercel)

 ### 👨‍💻 Author

-- Hussain Ali
Backen Developement 




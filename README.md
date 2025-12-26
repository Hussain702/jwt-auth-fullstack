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
cd jwt-auth-fullstack  

### 2️⃣ Backend Setup
npm install

# Create a .env file inside Backend:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


# Run backend:

npm start


Backend runs on:

http://localhost:8080



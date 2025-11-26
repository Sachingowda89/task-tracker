# 🚀 Task Tracker – MERN Stack Application  
### Modern Task Management App with Filters, Search, Sorting & Pagination  

🔗 **Live Demo:** https://task-tracker-1-0q6s.onrender.com  
📦 **Tech Stack:** React (Vite), Tailwind CSS, Redux Toolkit, Node.js, Express.js, MongoDB, Render  

---

## ✨ Project Overview

Task Tracker is a modern, responsive, and feature-rich task management application built using the **MERN stack**.  
It allows users to create, update, filter, search, sort, and track tasks smoothly with a professional UI.

This project demonstrates:

- Full-stack development using **MongoDB + Express + React + Node**
- State management using **Redux Toolkit**
- Modern UI using **Tailwind CSS**
- Clean API integration using Axios
- Deployment of both backend & frontend on **Render**

This project is built to showcase strong **Full Stack Developer** skills.

---

## 🎨 Features

### ✅ Task Management
- Create new tasks  
- Update status (Todo / In-Progress / Done)  
- Delete tasks  
- View complete task details  

### 🔍 Smart Filtering
- All Tasks  
- Todo  
- In Progress  
- Completed  
- Assigned to Me  

### 🎛️ Pagination
- Adjustable page size  
- Next / Prev navigation  

### 🎯 Modern UI Highlights
- Animated sliding filter selector (Instagram-style)  
- Beautiful color-coded status chips  
- Clean card layout  
- Responsive for all screens  
- Smooth transitions & hover effects  
- Professional modal design  

---

## 🔧 Tech Stack

### Frontend
- React (Vite)
- Redux Toolkit
- Tailwind CSS
- Axios

### Backend
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- CORS  

### Deployment
- **Frontend:** Render Static Hosting  
- **Backend:** Render Web Service  
- **Database:** MongoDB Atlas  

---

## 📂 Folder Structure

```
task-tracker/
├── client/        # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── features/
│   │   ├── api/
│   │   └── ...
│   └── ...
│
└── server/        # Backend (Node + Express)
    ├── models/
    ├── routes/
    ├── server.js
    └── ...
```

---

## 🚀 Deployment Architecture

### Backend (Render Web Service)
- Build: `npm install`
- Start: `node server.js`
- API Base URL:  
  `https://task-tracker-yfqo.onrender.com/api`

### Frontend (Render Static Site)
- Build command:
  ```
  npm install && npm run build
  ```
- Publish directory:
  ```
  dist
  ```
- Uses environment variable:
  ```
  VITE_API_URL=<backend-url>/api
  ```

---

## 📌 Environment Variables

### Backend (`server/.env`)
```
MONGODB_URI=your_mongodb_connection_string
```

### Frontend (`client/.env`)
```
VITE_API_URL=https://task-tracker-yfqo.onrender.com/api
```

---

## 🛠️ Run Locally

### Clone project
```bash
git clone https://github.com/yourusername/task-tracker.git
cd task-tracker
```

### Backend
```bash
cd server
npm install
npm start
```

### Frontend
```bash
cd ../client
npm install
npm run dev
```
## 🧩 Future Enhancements

- 🔐 JWT Authentication (Login, Signup)
- 👥 User Roles (Admin / User)
- 📬 Email Alerts (Task reminder)
- 📌 Drag & Drop task sorting
- ⏳ Activity log / Timeline history
- 📱 Mobile-first advanced UI


## ⭐ Show Your Support

If you like this project, please ⭐ the repo.  
It helps recruiters notice your work!


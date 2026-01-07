# 📝 Task Management Dashboard

A simple, responsive **Task Management Dashboard** built using **React.js**, **Redux Toolkit**, and **Tailwind CSS**.  
This project demonstrates core frontend skills such as state management, CRUD operations, UI responsiveness, and clean code practices.

---

## 🚀 Features

- ✅ View list of tasks
- ➕ Add a new task (title required)
- ✏️ Edit existing task title
- ❌ Delete a task
- 🔁 Mark task as **Pending / Completed**
- 🔍 Search tasks by title
- 🎯 Filter tasks by **All / Pending / Completed**
- 🌙 Light / Dark theme toggle
- 📱 Fully mobile-responsive UI
- 💾 Mock API using `localStorage` (no backend required)

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Mock API:** Browser `localStorage`
- **Language:** JavaScript (ES6+)

---

## 📂 Project Structure

src/
├─ app/
│ └─ store.js
├─ features/
│ └─ tasks/
│ └─ taskSlice.js
├─ components/
│ ├─ AddTask.jsx
│ ├─ TaskItem.jsx
│ ├─ TaskList.jsx
│ ├─ Filters.jsx
│ └─ ThemeToggle.jsx
├─ api/
│ └─ taskApi.js
├─ App.jsx
├─ main.jsx
└─ index.css

yaml
Copy code

---

## ⚙️ Setup & Run Locally

### 1️⃣ Clone the repository
```bash
git clone <your-github-repo-url>
cd client
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Start the development server
bash
Copy code
npm run dev
The app will run on:

arduino
Copy code
http://localhost:5173

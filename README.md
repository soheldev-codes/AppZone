# 🚀 AppZone — App Marketplace Web Application

## 🔗 Live Demo

👉 https://appzonepro.netlify.app/

## 📂 GitHub Repository

👉 https://github.com/soheldev-codes/AppZone

---

## 📌 Project Overview

**AppZone** is a modern app marketplace web application where users can explore, search, and install different applications. It provides a smooth user experience with dynamic UI, filtering, sorting, and local storage functionality.

---

## ✨ Features

### 🏠 Home Page

- Responsive banner with CTA buttons
- App statistics section
- Top apps showcase (8 apps)
- Navigation to all apps

### 📱 All Apps Page

- Live search (case-insensitive)
- Total app count display
- “No App Found” handling
- Dynamic app listing

### 📊 App Details Page

- Detailed app information
- Install button with state change
- Toast notification on install
- Review chart using Recharts
- Description section

### 💾 Installation System

- Save installed apps in localStorage
- Prevent duplicate installs
- “Installed” button state

### 📥 My Installation Page

- View all installed apps
- Uninstall functionality
- Real-time UI update
- Toast notification on uninstall

### 🔍 Sorting Feature

- Sort by downloads:
  - High → Low
  - Low → High

### ⚡ UX Enhancements

- Loading animation
- Custom error page
- Responsive design (Mobile, Tablet, Desktop)

---

## 🧱 Tech Stack

- ⚛️ React.js
- ⚡ Vite
- 🎨 Tailwind CSS
- 🌼 DaisyUI
- 📊 Recharts
- 🌐 React Router
- 🔔 React-hot-tost
- ℹ️ React-icon

---

## 📁 Project Structure

```
src/
│
├── components/
|    ├──Shared/
├── pages/
├── layouts/
├── routes/
└── DB/
```

---

## 📦 Data Structure

Each app follows this format:

```js
{
  image: string,
  title: string,
  companyName: string,
  id: number,
  description: string,
  size: number,
  reviews: number,
  ratingAvg: number,
  downloads: number,
  ratings: [
    { name: "1 star", count: number },
    { name: "2 star", count: number },
    { name: "3 star", count: number },
    { name: "4 star", count: number },
    { name: "5 star", count: number }
  ]
}
```

---

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/appzone.git

# Go to project folder
cd appzone

# Install dependencies
npm install

# Run the project
npm run dev
```

---

## 🚀 Deployment

This project is deployed using:

- Netlify

---

## 🙋‍♂️ Author

**Sohel Rana**
Full Stack Developer (MERN)

---

## ⭐ Feedback

If you like this project, feel free to give it a ⭐ on GitHub!

---

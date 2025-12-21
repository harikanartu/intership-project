# Learning Management System (LMS)

A full-stack Learning Management System built using **Spring Boot** and **React (Vite)** with role-based authentication.

---

## 🚀 Features

### Authentication & Authorization
- JWT-based authentication
- Role-based access control:
  - Admin
  - Mentor
  - Student

### Admin Module
- View platform analytics
- Manage users
- Approve mentor/student accounts

### Mentor Module
- Dashboard view
- Course creation
- Track student progress

### Student Module
- View enrolled courses
- Course progress tracking
- Certificate download

### UI Enhancements
- Landing page
- CAPTCHA on login & registration
- Password visibility toggle
- Responsive design

---

## 🛠 Tech Stack

**Frontend**
- React (Vite)
- CSS
- Axios

**Backend**
- Spring Boot
- Spring Security
- JWT
- JPA / Hibernate

**Database**
- MySQL (local)

---

## 🌐 Live Demo

Frontend deployed using GitHub Pages:

🔗 https://harikanartu.github.io/internship-project

> Note: Backend runs locally and is demonstrated in the project explanation video.

---

## ▶️ Running the Project Locally

### Backend
```bash
cd backend/backend
mvn spring-boot:run

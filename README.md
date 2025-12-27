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
- chapter creation
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
- Supabase(local)

---

## 🌐 Live Demo

Frontend deployed using GitHub Pages:
this will support only static content
the backend is designed to run locally

🔗 https://harikanartu.github.io/intership-project


> Note: Backend runs locally and is demonstrated in the project explanation video.
## 🔑 usernames and passwords for demo
- use admin username : harika@test.com
  ; password:harika
- use mentor username: mentor2@test.com    ; password:mentor2
- use student username:     student2@test.com ;
   password:student2
> these are the login credentials to check the respective pages.. admin can give approval in database only. so, i have provided credentials to check the pages

---

## ▶️ Running the Project Locally
## i have used swagger for development..
## AI useage..
 i have used chatgpt to solve code errors and for spring boot and jwt authentication as it was my first time using jwt and successfully implemented jwt authentication
 i have also used copilot for debugging purpose for few codes

### Backend
```bash
cd backend/backend
mvn clean compile -X
mvn spring-boot:run

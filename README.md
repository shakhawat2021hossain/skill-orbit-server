# 🎓 Skill Orbit Server

Skill Orbit Server is the backend API for the **Skill Orbit** online learning platform.  
It powers authentication, user roles, course management, enrollments, payments, and more — built with scalability, security, and clean architecture in mind.

---

## 🚀 Features

- 🔐 **Authentication & Authorization**
  - JWT-based authentication
  - Role-based access control (Admin, Instructor, Student)
  - Secure password hashing
  - Forgot & reset password flow

- 👤 **User Management**
  - User registration & login
  - Profile management
  - Instructor & student roles

- 📚 **Course Management**
  - Create, update, delete courses
  - Publish/unpublish courses
  - Public & protected course access
  - Category & level support

- 📝 **Enrollment System**
  - Course enrollment
  - Instructor-wise enrollment tracking
  - Student course progress

- 📊 **Pagination, Sorting & Filtering**
  - Server-side pagination
  - Dynamic sorting
  - Advanced filtering support

- 🗄️ **Database & Performance**
  - MongoDB with Mongoose
  - Aggregation pipelines
  - Indexing for performance

- ☁️ **Media & Utilities**
  - Cloudinary integration for media uploads
  - Email service (Nodemailer)
  - Redis (optional) for caching & performance

---

## 🧰 Tech Stack

**Backend**
- Node.js
- Express.js
- TypeScript

**Database**
- MongoDB
- Mongoose

**Utilities & Tools**
- JWT
- Bcrypt
- Zod (validation)
- Nodemailer
- Cloudinary
- Redis (optional)
- ESLint & Prettier

---

## 📁 Project Structure
```plaintext
src/
├── app/
│   ├── middlewares/
│   ├── config/
│   ├── utils/
│   ├── modules/
│   │   ├── auth/
│   │   ├── user/
│   │   ├── course/
├── app.ts
├── server.ts
```


## API Endpoints

### 🔐 Auth Routes (`/auth`)

| Method | Endpoint | Access | Description |
|------|---------|--------|-------------|
| POST | `/auth/register` | Public | Register a new user |
| POST | `/auth/login` | Public | User login |
| POST | `/auth/refresh-token` | Public | Refresh access token |
| POST | `/auth/forgot-password` | Public | Send reset password email |
| POST | `/auth/reset-password` | Public | Reset password |

---

### 👤 User Routes (`/user`)

| Method | Endpoint | Access | Description |
|------|---------|--------|-------------|
| GET | `/user/all` | Admin | Get all users |
| GET | `/user/me` | Admin, Instructor, Student | Get own profile |
| PATCH | `/user/:id/update` | Admin, Instructor, Student | Update own profile |
| GET | `/user/details` | Instructor | Get instructor details |
| GET | `/user/:userId` | Admin | Get user by ID |
| PATCH | `/user/:userId` | Admin | Update user |
| DELETE | `/user/:userId` | Admin | Delete user |

---

### 📚 Course Routes (`/course`)

| Method | Endpoint | Access | Description |
|------|---------|--------|-------------|
| POST | `/course/create-course` | Instructor | Create a course |
| GET | `/course/all` | Public | Get all public courses |
| GET | `/course/ins-courses` | Instructor | Get instructor courses |
| GET | `/course/for-admin` | Admin | Get courses (admin view) |
| GET | `/course/my-courses` | Student | Get enrolled courses |
| GET | `/course/:courseId` | Public | Get public course details |
| PATCH | `/course/:courseId` | Instructor | Update course |
| PATCH | `/course/:courseId/toggle-delete` | Admin | Soft delete / restore course |

---

### 📘 Lesson Routes (`/lesson`)

| Method | Endpoint | Access | Description |
|------|---------|--------|-------------|
| POST | `/lesson/create/:courseId` | Instructor | Create lesson |
| PATCH | `/lesson/:courseId/:lessonId` | Instructor | Update lesson |
| DELETE | `/lesson/:courseId/:lessonId` | Instructor | Delete lesson |

---

### 📝 Enrollment Routes (`/enrollment`)

| Method | Endpoint | Access | Description |
|------|---------|--------|-------------|
| GET | `/enrollment/data` | Instructor | Get instructor enrollments |
| GET | `/enrollment/:courseId` | Student | Get enrolled course |
| POST | `/enrollment/:courseId/enroll` | Student | Enroll in course |
| PATCH | `/enrollment/:courseId/progress/:lessonId` | Student | Update lesson progress |

---

### ❤️ Wishlist Routes (`/wishlist`)

| Method | Endpoint | Access | Description |
|------|---------|--------|-------------|
| POST | `/wishlist/:courseId` | Student | Add to wishlist |
| GET | `/wishlist` | Student | Get wishlist |
| DELETE | `/wishlist/:courseId` | Student | Remove from wishlist |

---

### ⭐ Review Routes (`/review`)

| Method | Endpoint | Access | Description |
|------|---------|--------|-------------|
| POST | `/review/add` | Student | Post a review |
| GET | `/review/:courseId` | Public | Get course reviews |

---

### 🧾 Metadata Routes (`/metadata`)

| Method | Endpoint | Access | Description |
|------|---------|--------|-------------|
| GET | `/metadata/user` | Admin, Instructor, Student | Get user metadata |

---

## 🔑 Role Definitions

- **ADMIN** – Full system access
- **INSTRUCTOR** – Course & lesson management
- **STUDENT** – Enrollment, reviews, wishlist

---

## 📌 Notes

- All protected routes require a valid **JWT Access Token**
- Pagination, sorting & filtering supported on list endpoints
- Role-based authorization enforced via middleware

---




## 🔐 Login Credentials

Use the following demo accounts to explore the website:

**Admin Account**  
📧 Email: `admin@skillorbit.com`  
🔑 Password: `Admin123%$`


> ⚠️ These credentials are for testing and demonstration purposes only.



## ⚙️ Setup Instructions

1. **Clone repository**
 ```bash
 git clone <your-repo-url>
 cd <repo-directory>
```
2. **Install Dependencies**
 ```bash
   npm install
 ```
3. **Create a .env file**
```bash
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   ACCESS_TOKEN_SECRET=<strong_jwt_secret>
   REFRESH_TOKEN_SECRET=<optional_if_using_refresh_tokens>
 ```
4. Run the server
 ```bash
   npm run dev
 ```

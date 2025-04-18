

# 📘 Course Learning App Backend

This is a full-featured backend API for a Course Learning App built with , Express.js, TypeScript and MongoDB (Mongoose)

---
# Features

- User authentication & authorization (Student, Teacher roles)
- Course creation, enrollment & following System
- Lesson & Topic management per course
- Content structure: Course >> Lesson >> Topic
- Feedback & like system Student
- Pagination and Search By title
- Type-safe with TypeScript
- Global error Handeling 

---

## 🧑‍💻 Technology

- Backend: Node.js, Express.js, TypeScript
- Database: MongoDB + Mongoose
- Auth: JWT
- Validation:Zod 
- Hashing: bcrypt
- Environment: dotenv

---

##  Install Dependencies

npm install


## Set Environment Variables

DATABASE_URL=
PORT=
Bctypt=
JWT_SECRET=
JWT_EXPIRES_IN=2d

## Run the Server
npm run dev

##  API Endpoints

##  register
POST	/api/vi/auth/register	Register a new user
POST	/api/vi/auth/login	    User Login 
## Course

POST     /api/v1/course/create               Course Create
GET      /api/v1/course                      Course Get All 
DELETE   /api/v1/:id                        Course Delete By id
Patch    /api/v1/:id                        Course Update By id
   
POST    /api/v1/course/like:courseId        Course Like Student
POST    /api/v1/course/feedback/:courseId   Course Feedback
POST    /api/v1/course//follow/:courseId    Course Fllow
POST    /api/v1/course/enroll/:courseId     Course Enroll Student


## Full Postman collection :


##  Contact
Made with ❤️ by Hridoy Chandra Roy
GitHub | LinkedIn
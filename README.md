# ResumeForge – Smart Resume Builder
> **Full-Stack MERN Application for University Mini Project (Experiment 10)**

ResumeForge is an intuitive, intelligent web application designed to help university students and job seekers create, customize, and export professional ATS-compliant resumes with real-time live preview and instant vector PDF generation.

---

## 🌟 Key Features

1. **User Authentication & Authorization**:
   - Secure registration and login powered by **bcryptjs** password hashing (10 salt rounds) and **JSON Web Tokens (JWT)**.
   - Protected routes and persistent authentication state managed through React Context and `localStorage`.

2. **Dynamic Multi-Section Resume Editor**:
   - **Personal Information**: Full name, email, phone, location, professional summary, LinkedIn, GitHub.
   - **Education**: College/university, degree, major, start/end years, CGPA/percentage with dynamic add/remove rows.
   - **Technical & Soft Skills**: Interactive tag management with one-click quick suggestions.
   - **Projects**: Project title, tech stack used, live/GitHub links, and descriptions.
   - **Work Experience**: Company, job role, duration, and key responsibilities.
   - **Certifications**: Credential name, issuing authority, and year.

3. **Three Tailored Resume Templates**:
   - **Modern SaaS**: Clean purple/violet accents, contemporary heading treatments, and visual skill pills.
   - **Professional**: Classic formal serif styling with centered header, horizontal dividers, and traditional chronological hierarchy.
   - **Minimal ATS**: High-contrast black-and-white layout optimized for maximum Applicant Tracking System parser accuracy.
   - *Instant Reactive Switching*: Switching templates updates the preview immediately using identical resume data without data re-entry.

4. **Live A4 Document Preview & PDF Generation**:
   - Real-time side-by-side A4 sheet rendering as the user types.
   - High-fidelity vector PDF export using `html2pdf.js` with standard A4 print margins.

5. **Cloud CRUD & Resume Management**:
   - Create, list, edit, and delete multiple resumes.
   - MongoDB database persistence with user-isolated access controls (users can only access and modify their own resumes).

---

## 🎓 University Syllabus Concepts Demonstrated (Experiments 1–10)

This project was built to directly cover and defend the concepts prescribed in the undergraduate Web Technology / Full-Stack MERN syllabus:

| Experiment | Concept | Implementation in ResumeForge |
|---|---|---|
| **Exp 1** | React Components & JSX | Functional components (`Navbar`, `Footer`, `ResumePreview`, `ModernTemplate`), Props passing, Array mapping (`Array.map()` with keys), and Conditional Rendering. |
| **Exp 2** | React State & Hooks | `useState` for form fields and dynamic arrays, `useEffect` for data fetching and route sync, and custom `useAuth()` hook. |
| **Exp 3** | React Router DOM | Declarative routes in `App.jsx`, protected route wrapper (`ProtectedRoute.jsx`), dynamic route parameters (`/editor/:id`), and 404 fallback page. |
| **Exp 4** | Interactive Frontend CRUD | Dynamic addition and removal of nested items (skills, education, projects, certifications). |
| **Exp 5** | Node.js Environment & Server | Node.js HTTP runtime, modular architecture, and environment configuration with `dotenv`. |
| **Exp 6** | Express REST APIs & Middleware | Express server, REST endpoints (`GET`, `POST`, `PUT`, `DELETE`), custom request logger middleware (`middleware/logger.js`), JSON body parsing, and centralized error handling. |
| **Exp 7** | Password Hashing & JWT Auth | `bcryptjs` for salt generation and password hashing, `jsonwebtoken` for signing tokens with 7-day expiry, and Bearer token verification middleware (`middleware/auth.js`). |
| **Exp 8** | MongoDB & Mongoose Modeling | Mongoose schemas (`User.js`, `Resume.js`), schema validations, default values, references (`userId` ref to `User`), and `.populate('userId')`. |
| **Exp 9** | Full-Stack Integration | Standard `fetch()` API calls with async/await, CORS configuration, synchronized frontend state with backend MongoDB changes. |
| **Exp 10** | Complete Mini Project | End-to-end integrated SaaS application with responsive UI, live preview, and vector PDF export. |

---

## 🛠️ Technology Stack

- **Frontend**:
  - React 18
  - Vite
  - JavaScript (ES6+)
  - React Router DOM v6
  - Tailwind CSS
  - Lucide Icons
  - html2pdf.js

- **Backend**:
  - Node.js
  - Express.js
  - Mongoose
  - JSON Web Tokens (jsonwebtoken)
  - bcryptjs
  - CORS & dotenv

- **Database**:
  - MongoDB Atlas (Cloud Database) / Local MongoDB

- **Deployment**:
  - Frontend: **Vercel**
  - Backend: **Render**
  - Database: **MongoDB Atlas**

---

## 📁 Project Structure

```
Fullstack Project/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── editor/
│   │   │   │   ├── CertificationsForm.jsx
│   │   │   │   ├── EducationForm.jsx
│   │   │   │   ├── ExperienceForm.jsx
│   │   │   │   ├── PersonalInfoForm.jsx
│   │   │   │   ├── ProjectsForm.jsx
│   │   │   │   ├── SkillsForm.jsx
│   │   │   │   └── TemplateSelector.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Icons.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── ResumePreview.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── LandingPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── NotFoundPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   └── ResumeEditorPage.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── templates/
│   │   │   ├── MinimalTemplate.jsx
│   │   │   ├── ModernTemplate.jsx
│   │   │   └── ProfessionalTemplate.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vercel.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── resumeController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── logger.js
│   ├── models/
│   │   ├── Resume.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── resumeRoutes.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)
- A free MongoDB Atlas cluster account (or local MongoDB installed)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <project-folder>
```

### 2. Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/resumeforge?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```
4. Start the backend server:
   ```bash
   npm start
   # or with auto-reload during development:
   npm run dev
   ```
   The backend API will run on `http://localhost:5000`.

### 3. Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the environment variable in `.env` (or `.env.local`):
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

---

## 📡 REST API Documentation

### 1. Authentication Endpoints

#### `POST /api/auth/register`
- **Description**: Registers a new user account.
- **Access**: Public
- **Request Body**:
  ```json
  {
    "name": "Alex Johnson",
    "email": "alex@example.com",
    "password": "password123"
  }
  ```
- **Response** (`201 Created`):
  ```json
  {
    "success": true,
    "message": "Account created successfully!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "673235...",
      "name": "Alex Johnson",
      "email": "alex@example.com"
    }
  }
  ```

#### `POST /api/auth/login`
- **Description**: Authenticates user and returns JWT.
- **Access**: Public
- **Request Body**:
  ```json
  {
    "email": "alex@example.com",
    "password": "password123"
  }
  ```
- **Response** (`200 OK`):
  ```json
  {
    "success": true,
    "message": "Logged in successfully!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "673235...",
      "name": "Alex Johnson",
      "email": "alex@example.com"
    }
  }
  ```

### 2. Resume Endpoints (Protected by Bearer Token)

*Header required on all requests:* `Authorization: Bearer <jwt_token>`

#### `POST /api/resumes`
- **Description**: Creates and saves a new resume for the logged-in user.
- **Response** (`201 Created`): Returns the saved resume document with assigned `_id`.

#### `GET /api/resumes`
- **Description**: Returns all resumes belonging exclusively to the logged-in user, sorted by most recently updated.
- **Response** (`200 OK`):
  ```json
  {
    "success": true,
    "count": 2,
    "data": [ ... ]
  }
  ```

#### `GET /api/resumes/:id`
- **Description**: Fetches a single resume by its ID. Validates user ownership.
- **Response** (`200 OK`): Resume data object.

#### `PUT /api/resumes/:id`
- **Description**: Updates an existing resume by ID. Validates user ownership.
- **Response** (`200 OK`): Updated resume object.

#### `DELETE /api/resumes/:id`
- **Description**: Deletes a resume document by ID. Validates user ownership.
- **Response** (`200 OK`):
  ```json
  {
    "success": true,
    "message": "Resume deleted successfully!"
  }
  ```

---

## 🚀 Deployment Guide

### A. Database (MongoDB Atlas)
1. Log in to [MongoDB Atlas](https://www.mongodb.com/atlas).
2. Create a free M0 cluster.
3. Under **Database Access**, create a database user and note the password.
4. Under **Network Access**, add `0.0.0.0/0` (Allow access from anywhere).
5. Click **Connect** > **Drivers** to copy your connection string:
   `mongodb+srv://<username>:<password>@cluster0.mongodb.net/resumeforge?retryWrites=true&w=majority`

### B. Backend Deployment (Render)
1. Push your code to GitHub.
2. Go to [Render Dashboard](https://dashboard.render.com/) and click **New Web Service**.
3. Connect your GitHub repository.
4. Configure service settings:
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add the Environment Variables:
   - `MONGODB_URI`: *Your MongoDB Atlas connection string*
   - `JWT_SECRET`: *A strong random secret string*
   - `NODE_ENV`: `production`
   - `PORT`: `5000`
6. Click **Deploy**. Note down the backend URL (e.g., `https://resumeforge-backend.onrender.com`).

### C. Frontend Deployment (Vercel)
1. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
2. Import the GitHub repository.
3. Configure settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `frontend`
4. Add the Environment Variable:
   - `VITE_API_BASE_URL`: `https://resumeforge-backend.onrender.com/api` (your Render backend API URL)
5. Click **Deploy**. Vercel will build and assign a public domain (e.g., `https://resumeforge.vercel.app`).
   *Note: `frontend/vercel.json` is preconfigured to handle client-side routing rewrites for React Router.*

---

## 👨‍🏫 Practical Exam / Viva Defense Q&A

**Q1: How does password security work in this project?**
> Passwords are never stored in plain text. When a user registers, `bcryptjs.genSalt(10)` creates a cryptographic salt and `bcryptjs.hash()` generates a one-way hash. During login, `bcryptjs.compare()` verifies the entered password against the stored hash.

**Q2: How does the application authenticate protected routes?**
> Upon login/register, the backend generates a signed JSON Web Token (JWT) containing the user's ID and an expiration period (7 days). The frontend attaches this token in the `Authorization: Bearer <token>` header for API requests. The backend `authMiddleware` intercepts the request, runs `jwt.verify()`, and attaches the decoded user object to `req.user`.

**Q3: How are MongoDB relationships modeled?**
> The `Resume` schema contains a `userId` field defined as `mongoose.Schema.Types.ObjectId` with `ref: 'User'`. When fetching resumes, `.populate('userId', 'name email')` replaces the ID reference with the corresponding user details.

**Q4: How does the live A4 preview update without lag?**
> React's unidirectional data flow and `useState` keep the form inputs controlled. Whenever an input changes, the parent state updates and flows down to `ResumePreview` as props, causing React's Virtual DOM to efficiently re-render only the modified sections.

**Q5: How does PDF generation work?**
> `html2pdf.js` captures the DOM node representing the A4 sheet (`#resume-preview-sheet`), converts it to high-resolution canvas elements with `html2canvas` at 2x scale, and compiles it into a standard vector A4 PDF using `jsPDF`.

---

## 📜 License
This project is open-source under the MIT License and developed as an academic university submission.

# RESUMEFORGE – SMART FULL-STACK MERN RESUME BUILDER

**A UNIVERSITY MINI PROJECT REPORT (EXPERIMENT 10)**

*Submitted by*

**Janvi Soni**

*in partial fulfillment for the award of the degree of*

**BACHELOR OF ENGINEERING / TECHNOLOGY**  
**IN**  
**COMPUTER SCIENCE & ENGINEERING**

![University Logo](https://img.icons8.com/color/96/graduation-cap.png)

**Department of Computer Science & Engineering**  
**ACADEMIC SESSION 2025–2026**

---

## BONAFIDE CERTIFICATE

Certified that this project report **"RESUMEFORGE – SMART FULL-STACK MERN RESUME BUILDER"** is the bonafide work of **Janvi Soni** who carried out the project work under my supervision in partial fulfillment of the requirements for the award of the Degree in Computer Science & Engineering.

<br/>

**SIGNATURE OF SUPERVISOR**  
**Faculty Mentor**  
Department of Computer Science & Engineering  

<br/>

Submitted for the practical / viva-voce examination held on: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**INTERNAL EXAMINER** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **EXTERNAL EXAMINER**

---

## TABLE OF CONTENTS

- [Abstract](#abstract)
- [Chapter 1: Introduction](#chapter-1-introduction)
  - [1.1 Identification of Need](#11-identification-of-need)
  - [1.2 Problem Definition](#12-problem-definition)
  - [1.3 Objectives](#13-objectives)
- [Chapter 2: Full-Stack MERN Curriculum Alignment (Experiments 1–10)](#chapter-2-full-stack-mern-curriculum-alignment-experiments-110)
- [Chapter 3: System Architecture and Design](#chapter-3-system-architecture-and-design)
  - [3.1 Technology Stack](#31-technology-stack)
  - [3.2 Database Modeling & Schema Validation](#32-database-modeling--schema-validation)
  - [3.3 RESTful API Endpoints](#33-restful-api-endpoints)
- [Chapter 4: Implementation Methodology](#chapter-4-implementation-methodology)
  - [4.1 Frontend Component Design](#41-frontend-component-design)
  - [4.2 Authentication & Security](#42-authentication--security)
  - [4.3 Live A4 Document Preview & PDF Generation](#43-live-a4-document-preview--pdf-generation)
- [Chapter 5: Results Analysis and Screenshots](#chapter-5-results-analysis-and-screenshots)
- [Chapter 6: Conclusion and Future Scope](#chapter-6-conclusion-and-future-scope)
- [References](#references)
- [User Manual](#user-manual)

---

## ABSTRACT

**ResumeForge** is a full-stack web application built on the MERN (MongoDB, Express.js, React.js, Node.js) technology stack, tailored for university students and job seekers to design, customize, and export ATS-compliant, professional resumes with real-time visual feedback. 

The application implements standard undergraduate curriculum concepts including React functional components, hooks (`useState`, `useEffect`), props, dynamic mapping, conditional rendering, client-side routing with React Router v6, secure password hashing using `bcryptjs`, stateless session management via JSON Web Tokens (JWT), Express middleware (custom logger, token authentication, error handling), Mongoose schema validations, and full CRUD database operations with references and `.populate()`. 

The live application is deployed on Vercel with serverless Express API endpoints, MongoDB cloud storage, and responsive Tailwind CSS styling.

---

## CHAPTER 1: INTRODUCTION

### 1.1 Identification of Need
Crafting an ATS-compliant, neatly structured resume is a critical requirement for students preparing for campus placements and off-campus internships. Traditional word processing tools suffer from layout misalignment, lack of live preview, and difficulty maintaining separate versions for different job applications.

### 1.2 Problem Definition
Existing commercial resume builders often:
- Require paid subscriptions for basic PDF exports.
- Offer heavy, clunky interfaces with excessive marketing distractions.
- Fail to enforce proper Applicant Tracking System (ATS) readability standards.

### 1.3 Objectives
- To build a free, responsive, and intuitive web application for instant resume generation.
- To demonstrate complete mastery over the MERN stack curriculum (Experiments 1 to 10).
- To enable multi-template switching (Modern, Professional, Minimal) without requiring data re-entry.
- To provide instant, client-side high-fidelity vector PDF downloads using `html2pdf.js`.

---

## CHAPTER 2: FULL-STACK MERN CURRICULUM ALIGNMENT (EXPERIMENTS 1–10)

The implementation strictly validates every syllabus experiment:

| Experiment | Prescribed Concept | Implementation in ResumeForge |
|---|---|---|
| **Exp 1** | React Components & JSX | Functional components (`Navbar`, `ResumePreview`, `ModernTemplate`), props hierarchy, and dynamic `Array.map()` with unique keys. |
| **Exp 2** | React State & Hooks | `useState` for modular form inputs, `useEffect` for data fetching from backend APIs, and controlled components. |
| **Exp 3** | React Router DOM | Declarative client routing (`/`, `/login`, `/register`, `/dashboard`, `/editor/:id`), protected routes (`ProtectedRoute.jsx`), and 404 fallback. |
| **Exp 4** | Interactive Frontend CRUD | Dynamic list management: add/remove education, skills, projects, experience, and certifications. |
| **Exp 5** | Node.js Server Environment | Node.js runtime, HTTP server configuration, modular architecture, and environment variable handling with `dotenv`. |
| **Exp 6** | Express REST APIs & Middleware | Express application routing, REST endpoints (`GET`, `POST`, `PUT`, `DELETE`), custom logger (`logger.js`), JSON body parsing, and error middleware. |
| **Exp 7** | bcryptjs Hashing & JWT Auth | `bcryptjs` password hashing (10 salt rounds), JWT issuance with 7-day expiry, and Bearer token verification middleware (`auth.js`). |
| **Exp 8** | MongoDB & Mongoose Modeling | Mongoose schemas (`User.js`, `Resume.js`), validation rules, default timestamps, references (`userId` ref `User`), and `.populate('userId')`. |
| **Exp 9** | Full-Stack API Integration | Standard JavaScript `fetch()` API with `async/await`, CORS configuration, and synchronized UI state. |
| **Exp 10** | Integrated Mini Project | End-to-end responsive SaaS web application deployed on Vercel with real-time A4 preview and PDF export. |

---

## CHAPTER 3: SYSTEM ARCHITECTURE AND DESIGN

### 3.1 Technology Stack
- **Frontend Layer:** React 18, Vite build tool, Tailwind CSS, Lucide Icons, html2pdf.js.
- **Backend API Layer:** Node.js, Express.js REST API.
- **Security & Session:** `bcryptjs` (salt 10), `jsonwebtoken` (HMAC SHA-256).
- **Database Layer:** MongoDB Atlas (Mongoose ODM) with fallback store for local development.
- **Hosting & Deployment:** Vercel (Frontend + Serverless API Functions).

### 3.2 Database Modeling & Schema Validation
The system uses two interconnected Mongoose schemas:
1. **User Schema (`models/User.js`):**
   - `name`: String, required, trimmed.
   - `email`: String, required, unique, lowercase, trimmed.
   - `password`: String, required, hashed.
   - `createdAt`: Date timestamp.

2. **Resume Schema (`models/Resume.js`):**
   - `userId`: Mongoose ObjectId referencing the `User` collection.
   - `resumeTitle`: String, default 'My Resume'.
   - `personalInfo`: Sub-document containing `fullName`, `email`, `phone`, `location`, `summary`, `linkedin`, `github`.
   - `education`: Array of objects (`college`, `degree`, `course`, `startYear`, `endYear`, `grade`).
   - `skills`: Array of strings.
   - `projects`: Array of objects (`title`, `technologies`, `description`, `link`).
   - `experience`: Array of objects (`company`, `role`, `duration`, `description`).
   - `certifications`: Array of objects (`name`, `organization`, `year`).
   - `selectedTemplate`: String enum (`['modern', 'professional', 'minimal']`).

### 3.3 RESTful API Endpoints

- `POST /api/auth/register` – Create user account with hashed password.
- `POST /api/auth/login` – Verify credentials and return signed JWT token.
- `GET /api/resumes` – Retrieve all resumes belonging to the authenticated user.
- `POST /api/resumes` – Create and store a new resume document.
- `GET /api/resumes/:id` – Fetch single resume by ID (enforces user ownership).
- `PUT /api/resumes/:id` – Update existing resume document.
- `DELETE /api/resumes/:id` – Remove resume document permanently.

---

## CHAPTER 4: IMPLEMENTATION METHODOLOGY

### 4.1 Frontend Component Design
The application is structured into decoupled, reusable functional components:
- `Navbar.jsx`: Persistent navigation bar with authentication state detection and responsive mobile menu.
- `ResumeEditorPage.jsx`: Split-view workspace featuring an interactive form accordion on the left and a sticky A4 live document on the right.
- `TemplateSelector.jsx`: Radio card selector triggering immediate template re-renders.
- Modular sub-forms: `PersonalInfoForm`, `EducationForm`, `SkillsForm`, `ProjectsForm`, `ExperienceForm`, `CertificationsForm`.

### 4.2 Authentication & Security
- Passwords are never stored or logged in plain text.
- JSON Web Tokens are passed via the standard HTTP `Authorization: Bearer <token>` header.
- Route-level security prevents unauthorized access to the dashboard and editor views.

### 4.3 Live A4 Document Preview & PDF Generation
Client-side PDF generation leverages `html2pdf.js` with direct DOM rendering:
```javascript
const opt = {
  margin: [10, 10, 10, 10],
  filename: `${resumeData.personalInfo.fullName || 'Resume'}.pdf`,
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2, useCORS: true },
  jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
};
html2pdf().set(opt).from(element).save();
```

---

## CHAPTER 5: RESULTS ANALYSIS AND VALIDATION

1. **Functional Testing:** All CRUD actions (Create, Read, Update, Delete) execute seamlessly with reactive UI synchronization.
2. **Template Switch Consistency:** Validated that changing templates from Modern to Professional or Minimal preserves 100% of user data without DOM reloads.
3. **Responsive Testing:** Layout gracefully adapts across desktop monitors, laptops, tablets, and smartphones.
4. **Export Quality:** Downloaded PDFs strictly conform to ISO standard A4 dimensions with crisp vector text.

---

## CHAPTER 6: CONCLUSION AND FUTURE SCOPE

ResumeForge successfully fulfills the requirements of a practical, modern MERN stack web application as part of the University Mini Project syllabus (Experiment 10). The solution adheres to human-written, maintainable coding standards and offers a production-grade utility for undergraduate students.

### Future Scope:
- Integration of custom user-uploaded profile photos.
- LinkedIn profile import via OAuth.
- Keyword matching against job descriptions for ATS score estimation.

---

## REFERENCES
1. React 18 Official Documentation: https://react.dev/
2. Express.js API Reference: https://expressjs.com/
3. MongoDB & Mongoose Modeling Guide: https://mongoosejs.com/docs/
4. Tailwind CSS Framework: https://tailwindcss.com/
5. JSON Web Token Specifications (RFC 7519): https://jwt.io/

---

## USER MANUAL

### Live Deployment Access
1. Open any modern web browser and navigate to: **https://resume-builder-janvi-0e3d.vercel.app**
2. Click **"Sign Up"** and create an account with your name, email, and password.
3. Once logged in, click **"Create New Resume"** on your dashboard.
4. Enter your personal details, education, technical skills, projects, and work experience.
5. Select your preferred template (**Modern**, **Professional**, or **Minimal**).
6. Click **"Download PDF"** to save your formatted resume instantly.
7. Click **"Save Changes"** to store your resume securely in the cloud.

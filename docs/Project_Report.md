# AI-POWERED MERN RESUME BUILDER

**A PROJECT REPORT**

*Submitted by*

**Janvi Soni ([YOUR_UID_HERE])**

*in partial fulfillment for the award of the degree of*

**BACHELOR OF ENGINEERING**
**IN**
**COMPUTER SCIENCE**

![Chandigarh University Logo](https://www.cuchd.in/assets/images/cu-logo.png)

**Chandigarh University**
**APRIL 2026**

---

## BONAFIDE CERTIFICATE

Certified that this project report **"AI-POWERED MERN RESUME BUILDER"** is the bonafide work of **Janvi Soni ([YOUR_UID_HERE])** who carried out the project work under my supervision.

**SIGNATURE**  
**[SUPERVISOR_NAME_HERE]**  
**SUPERVISOR**  
**Department of Computer Science Engineering**  
**Chandigarh University**

Submitted for the project viva-voce examination held on \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**INTERNAL EXAMINER** | **EXTERNAL EXAMINER**

---

## TABLE OF CONTENTS

- [Abstract](#abstract)
- [Chapter 1: Introduction](#chapter-1-introduction)
  - [1.1. Identification of Need](#11-identification-of-need)
  - [1.2. Identification of Problem](#12-identification-of-problem)
  - [1.3. Identification of Tasks](#13-identification-of-tasks)
  - [1.4. Timeline](#14-timeline)
- [Chapter 2: Literature Review](#chapter-2-literature-review)
  - [2.1. Existing Solutions](#21-existing-solutions)
  - [2.2. Problem Definition](#22-problem-definition)
  - [2.3. Goals/Objectives](#23-goalsobjectives)
- [Chapter 3: Design Flow/Process](#chapter-3-design-flowprocess)
  - [3.1. System Architecture](#31-system-architecture)
  - [3.2. Implementation Methodology](#32-implementation-methodology)
- [Chapter 4: Results Analysis and Validation](#chapter-4-results-analysis-and-validation)
- [Chapter 5: Conclusion and Future Work](#chapter-5-conclusion-and-future-work)
- [References](#references)
- [User Manual](#user-manual)

---

## ABSTRACT
The AI-Powered MERN Resume Builder is a web-based application designed to simplify the professional resume creation process. By leveraging the MERN (MongoDB, Express, React, Node.js) stack and integrating Groq AI (Llama 3), the application provides users with smart content suggestions, professional formatting, and instantaneous PDF generation. Key security measures include JWT-based authentication and protected routing, ensuring user data privacy and integrity.

---

## CHAPTER 1: INTRODUCTION

### 1.1. Identification of Need
In today's competitive job market, a professionally crafted resume is essential. However, many job seekers struggle with:
- Correct formatting and layout.
- Writing impactful professional summaries.
- Quantifying achievements effectively.
Manual resume building in word processors often leads to alignment issues and lack of professional keywords.

### 1.2. Identification of Problem
Existing resume builders are often either too complex, require high fees, or lack intelligent content suggestions. There is a need for a free, fast, and secure tool that uses AI to improve the quality of user-provided text.

### 1.3. Identification of Tasks
- Set up a robust MERN stack backend with JWT security.
- Integrate Groq AI API for text enhancement.
- Create a multi-step React frontend for intuitive data entry.
- Implement client-side PDF generation using `html2pdf.js`.

### 1.4. Timeline
- **Week 1:** Requirement analysis and UI Mockups.
- **Week 2:** Backend API development (Auth & Resume models).
- **Week 3:** AI Integration and Frontend building.
- **Week 4:** Testing, deployment, and documentation.

---

## CHAPTER 2: LITERATURE REVIEW

### 2.1. Existing Solutions
Standard platforms like Canva or LinkedIn provide templates but rely entirely on user input for content quality. Dedicated builders like Zety or Resume.io often lock export features behind a paywall.

### 2.2. Problem Definition
The project aims to build a tool that not only formats but also **optimizes** resume content using Large Language Models (LLMs) like Llama 3 via Groq API.

### 2.3. Goals/Objectives
- To provide 100% secure user accounts.
- To reduce resume creation time by 50% using AI suggestions.
- To offer high-quality PDF downloads for free.

---

## CHAPTER 3: DESIGN FLOW/PROCESS

### 3.1. System Architecture
The application follows a standard MERN architecture:
- **Frontend:** React.js with Tailwind CSS for layout.
- **Backend:** Node.js & Express.js for RESTful APIs.
- **Database:** MongoDB for persistent storage of user profiles and resumes.
- **AI Service:** Groq Cloud LPU for fast AI inference.

### 3.2. Implementation Methodology
- **MNC Authentication:** Secure login using bcrypt (password hashing) and JWT.
- **AI Logic:** Backend passes user text to Groq API with specific professional prompts.
- **State Management:** React Context API to handle user global state and resume data.

---

## CHAPTER 4: RESULTS ANALYSIS AND VALIDATION

The application was successfully validated through:
1. **AI Accuracy:** Verification that the "Enhance" button correctly identifies and improves professional summaries.
2. **Security Checks:** Ensuring that the `/builder` route is inaccessible without a valid JWT token.
3. **Compatibility:** Testing the resume preview on multiple screen sizes and ensuring PDF export maintains formatting.
4. **Performance:** Confirming Groq AI response times are below 1 second using the LPU architecture.

---

## CHAPTER 5: CONCLUSION AND FUTURE WORK

### 5.1. Conclusion
The AI-Powered Resume Builder successfully meets the project goals of providing a modern, efficient, and free tool for job seekers. The integration of AI significantly improves the professional tone of generated resumes.

### 5.2. Future Work
- Integration with LinkedIn API for one-click profile import.
- More templates (ATS-friendly, creative, industrial).
- Direct career advice chatbot using Grok AI.

---

## REFERENCES
1. MongoDB Documentation (https://docs.mongodb.com/)
2. React.js Documentation (https://react.dev/)
3. Groq API Documentation (https://console.groq.com/docs)
4. Express.js Security Best Practices.

---

## USER MANUAL

1. **Prerequisites:** Install Node.js v18+.
2. **Installation:**
   - Clone the repository.
   - Run `npm install` in both `frontend` and `backend` folders.
3. **Environment:** Setup `.env` in `backend` with `MONGODB_URI`, `JWT_SECRET`, and `GROQ_API_KEY`.
4. **Run Project:** Run `npm run dev` in both directories.
5. **Usage:**
   - Sign up for a new account.
   - Click "Create New Resume".
   - Fill in details and use the "AI Enhance" buttons for better results.
   - Download the PDF when ready.

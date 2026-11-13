const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

async function createPresentation() {
  const prs = new pptxgen();

  // 16:9 widescreen layout
  prs.layout = 'LAYOUT_16x9';
  prs.author = 'Janvi Soni';
  prs.company = 'Chandigarh University';
  prs.title = 'ResumeBuilder – Smart Resume Builder Using MERN Stack';

  // Palette Constants
  const C_BG = 'F8FAFC';         // Soft slate/white background
  const C_WHITE = 'FFFFFF';      // Pure white card background
  const C_PRIMARY = '6D28D9';    // Deep violet primary
  const C_PRIMARY_LIGHT = '7C3AED'; // Vibrant purple
  const C_ACCENT_BG = 'EDE9FE';  // Lavender soft pill
  const C_NAVY = '0F172A';       // Dark navy text
  const C_SLATE = '475569';      // Muted slate text
  const C_BORDER = 'E2E8F0';     // Border gray
  const C_GREEN = '10B981';      // Success emerald
  const C_BLUE = '2563EB';       // Tech blue

  const FONT_HEADING = 'Calibri';
  const FONT_BODY = 'Calibri';

  // Helper function to add slide background and standard header
  function addHeader(slide, category, title, subtitle) {
    // Background fill
    slide.background = { color: C_BG };

    // Top Category Badge
    slide.addText(category.toUpperCase(), {
      x: 0.8,
      y: 0.4,
      w: 8.0,
      h: 0.25,
      fontSize: 10,
      fontFace: FONT_HEADING,
      bold: true,
      color: C_PRIMARY_LIGHT,
      charSpacing: 2,
    });

    // Main Slide Title
    slide.addText(title, {
      x: 0.8,
      y: 0.65,
      w: 8.5,
      h: 0.5,
      fontSize: 22,
      fontFace: FONT_HEADING,
      bold: true,
      color: C_NAVY,
    });

    // Subtitle / context
    if (subtitle) {
      slide.addText(subtitle, {
        x: 0.8,
        y: 1.15,
        w: 8.5,
        h: 0.3,
        fontSize: 12,
        fontFace: FONT_BODY,
        color: C_SLATE,
      });
    }

    // Top Right Accent Badge
    slide.addShape(prs.ShapeType.roundRect, {
      x: 8.2,
      y: 0.45,
      w: 1.0,
      h: 0.3,
      rectRadius: 0.1,
      fill: { color: C_ACCENT_BG },
      line: { color: C_PRIMARY_LIGHT, width: 1 },
    });
    slide.addText('MERN STACK', {
      x: 8.2,
      y: 0.45,
      w: 1.0,
      h: 0.3,
      fontSize: 8.5,
      fontFace: FONT_HEADING,
      bold: true,
      color: C_PRIMARY,
      align: 'center',
      valign: 'middle',
    });
  }

  // ==========================================
  // SLIDE 1 – TITLE PAGE
  // ==========================================
  {
    const slide = prs.addSlide();
    slide.background = { color: 'FAF8FF' }; // Soft violet tint background

    // Left Column: Branding, Title & Student Metadata
    // Badge
    slide.addShape(prs.ShapeType.roundRect, {
      x: 0.8,
      y: 0.7,
      w: 2.8,
      h: 0.35,
      rectRadius: 0.1,
      fill: { color: C_ACCENT_BG },
      line: { color: C_PRIMARY_LIGHT, width: 1 },
    });
    slide.addText('UNIVERSITY MINI PROJECT • EXP 10', {
      x: 0.8,
      y: 0.7,
      w: 2.8,
      h: 0.35,
      fontSize: 9,
      fontFace: FONT_HEADING,
      bold: true,
      color: C_PRIMARY,
      align: 'center',
      valign: 'middle',
    });

    // Main App Title
    slide.addText('ResumeBuilder', {
      x: 0.8,
      y: 1.15,
      w: 4.8,
      h: 0.7,
      fontSize: 34,
      fontFace: FONT_HEADING,
      bold: true,
      color: C_PRIMARY_LIGHT,
    });

    // Subtitle
    slide.addText('Smart Resume Builder Using MERN Stack', {
      x: 0.8,
      y: 1.85,
      w: 4.8,
      h: 0.45,
      fontSize: 16,
      fontFace: FONT_HEADING,
      bold: true,
      color: C_NAVY,
    });

    slide.addText('A full-stack, cloud-persisted web application with interactive live A4 preview, dynamic multi-section editing, and vector PDF generation.', {
      x: 0.8,
      y: 2.3,
      w: 4.8,
      h: 0.65,
      fontSize: 11,
      fontFace: FONT_BODY,
      color: C_SLATE,
    });

    // Student & Mentor Details Card
    slide.addShape(prs.ShapeType.roundRect, {
      x: 0.8,
      y: 3.05,
      w: 4.8,
      h: 2.05,
      rectRadius: 0.12,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
    });

    const metaItems = [
      { label: 'Student Name:', val: 'Janvi Soni' },
      { label: 'UID / Roll No:', val: '[22BCS10xxx / Student UID]' },
      { label: 'Course & Branch:', val: 'B.E. Computer Science & Engineering' },
      { label: 'University:', val: 'Chandigarh University' },
      { label: 'Submitted To:', val: '[Faculty Mentor / Supervisor Name]' },
    ];

    metaItems.forEach((item, idx) => {
      const rowY = 3.15 + idx * 0.36;
      slide.addText(item.label, {
        x: 1.0,
        y: rowY,
        w: 1.6,
        h: 0.3,
        fontSize: 10,
        fontFace: FONT_HEADING,
        bold: true,
        color: C_NAVY,
      });
      slide.addText(item.val, {
        x: 2.6,
        y: rowY,
        w: 2.8,
        h: 0.3,
        fontSize: 10,
        fontFace: FONT_BODY,
        color: C_SLATE,
      });
    });

    // Right Column: Actual Application Screenshot Visual Mockup
    const mockupPath = path.join(__dirname, 'screenshots', 'landing_mockup.jpg');
    if (fs.existsSync(mockupPath)) {
      slide.addShape(prs.ShapeType.roundRect, {
        x: 5.9,
        y: 0.8,
        w: 3.4,
        h: 4.3,
        rectRadius: 0.15,
        fill: { color: C_WHITE },
        line: { color: C_PRIMARY_LIGHT, width: 2 },
      });
      slide.addImage({
        path: mockupPath,
        x: 6.0,
        y: 0.9,
        w: 3.2,
        h: 3.8,
        sizing: { type: 'contain', w: 3.2, h: 3.8 },
      });
      slide.addText('Actual Application UI & Live Editor Preview', {
        x: 6.0,
        y: 4.75,
        w: 3.2,
        h: 0.25,
        fontSize: 9,
        fontFace: FONT_BODY,
        color: C_PRIMARY,
        bold: true,
        align: 'center',
      });
    }
  }

  // ==========================================
  // SLIDE 2 – INTRODUCTION & PROJECT OBJECTIVES
  // ==========================================
  {
    const slide = prs.addSlide();
    addHeader(slide, 'Project Background & Goals', 'Introduction & Project Objectives', 'Understanding the motivation, user challenges, and primary engineering objectives.');

    // Card 1: Problem Statement (Left)
    slide.addShape(prs.ShapeType.roundRect, {
      x: 0.8,
      y: 1.55,
      w: 4.15,
      h: 2.4,
      rectRadius: 0.12,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
    });
    slide.addText('⚠️  Problems with Traditional Resume Building', {
      x: 1.0,
      y: 1.7,
      w: 3.75,
      h: 0.35,
      fontSize: 13,
      fontFace: FONT_HEADING,
      bold: true,
      color: 'DC2626', // Red tone
    });
    const problems = [
      'Formatting Fragility: Manual word processors (Word/Docs) easily break margins, bullet alignments, and page breaks.',
      'Hidden Paywalls: Existing commercial builders lock PDF export and template choices behind costly subscriptions.',
      'ATS Incompatibility: Cluttered graphics and complex multi-column tables fail ATS parser software.',
      'No Live Synchronization: Users must repeatedly download test files to view layout changes.',
    ];
    problems.forEach((p, i) => {
      slide.addText(`• ${p}`, {
        x: 1.0,
        y: 2.1 + i * 0.44,
        w: 3.75,
        h: 0.42,
        fontSize: 9.5,
        fontFace: FONT_BODY,
        color: C_SLATE,
      });
    });

    // Card 2: The ResumeBuilder Solution (Right)
    slide.addShape(prs.ShapeType.roundRect, {
      x: 5.15,
      y: 1.55,
      w: 4.15,
      h: 2.4,
      rectRadius: 0.12,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
    });
    slide.addText('✨  The ResumeBuilder Solution', {
      x: 5.35,
      y: 1.7,
      w: 3.75,
      h: 0.35,
      fontSize: 13,
      fontFace: FONT_HEADING,
      bold: true,
      color: C_PRIMARY,
    });
    const solutions = [
      'Interactive Live A4 Preview: Side-by-side view updates instantly as the user types.',
      'Unified Data Across Templates: Switch between Modern, Professional, and Minimal styles with zero data re-entry.',
      'High-Fidelity Vector PDF: Direct client-side A4 export with crisp print margins using html2pdf.js.',
      'Cloud Persistence & Privacy: Secure user authentication (JWT + bcryptjs) with user-isolated MongoDB storage.',
    ];
    solutions.forEach((s, i) => {
      slide.addText(`✓ ${s}`, {
        x: 5.35,
        y: 2.1 + i * 0.44,
        w: 3.75,
        h: 0.42,
        fontSize: 9.5,
        fontFace: FONT_BODY,
        color: C_SLATE,
      });
    });

    // Bottom Wide Card: 5 Core Engineering Objectives
    slide.addShape(prs.ShapeType.roundRect, {
      x: 0.8,
      y: 4.1,
      w: 8.5,
      h: 1.25,
      rectRadius: 0.12,
      fill: { color: C_ACCENT_BG },
      line: { color: C_PRIMARY_LIGHT, width: 1 },
    });
    slide.addText('🎯  Key Project Objectives:', {
      x: 1.0,
      y: 4.18,
      w: 8.1,
      h: 0.25,
      fontSize: 11,
      fontFace: FONT_HEADING,
      bold: true,
      color: C_PRIMARY,
    });

    const objectives = [
      { num: '01', title: 'Easy Resume Creation', desc: 'Modular forms for personal, education, skills, projects, and experience.' },
      { num: '02', title: 'Multiple Templates', desc: '3 ATS-friendly designs: Modern SaaS, Classic Professional, and Minimal.' },
      { num: '03', title: 'Full Cloud CRUD', desc: 'Create, read, update, and delete multiple resumes with MongoDB persistence.' },
      { num: '04', title: 'Instant Vector PDF', desc: 'Download standard A4 print-ready PDF resumes directly from the browser.' },
    ];

    objectives.forEach((obj, idx) => {
      const colX = 1.0 + idx * 2.05;
      slide.addShape(prs.ShapeType.roundRect, {
        x: colX,
        y: 4.45,
        w: 1.95,
        h: 0.8,
        rectRadius: 0.08,
        fill: { color: C_WHITE },
        line: { color: C_BORDER, width: 1 },
      });
      slide.addText(`${obj.num}. ${obj.title}`, {
        x: colX + 0.08,
        y: 4.5,
        w: 1.8,
        h: 0.25,
        fontSize: 9.5,
        fontFace: FONT_HEADING,
        bold: true,
        color: C_NAVY,
      });
      slide.addText(obj.desc, {
        x: colX + 0.08,
        y: 4.75,
        w: 1.8,
        h: 0.45,
        fontSize: 7.5,
        fontFace: FONT_BODY,
        color: C_SLATE,
      });
    });
  }

  // ==========================================
  // SLIDE 3 – TECHNOLOGY STACK & SYSTEM ARCHITECTURE
  // ==========================================
  {
    const slide = prs.addSlide();
    addHeader(slide, 'Technical Foundations', 'Technology Stack & System Architecture', 'Verified MERN stack ecosystem and request-response lifecycle.');

    // Left Column: Tech Stack Cards (3.8 wide)
    const techCards = [
      {
        title: 'Frontend Tier',
        color: '0284C7',
        tech: 'React 18 • Vite • Tailwind CSS • Lucide Icons',
        desc: 'Declarative component hierarchy, custom hooks, reactive state, and client-side routing.',
      },
      {
        title: 'Backend API Tier',
        color: C_PRIMARY,
        tech: 'Node.js • Express.js • REST Architecture',
        desc: 'Modular routers, request logger middleware, centralized error handling, and JSON parsing.',
      },
      {
        title: 'Database Tier',
        color: '059669',
        tech: 'MongoDB Atlas • Mongoose ODM',
        desc: 'Structured schemas, field validations, relational references (userId), and .populate().',
      },
      {
        title: 'Security & Auth',
        color: 'DC2626',
        tech: 'JSON Web Tokens (JWT) • bcryptjs',
        desc: '10-round salted password hashing, stateless 7-day JWT tokens, and Bearer middleware.',
      },
    ];

    techCards.forEach((tc, idx) => {
      const cardY = 1.55 + idx * 0.95;
      slide.addShape(prs.ShapeType.roundRect, {
        x: 0.8,
        y: cardY,
        w: 3.7,
        h: 0.85,
        rectRadius: 0.08,
        fill: { color: C_WHITE },
        line: { color: C_BORDER, width: 1 },
      });
      // Color Indicator Pill
      slide.addShape(prs.ShapeType.roundRect, {
        x: 0.95,
        y: cardY + 0.12,
        w: 1.4,
        h: 0.22,
        rectRadius: 0.05,
        fill: { color: C_ACCENT_BG },
      });
      slide.addText(tc.title.toUpperCase(), {
        x: 0.95,
        y: cardY + 0.12,
        w: 1.4,
        h: 0.22,
        fontSize: 8,
        fontFace: FONT_HEADING,
        bold: true,
        color: tc.color,
        align: 'center',
        valign: 'middle',
      });
      slide.addText(tc.tech, {
        x: 0.95,
        y: cardY + 0.38,
        w: 3.4,
        h: 0.22,
        fontSize: 9.5,
        fontFace: FONT_HEADING,
        bold: true,
        color: C_NAVY,
      });
      slide.addText(tc.desc, {
        x: 0.95,
        y: cardY + 0.58,
        w: 3.4,
        h: 0.25,
        fontSize: 8,
        fontFace: FONT_BODY,
        color: C_SLATE,
      });
    });

    // Right Column: System Architecture Diagram (4.6 wide)
    slide.addShape(prs.ShapeType.roundRect, {
      x: 4.7,
      y: 1.55,
      w: 4.6,
      h: 3.75,
      rectRadius: 0.12,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
    });

    slide.addText('System Communication & Architecture Flow', {
      x: 4.9,
      y: 1.7,
      w: 4.2,
      h: 0.3,
      fontSize: 12,
      fontFace: FONT_HEADING,
      bold: true,
      color: C_NAVY,
    });

    // Diagram Flow Steps
    const flowSteps = [
      {
        icon: '👤',
        title: 'User / Web Browser',
        sub: 'User interacts with responsive UI, inputs form data, triggers PDF export',
        tag: 'Port 5173 / Vercel SPA',
      },
      {
        icon: '⚛️',
        title: 'React 18 Frontend Layer',
        sub: 'Manages state (useState), triggers fetch() API calls with JWT Bearer header',
        tag: 'Vite • React Router v6',
      },
      {
        icon: '⚡',
        title: 'Express.js REST API & Middleware',
        sub: 'Custom logger, CORS, body parser, and auth middleware verify JWT signature',
        tag: 'Port 5000 / Serverless',
      },
      {
        icon: '🍃',
        title: 'MongoDB Database (Mongoose ODM)',
        sub: 'Executes CRUD queries on isolated collections: Users & Resumes with schema validation',
        tag: 'Atlas Cloud Cluster',
      },
    ];

    flowSteps.forEach((fs, i) => {
      const stepY = 2.1 + i * 0.72;
      slide.addShape(prs.ShapeType.roundRect, {
        x: 4.9,
        y: stepY,
        w: 4.2,
        h: 0.6,
        rectRadius: 0.08,
        fill: { color: 'F1F5F9' },
        line: { color: C_BORDER, width: 1 },
      });
      slide.addText(`${fs.icon}  ${fs.title}`, {
        x: 5.0,
        y: stepY + 0.06,
        w: 2.8,
        h: 0.25,
        fontSize: 9.5,
        fontFace: FONT_HEADING,
        bold: true,
        color: C_NAVY,
      });
      slide.addText(fs.tag, {
        x: 7.7,
        y: stepY + 0.06,
        w: 1.3,
        h: 0.2,
        fontSize: 7,
        fontFace: FONT_HEADING,
        color: C_PRIMARY,
        bold: true,
        align: 'right',
      });
      slide.addText(fs.sub, {
        x: 5.0,
        y: stepY + 0.3,
        w: 4.0,
        h: 0.25,
        fontSize: 7.5,
        fontFace: FONT_BODY,
        color: C_SLATE,
      });

      // Connecting down arrow
      if (i < flowSteps.length - 1) {
        slide.addText('↓', {
          x: 6.9,
          y: stepY + 0.54,
          w: 0.2,
          h: 0.2,
          fontSize: 10,
          fontFace: FONT_HEADING,
          bold: true,
          color: C_PRIMARY_LIGHT,
          align: 'center',
        });
      }
    });

    slide.addText('🔒 End-to-end security: Passwords hashed with bcryptjs (10 rounds) • Stateless JWT auth header', {
      x: 4.9,
      y: 4.95,
      w: 4.2,
      h: 0.25,
      fontSize: 7.5,
      fontFace: FONT_BODY,
      bold: true,
      color: C_PRIMARY,
      align: 'center',
    });
  }

  // ==========================================
  // SLIDE 4 – KEY FEATURES & APPLICATION SCREENSHOTS
  // ==========================================
  {
    const slide = prs.addSlide();
    addHeader(slide, 'Application Capabilities', 'Key Features & Real Application UI', 'Showcasing core user modules and live screenshots of ResumeBuilder.');

    // Left Column: Feature Highlights (4.3 wide)
    const features = [
      {
        icon: '🔐',
        title: 'Authentication & Session Security',
        desc: 'User signup and login with bcryptjs password hashing and JWT issuance for protected routes.',
      },
      {
        icon: '📋',
        title: 'Dynamic Multi-Section Editor',
        desc: 'Add/remove unlimited education, skills, projects, experience, and certifications with React state.',
      },
      {
        icon: '🎨',
        title: '3 Professional Resume Templates',
        desc: 'Modern (violet accents), Professional (formal serif), and Minimal (ATS black-and-white).',
      },
      {
        icon: '👁️',
        title: 'Real-Time Live A4 Preview',
        desc: 'Immediate side-by-side visual synchronization as user types, rendered in exact A4 proportions.',
      },
      {
        icon: '📄',
        title: 'Client-Side Vector PDF Export',
        desc: 'One-click instant PDF generation powered by html2pdf.js with standard 10mm print margins.',
      },
      {
        icon: '💾',
        title: 'Cloud CRUD & Resume Management',
        desc: 'Save multiple resumes to MongoDB, edit previously saved drafts, or delete old versions.',
      },
    ];

    features.forEach((feat, idx) => {
      const fY = 1.55 + idx * 0.62;
      slide.addShape(prs.ShapeType.roundRect, {
        x: 0.8,
        y: fY,
        w: 4.15,
        h: 0.56,
        rectRadius: 0.08,
        fill: { color: C_WHITE },
        line: { color: C_BORDER, width: 1 },
      });
      slide.addText(`${feat.icon}  ${feat.title}`, {
        x: 0.95,
        y: fY + 0.05,
        w: 3.85,
        h: 0.22,
        fontSize: 9.5,
        fontFace: FONT_HEADING,
        bold: true,
        color: C_NAVY,
      });
      slide.addText(feat.desc, {
        x: 0.95,
        y: fY + 0.27,
        w: 3.85,
        h: 0.25,
        fontSize: 7.5,
        fontFace: FONT_BODY,
        color: C_SLATE,
      });
    });

    // Right Column: Actual Application UI Screenshots
    const mockupPath = path.join(__dirname, 'screenshots', 'landing_mockup.jpg');
    const registerPath = path.join(__dirname, 'screenshots', 'register_ui.png');

    // Screenshot 1 Container: Landing Page & Live Mockup
    slide.addShape(prs.ShapeType.roundRect, {
      x: 5.15,
      y: 1.55,
      w: 4.15,
      h: 2.15,
      rectRadius: 0.1,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
    });
    if (fs.existsSync(mockupPath)) {
      slide.addImage({
        path: mockupPath,
        x: 5.25,
        y: 1.62,
        w: 3.95,
        h: 1.8,
        sizing: { type: 'contain', w: 3.95, h: 1.8 },
      });
    }
    slide.addText('Landing Page & Interactive Laptop Editor Mockup', {
      x: 5.25,
      y: 3.45,
      w: 3.95,
      h: 0.2,
      fontSize: 8,
      fontFace: FONT_HEADING,
      bold: true,
      color: C_PRIMARY,
      align: 'center',
    });

    // Screenshot 2 Container: Register UI & Auth Form
    slide.addShape(prs.ShapeType.roundRect, {
      x: 5.15,
      y: 3.8,
      w: 4.15,
      h: 1.5,
      rectRadius: 0.1,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
    });
    if (fs.existsSync(registerPath)) {
      slide.addImage({
        path: registerPath,
        x: 5.25,
        y: 3.85,
        w: 1.8,
        h: 1.4,
        sizing: { type: 'contain', w: 1.8, h: 1.4 },
      });
    }
    // Annotation on side of register UI
    slide.addText('Secure Authentication UI', {
      x: 7.15,
      y: 3.95,
      w: 2.05,
      h: 0.22,
      fontSize: 9.5,
      fontFace: FONT_HEADING,
      bold: true,
      color: C_NAVY,
    });
    slide.addText('• Name, Email, Password fields\n• bcryptjs salt (10 rounds)\n• Auto JWT token storage\n• Form error handling alerts', {
      x: 7.15,
      y: 4.22,
      w: 2.05,
      h: 0.95,
      fontSize: 8,
      fontFace: FONT_BODY,
      color: C_SLATE,
    });
  }

  // ==========================================
  // SLIDE 5 – TECHNICAL IMPLEMENTATION
  // ==========================================
  {
    const slide = prs.addSlide();
    addHeader(slide, 'Curriculum Alignment', 'Technical Implementation & Syllabus Concepts', 'Direct connection to university curriculum: React hooks, Express APIs, and JWT security.');

    // 3 Equal Columns: React (Left), Node/Express (Middle), Auth/Security (Right)
    const columns = [
      {
        badge: 'FRONTEND CONCEPTS',
        badgeColor: '0284C7',
        title: 'React.js & State Logic',
        syllabus: 'Experiments 1, 2, 3 & 4',
        points: [
          'Functional Components & JSX: Reusable components (Navbar, ResumePreview, TemplateSelector, Form sections).',
          'useState Hook: Dynamic arrays for skills[], education[], projects[], and multi-nested resume state.',
          'useEffect Hook: Asynchronous data fetching from Express API on route change (/editor/:id).',
          'Conditional Rendering: Dynamic template rendering (Modern, Professional, Minimal) and auth navigation.',
          'Array.map() with Unique Keys: Seamlessly mapping array entries to editable form rows and preview items.',
          'React Router DOM v6: Protected routes (ProtectedRoute.jsx), dynamic routing, and SPA navigation.',
        ],
      },
      {
        badge: 'BACKEND ARCHITECTURE',
        badgeColor: C_PRIMARY,
        title: 'Node.js & Express REST',
        syllabus: 'Experiments 5 & 6',
        points: [
          'HTTP Server Creation: Express application instance supporting both local server and Vercel serverless.',
          'RESTful Routing: Clear separation of controllers, routes, and models (/api/auth, /api/resumes).',
          'Custom Logger Middleware: Intercepts all requests, logging HTTP method, path, and UTC timestamps.',
          'CRUD HTTP Verbs: Implemented GET (list/detail), POST (create), PUT (update), and DELETE (remove).',
          'Centralized Error Handling: Standardized JSON responses ({ success, message, data }) and status codes.',
          'Environment Variables: dotenv configuration for PORT, MONGODB_URI, and JWT_SECRET.',
        ],
      },
      {
        badge: 'SECURITY & SESSIONS',
        badgeColor: 'DC2626',
        title: 'Authentication & JWT',
        syllabus: 'Experiment 7',
        points: [
          'bcryptjs Password Hashing: 10 salt rounds used before persisting user credentials; no plain text passwords.',
          'Password Verification: bcrypt.compare() validates hashes during user login attempts.',
          'JWT Token Generation: jsonwebtoken creates signed tokens carrying { userId } with 7-day expiration.',
          'Bearer Verification Middleware: auth.js inspects HTTP Authorization header and extracts token.',
          'Route Protection: Private routes reject unauthorized requests with HTTP 401 Unauthorized status.',
          'User Data Isolation: Controller verifies resume.userId === req.user.id to enforce strict ownership.',
        ],
      },
    ];

    columns.forEach((col, idx) => {
      const colX = 0.8 + idx * 2.9;
      slide.addShape(prs.ShapeType.roundRect, {
        x: colX,
        y: 1.55,
        w: 2.75,
        h: 3.75,
        rectRadius: 0.1,
        fill: { color: C_WHITE },
        line: { color: C_BORDER, width: 1 },
      });

      // Header Tag
      slide.addShape(prs.ShapeType.roundRect, {
        x: colX + 0.15,
        y: 1.7,
        w: 1.8,
        h: 0.22,
        rectRadius: 0.05,
        fill: { color: C_ACCENT_BG },
      });
      slide.addText(col.badge, {
        x: colX + 0.15,
        y: 1.7,
        w: 1.8,
        h: 0.22,
        fontSize: 7.5,
        fontFace: FONT_HEADING,
        bold: true,
        color: col.badgeColor,
        align: 'center',
        valign: 'middle',
      });

      slide.addText(col.title, {
        x: colX + 0.15,
        y: 1.98,
        w: 2.45,
        h: 0.3,
        fontSize: 11,
        fontFace: FONT_HEADING,
        bold: true,
        color: C_NAVY,
      });

      slide.addText(col.syllabus, {
        x: colX + 0.15,
        y: 2.25,
        w: 2.45,
        h: 0.2,
        fontSize: 7.5,
        fontFace: FONT_BODY,
        bold: true,
        color: C_PRIMARY,
      });

      // Bullet points
      col.points.forEach((pt, pIdx) => {
        const ptY = 2.5 + pIdx * 0.45;
        slide.addText(`• ${pt}`, {
          x: colX + 0.12,
          y: ptY,
          w: 2.5,
          h: 0.42,
          fontSize: 7.5,
          fontFace: FONT_BODY,
          color: C_SLATE,
        });
      });
    });
  }

  // ==========================================
  // SLIDE 6 – DATABASE, TESTING & DEPLOYMENT
  // ==========================================
  {
    const slide = prs.addSlide();
    addHeader(slide, 'Data Persistence & Verification', 'Database Modeling, Testing & Deployment', 'MongoDB Atlas schemas, comprehensive testing methodology, and Vercel hosting.');

    // Card 1: Database Modeling (Left, 2.75 wide)
    slide.addShape(prs.ShapeType.roundRect, {
      x: 0.8,
      y: 1.55,
      w: 2.75,
      h: 3.75,
      rectRadius: 0.1,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
    });
    slide.addText('🍃  Database & Mongoose', {
      x: 0.95,
      y: 1.7,
      w: 2.45,
      h: 0.28,
      fontSize: 11,
      fontFace: FONT_HEADING,
      bold: true,
      color: '059669',
    });
    slide.addText('Experiment 8 – Data Schemas', {
      x: 0.95,
      y: 1.98,
      w: 2.45,
      h: 0.2,
      fontSize: 8,
      fontFace: FONT_BODY,
      bold: true,
      color: C_PRIMARY,
    });

    const dbPoints = [
      'User Model: Schema with name, email (unique, lowercase), password (hashed), and timestamps.',
      'Resume Model: References User via userId: { type: ObjectId, ref: "User" } with required validation.',
      'Sub-Documents: Nested arrays for education, skills, projects, experience, and certifications.',
      'Mongoose CRUD: Uses find(), findById(), findByIdAndUpdate(), and findByIdAndDelete().',
      'Relational Populate: Implements .populate("userId") to demonstrate Mongoose schema relationships.',
      'Local Fallback: Automatic fallback store ensures offline capability during local evaluation.',
    ];
    dbPoints.forEach((p, i) => {
      slide.addText(`• ${p}`, {
        x: 0.95,
        y: 2.25 + i * 0.49,
        w: 2.45,
        h: 0.46,
        fontSize: 7.5,
        fontFace: FONT_BODY,
        color: C_SLATE,
      });
    });

    // Card 2: Testing & Validation (Middle, 2.75 wide)
    slide.addShape(prs.ShapeType.roundRect, {
      x: 3.65,
      y: 1.55,
      w: 2.75,
      h: 3.75,
      rectRadius: 0.1,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
    });
    slide.addText('🧪  Testing & Validation', {
      x: 3.8,
      y: 1.7,
      w: 2.45,
      h: 0.28,
      fontSize: 11,
      fontFace: FONT_HEADING,
      bold: true,
      color: '0284C7',
    });
    slide.addText('Experiment 9 & 10 – Verification', {
      x: 3.8,
      y: 1.98,
      w: 2.45,
      h: 0.2,
      fontSize: 8,
      fontFace: FONT_BODY,
      bold: true,
      color: C_PRIMARY,
    });

    const testPoints = [
      'Auth Testing: Verified user registration with duplicate email rejection and bcrypt password verification.',
      'CRUD Lifecycle: Successfully tested creation, dynamic editing, cloud updating, and deletion of resumes.',
      'Security Verification: Confirmed unauthenticated requests to /api/resumes return HTTP 401 Unauthorized.',
      'Template Consistency: Verified template switching from Modern to Minimal preserves 100% form data.',
      'PDF Print Fidelity: Tested vector rendering using html2pdf.js ensuring standard A4 margins and zero text cutoff.',
      'CORS & Headers: Verified proper Cross-Origin headers and preflight handling across endpoints.',
    ];
    testPoints.forEach((p, i) => {
      slide.addText(`✓ ${p}`, {
        x: 3.8,
        y: 2.25 + i * 0.49,
        w: 2.45,
        h: 0.46,
        fontSize: 7.5,
        fontFace: FONT_BODY,
        color: C_SLATE,
      });
    });

    // Card 3: Deployment Architecture (Right, 2.85 wide)
    slide.addShape(prs.ShapeType.roundRect, {
      x: 6.5,
      y: 1.55,
      w: 2.8,
      h: 3.75,
      rectRadius: 0.1,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
    });
    slide.addText('☁️  Live Cloud Deployment', {
      x: 6.65,
      y: 1.7,
      w: 2.5,
      h: 0.28,
      fontSize: 11,
      fontFace: FONT_HEADING,
      bold: true,
      color: C_PRIMARY,
    });
    slide.addText('Production Infrastructure', {
      x: 6.65,
      y: 1.98,
      w: 2.5,
      h: 0.2,
      fontSize: 8,
      fontFace: FONT_BODY,
      bold: true,
      color: C_SLATE,
    });

    // Sub-cards for deployment
    const deployItems = [
      {
        platform: '▲ VERCEL (FULL-STACK)',
        desc: 'Frontend SPA build + Express REST API running as Serverless Functions via /api/index.js.',
        status: '● Live & Operational',
        statusColor: C_GREEN,
      },
      {
        platform: '🍃 MONGODB ATLAS',
        desc: 'Cloud managed NoSQL database cluster with encrypted connections and automated replicas.',
        status: '● Cloud Connected',
        statusColor: C_GREEN,
      },
      {
        platform: '💻 LOCALHOST ENVIRONMENT',
        desc: 'Port 5173 (Vite HMR) & Port 5000 (Express API) with local fallback for viva evaluation.',
        status: '● Ready on Localhost',
        statusColor: C_BLUE,
      },
    ];

    deployItems.forEach((d, idx) => {
      const dY = 2.25 + idx * 0.88;
      slide.addShape(prs.ShapeType.roundRect, {
        x: 6.65,
        y: dY,
        w: 2.5,
        h: 0.8,
        rectRadius: 0.06,
        fill: 'F8FAFC',
        line: { color: C_BORDER, width: 1 },
      });
      slide.addText(d.platform, {
        x: 6.75,
        y: dY + 0.06,
        w: 2.3,
        h: 0.2,
        fontSize: 7.5,
        fontFace: FONT_HEADING,
        bold: true,
        color: C_NAVY,
      });
      slide.addText(d.desc, {
        x: 6.75,
        y: dY + 0.26,
        w: 2.3,
        h: 0.32,
        fontSize: 6.8,
        fontFace: FONT_BODY,
        color: C_SLATE,
      });
      slide.addText(d.status, {
        x: 6.75,
        y: dY + 0.58,
        w: 2.3,
        h: 0.18,
        fontSize: 6.8,
        fontFace: FONT_HEADING,
        bold: true,
        color: d.statusColor,
      });
    });

    slide.addText('🔗 Live URL: resume-builder-janvi-0e3d.vercel.app', {
      x: 6.65,
      y: 4.95,
      w: 2.5,
      h: 0.25,
      fontSize: 7,
      fontFace: FONT_BODY,
      bold: true,
      color: C_PRIMARY,
      align: 'center',
    });
  }

  // ==========================================
  // SLIDE 7 – CONCLUSION & FUTURE SCOPE
  // ==========================================
  {
    const slide = prs.addSlide();
    addHeader(slide, 'Project Summary & Roadmap', 'Conclusion & Future Scope', 'Academic accomplishments, engineering takeaways, and future development directions.');

    // Left Column: Conclusion & Achievements (4.15 wide)
    slide.addShape(prs.ShapeType.roundRect, {
      x: 0.8,
      y: 1.55,
      w: 4.15,
      h: 2.45,
      rectRadius: 0.12,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
    });
    slide.addText('🏆  Project Achievements & Conclusion', {
      x: 1.0,
      y: 1.7,
      w: 3.75,
      h: 0.3,
      fontSize: 12,
      fontFace: FONT_HEADING,
      bold: true,
      color: C_PRIMARY,
    });
    const conclusions = [
      'Eliminated Formatting Friction: Users can build professional resumes in minutes with real-time A4 visual feedback.',
      'Syllabus Mastery: Successfully implemented and defended all 10 prescribed experiments in the university MERN curriculum.',
      'Reusable Template System: Engineered clean separation between resume data and template rendering components.',
      'High Quality PDF Generation: Direct client-side vector generation ensures accurate ATS readability without server costs.',
      'Clean Human-Written Codebase: Modular, readable architecture structured for practical viva defense and future extension.',
    ];
    conclusions.forEach((c, i) => {
      slide.addText(`✓ ${c}`, {
        x: 1.0,
        y: 2.05 + i * 0.38,
        w: 3.75,
        h: 0.36,
        fontSize: 8.5,
        fontFace: FONT_BODY,
        color: C_SLATE,
      });
    });

    // Right Column: Future Scope & Enhancements (4.15 wide)
    slide.addShape(prs.ShapeType.roundRect, {
      x: 5.15,
      y: 1.55,
      w: 4.15,
      h: 2.45,
      rectRadius: 0.12,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
    });
    slide.addText('🚀  Future Scope & Enhancements', {
      x: 5.35,
      y: 1.7,
      w: 3.75,
      h: 0.3,
      fontSize: 12,
      fontFace: FONT_HEADING,
      bold: true,
      color: '0284C7',
    });
    const futures = [
      'AI Summary Suggestions: Integration of LLMs to suggest job-specific bullet points and action verbs.',
      'Real-Time ATS Score Meter: Keyword matching against uploaded job descriptions to estimate interview match score.',
      'Expanded Template Library: Addition of academic CV, executive two-column, and creative designer formats.',
      'OAuth & Profile Import: One-click profile auto-fill via LinkedIn API and GitHub profile parsing.',
      'Multi-Page Pagination: Intelligent page-break detection for multi-page resumes and academic curricula vitae.',
    ];
    futures.forEach((f, i) => {
      slide.addText(`• ${f}`, {
        x: 5.35,
        y: 2.05 + i * 0.38,
        w: 3.75,
        h: 0.36,
        fontSize: 8.5,
        fontFace: FONT_BODY,
        color: C_SLATE,
      });
    });

    // Bottom Banner: Thank You & Viva Questions (8.5 wide)
    slide.addShape(prs.ShapeType.roundRect, {
      x: 0.8,
      y: 4.15,
      w: 8.5,
      h: 1.15,
      rectRadius: 0.12,
      fill: { color: C_PRIMARY },
      line: { color: C_PRIMARY_LIGHT, width: 1 },
    });

    slide.addText('THANK YOU!', {
      x: 1.0,
      y: 4.25,
      w: 8.1,
      h: 0.38,
      fontSize: 18,
      fontFace: FONT_HEADING,
      bold: true,
      color: C_WHITE,
      align: 'center',
    });

    slide.addText('Questions & Answers • Practical Examination & Viva-Voce', {
      x: 1.0,
      y: 4.62,
      w: 8.1,
      h: 0.25,
      fontSize: 11,
      fontFace: FONT_HEADING,
      bold: true,
      color: 'DDD6FE', // Light lavender
      align: 'center',
    });

    slide.addText('🌐 Live Demo: https://resume-builder-janvi-0e3d.vercel.app  •  💻 GitHub: github.com/jaaanviiiii/resume-builder', {
      x: 1.0,
      y: 4.88,
      w: 8.1,
      h: 0.25,
      fontSize: 8.5,
      fontFace: FONT_BODY,
      color: C_WHITE,
      align: 'center',
    });
  }

  // Save the presentation
  const outputPath = path.join(__dirname, 'ResumeBuilder_Mini_Project_Presentation.pptx');
  await prs.writeFile({ fileName: outputPath });
  console.log(`Presentation generated successfully at: ${outputPath}`);
}

createPresentation().catch((err) => {
  console.error('Error creating presentation:', err);
  process.exit(1);
});

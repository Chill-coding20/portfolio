import advocateLightShot from "@/assets/project-advocate-light.jpg";
import advocateDarkShot from "@/assets/project-advocate-dark.jpg";
import automationShot from "@/assets/project-automation.jpg";

export const profile = {
  name: "P. Siranjeevi",
  roles: ["Java Full Stack Developer", "QA Automation Engineer"],
  tagline:
    "I design and ship production-grade web platforms — Spring Boot services, React interfaces, and the automation frameworks that keep them honest.",
  location: "Chennai, Tamil Nadu, India",
  email: "Chiranjeeviram07@gmail.com",
  github: "https://github.com/Chill-coding20",
  linkedin: "https://linkedin.com/in/chill-coding20",
  availability: "Available for opportunities",
  resumeUrl: "/resume.pdf",
};

export const stats = [
  { label: "Java Backend", value: "Spring Boot" },
  { label: "React Development", value: "TypeScript · Tailwind" },
  { label: "REST APIs", value: "Spring Security · JWT" },
  { label: "Database Design", value: "MySQL · PostgreSQL" },
  { label: "Playwright Automation", value: "E2E · Cross-browser" },
  { label: "Quality Engineering", value: "JUnit · Mockito" },
];

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  kind: "Experience" | "Project" | "Education";
  detail: string;
  bullets: string[];
  tech?: string[];
  achievements?: string[];
  impact?: string;
};

export const about: {
  summary: string;
  focus: string;
  work: string;
  timeline: TimelineItem[];
} = {
  summary:
    "I'm a computer applications graduate who builds full-stack software the way it will run in production: Java and Spring Boot behind the API, React on the front, and Playwright test suites that verify it all actually works. During my internship at PQSI Digital I owned end-to-end automation for an enterprise manufacturing platform, so I've seen what it takes to keep a serious product shippable. I enjoy the middle of the stack — turning a messy requirement into a clean REST API, a database schema that won't fall over, and an interface that doesn't fight the user.",
  focus:
    "REST APIs with clean boundaries, Spring Security that is actually configured, and database schemas that stay fast before the query gets slow.",
  work: "Small increments, written tests at each layer, and documentation that outlives the sprint. If a thing can be automated, I automate it — then I run it again.",
  timeline: [
    {
      period: "May 2026 — Jul 2026",
      title: "Test Automation Intern",
      org: "PQSI Digital Private Limited (IQC AIS Centre)",
      kind: "Experience",
      detail:
        "Built and maintained Playwright-based end-to-end coverage for an enterprise manufacturing intelligence platform used on real factory floors. My suites validated the dashboards, KPIs, charts, grids, filters and operational workflows the way operators actually use them — across browsers, every regression cycle.",
      bullets: [
        "Automated end-to-end testing of OEE, Andon, DWM and traceability dashboards and their workflows",
        "Developed reusable Playwright components — chart, grid, KPI and card validators reused across modules",
        "Executed UI, functional, regression and cross-browser suites; investigated failures with developers and resolved defects",
        "Documented test results and ran daily QA reviews for team-wide visibility",
      ],
      tech: ["Playwright", "TypeScript", "Node.js", "Git", "Postman", "Cross-browser testing"],
      achievements: [
        "Validated 12+ product modules of an enterprise manufacturing platform",
        "Automated validation of charts, tables, KPIs, reports and MIS/status/time filters",
        "Reusable automation components that made new coverage fast to write and cheap to maintain",
      ],
      impact:
        "Repeatable automated suites replaced repetitive manual checks, so every release shipped with known, consistent quality across the platform.",
    },
    {
      period: "2024 — 2026",
      title: "Advocate Case Management System",
      org: "Full-stack academic project",
      kind: "Project",
      detail:
        "Full-stack case management platform for advocates built with Java, Spring Boot, React.js and MySQL — secure REST APIs with JWT-based authentication, role-based access control, and a responsive React.js frontend.",
      bullets: [
        "Implemented secure REST APIs with JWT-based authentication for role-based access control",
        "Built a responsive React.js frontend integrated with the Spring Boot backend via REST",
        "Managed relational data in MySQL: case records, client profiles and hearing schedules",
        "Cut case list query time from ~1.4s to under 180ms with projection DTOs, pagination and indexes",
      ],
      tech: ["Java 17", "Spring Boot", "Spring Security", "React", "MySQL", "JWT"],
    },
    {
      period: "2023 — 2026",
      title: "Bachelor of Computer Application (BCA)",
      org: "Madurai Kamaraj University",
      kind: "Education",
      detail:
        "Completed BCA with 75% while building full-stack academic applications in Java and React.js and solving problems daily on LeetCode. Earlier, Higher Secondary (HSC) at 77.3% from GBHSS Natrampalli.",
      bullets: [
        "Overall score of 75%",
        "Full-stack academic projects in Java, Spring Boot and React.js",
        "HSC — 77.3%, GBHSS Natrampalli · regular LeetCode practice",
      ],
    },
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    icon: "Layout",
    span: "md:col-span-2",
    items: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Redux Toolkit",
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    span: "md:col-span-2",
    items: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "JPA / Hibernate",
      "Node.js basics",
    ],
  },
  {
    title: "Database",
    icon: "Database",
    span: "",
    items: ["MySQL", "PostgreSQL", "JDBC", "Query tuning"],
  },
  {
    title: "Automation",
    icon: "Bot",
    span: "",
    items: ["Playwright", "Selenium", "TestNG", "Data-driven suites"],
  },
  {
    title: "Testing",
    icon: "ShieldCheck",
    span: "",
    items: ["JUnit", "Mockito", "API testing", "Regression strategy"],
  },
  {
    title: "DevOps",
    icon: "Workflow",
    span: "",
    items: [
      "Git & GitHub Actions",
      "Maven",
      "Docker basics",
      "Oracle Cloud Infrastructure",
      "CI pipelines",
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    span: "md:col-span-2",
    items: ["IntelliJ IDEA", "VS Code", "Postman", "Jira", "Swagger", "Figma"],
  },
];

export const techStack = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "JavaScript",
  "HTML / CSS",
  "MySQL",
  "PostgreSQL",
  "Playwright",
  "JWT",
  "Maven",
  "Git",
  "Postman",
  "Oracle Cloud (OCI)",
  "Tailwind CSS",
];

export type ProjectModule = { name: string; detail: string };
export type SkillGroup = { group: string; items: string[] };
export type BusinessValue = { title: string; detail: string };

export type ProjectDetails = {
  category: string;
  duration: string;
  organization: string;
  industry: string;
  users: string[];
  modules: ProjectModule[];
  overview: string[];
  responsibilities: string[];
  businessValue: BusinessValue[];
  skillGroups: SkillGroup[];
  tags: string[];
  note: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  year: string;
  role: string;
  image: string;
  imageDark?: string;
  tech: string[];
  demo?: string;
  repo?: string;
  accent: string;
  features: { title: string; detail: string }[];
  highlights?: { label: string; value: string }[];
  architecture?: string[];
  challenges: { problem: string; solution: string }[];
  lessons: string[];
  future: string[];
  confidential?: boolean;
  details?: ProjectDetails;
};

export const projects: Project[] = [
  {
    slug: "advocate-case-management-system",
    title: "Advocate Case Management System",
    summary:
      "A full stack platform that gives legal practices one place for cases, hearings, clients, documents and billing.",
    description:
      "Built for small and mid-sized legal firms that still track hearings on paper. The system centralises the entire case lifecycle behind a role-aware Spring Boot API and a fast React dashboard, with a hearing calendar, document vault, and time-and-billing ledger.",
    year: "2024",
    role: "Full stack developer — architecture, API, UI",
    image: advocateLightShot,
    imageDark: advocateDarkShot,
    tech: ["Java 17", "Spring Boot", "Spring Security", "React", "MySQL", "JWT", "REST API"],
    demo: "https://advocate-management-system-gz78km7l8-advocateproject.vercel.app/",
    repo: "https://github.com/Chill-coding20/Advocate-Management-System",
    accent: "from-[oklch(0.62_0.17_268)] to-[oklch(0.68_0.15_300)]",
    features: [
      {
        title: "Case Management",
        detail:
          "Central case records — case details, client profiles and hearing schedules in one place, with the full case lifecycle tracked end to end.",
      },
      {
        title: "Hearing Calendar",
        detail:
          "Hearing schedules and court date tracking so nothing slips between case records, documents and the calendar.",
      },
      {
        title: "Document Vault",
        detail:
          "Documents attached to cases with versioned storage, kept in sync with the hearing schedule and billing records.",
      },
      {
        title: "Time & Billing Ledger",
        detail:
          "Time entries and billing records per case, so work logged on a matter is ready to invoice.",
      },
      {
        title: "Role-Based Access",
        detail:
          "JWT-authenticated access control that resolves permissions from one tested policy source per resource.",
      },
      {
        title: "Draft Autosave",
        detail:
          "Silent session renewal and autosave keep long drafting sessions from being lost to a token expiry.",
      },
    ],
    highlights: [
      { label: "REST API", value: "Versioned · JSON over HTTPS" },
      { label: "Authentication", value: "JWT · role-based access control" },
      { label: "Database", value: "MySQL · normalised schema with JPA" },
      { label: "Architecture", value: "Controller / Service / Repository + DTOs" },
      { label: "Performance", value: "List queries 1.4s → under 180ms" },
      { label: "Testing", value: "JUnit · Mockito · Postman" },
    ],
    architecture: [
      "React + TypeScript SPA talking to a versioned REST API over HTTPS",
      "Spring Boot service layer with controller / service / repository separation",
      "Spring Security filter chain issuing and validating stateless JWTs",
      "JPA entities over a normalised MySQL schema with soft deletes and auditing columns",
      "DTO mapping layer so persistence models never leak to the client",
      "Global exception handler returning consistent problem responses",
    ],
    challenges: [
      {
        problem:
          "Role rules differed per resource, and controller-level checks kept drifting out of sync.",
        solution:
          "Moved authorisation into method-level security with a central policy component, so every endpoint resolves permissions from one tested source.",
      },
      {
        problem: "Case list queries slowed down badly once documents and hearings were joined.",
        solution:
          "Introduced projection DTOs, pagination and targeted indexes; list response time dropped from ~1.4s to under 180ms.",
      },
      {
        problem: "Token expiry logged users out in the middle of long drafting sessions.",
        solution: "Added refresh tokens with silent renewal and draft autosave on the client.",
      },
    ],
    lessons: [
      "Design the permission model before the endpoints, not after.",
      "Pagination and projections are cheaper than caching for most list screens.",
      "A consistent error contract makes front-end state handling dramatically simpler.",
    ],
    future: [
      "Full-text search across case notes and documents",
      "E-signature workflow for client approvals",
      "Mobile companion app for hearing-day updates",
    ],
  },
  {
    slug: "industrial-test-automation-framework",
    title: "Enterprise Manufacturing Intelligence Platform",
    summary:
      "An enterprise manufacturing platform for monitoring and improving factory operations — digital factory, OEE, andon, traceability and defect analytics in one operational view.",
    description:
      "An enterprise manufacturing intelligence platform used in an industrial environment to monitor and improve factory operations. Production teams rely on it for digital factory monitoring, OEE and andon dashboards, cycle time and loss tracking, traceability and route cards, daily work management and defect analytics. As a QA automation engineer on the project, I validated the platform end to end — dashboards, KPIs, charts, filters, reports and the operational workflows behind them.",
    year: "2026",
    role: "Test Automation Intern — PQSI Digital Private Limited",
    image: automationShot,
    tech: ["Playwright", "TypeScript", "Node.js", "Git", "Postman"],
    accent: "from-[oklch(0.66_0.16_300)] to-[oklch(0.62_0.17_255)]",
    confidential: true,
    features: [
      {
        title: "Digital Factory",
        detail:
          "Station-level production monitoring and digital factory logs across the shop floor.",
      },
      {
        title: "OEE Dashboard",
        detail: "Overall Equipment Effectiveness and OLE tracking with a detailed OEE log.",
      },
      {
        title: "Andon Dashboard",
        detail: "Real-time line issue alerts and CAPA tracking for production losses.",
      },
      {
        title: "Traceability & Route Cards",
        detail: "Search, log, issue tracking and route card lookup across production history.",
      },
      {
        title: "DWM Dashboard",
        detail: "Daily Work Management with defect density tiles and issue boards.",
      },
      {
        title: "Defect Analytics",
        detail: "Defect trends, root cause analysis and Pareto views over quality data.",
      },
    ],
    challenges: [
      {
        problem:
          "Coverage had to stay maintainable while the application changed during the internship.",
        solution:
          "Organised suites around critical user flows with shared helpers, so updates touched one place instead of dozens of specs.",
      },
      {
        problem: "Behaviour differed across browsers for several user flows.",
        solution:
          "Standardised on Playwright's cross-browser engine and ran every suite across browsers during regression cycles.",
      },
    ],
    lessons: [
      "Automated verification is part of the product, not an afterthought.",
      "Structured, documented results turn test runs into team decisions.",
      "Daily QA reviews build both coverage and communication skills.",
    ],
    future: [
      "CI integration for nightly regression runs",
      "API-level contract tests before UI suites",
      "Visual regression checks on critical screens",
    ],
    details: {
      category: "Manufacturing Operations Platform · QA Automation",
      duration: "May 2026 — July 2026",
      organization: "PQSI Digital Private Limited (IQC AIS Centre)",
      industry: "Manufacturing — industrial production, factory operations and quality management",
      users: [
        "Production Engineers",
        "Quality Engineers",
        "Plant Supervisors",
        "Operations Managers",
      ],
      modules: [
        {
          name: "Digital Factory",
          detail:
            "Station-level production monitoring and digital factory logs across the shop floor.",
        },
        {
          name: "Data Logger",
          detail: "Central data grids for production records and logging.",
        },
        {
          name: "OEE Dashboard",
          detail: "Overall Equipment Effectiveness and OLE dashboards with a detailed OEE log.",
        },
        {
          name: "Andon Dashboard",
          detail: "Real-time line issue alerts and CAPA tracking.",
        },
        {
          name: "Cycle Time Log",
          detail: "Cycle time logging and conveyor-level production monitoring.",
        },
        {
          name: "Production Losses",
          detail: "Loss capture and loss resolution workflows.",
        },
        {
          name: "Traceability",
          detail: "Search, log, issues and tickets across production history.",
        },
        {
          name: "Route Card",
          detail: "Route card lookup and traceability per production order.",
        },
        {
          name: "DWM Dashboard",
          detail: "Daily Work Management with defect density tiles and issue boards.",
        },
        {
          name: "Defect Analytics",
          detail: "Defect trends, root cause analysis and Pareto views.",
        },
        {
          name: "Master Data & Access",
          detail: "Master data management and role-based user access.",
        },
        {
          name: "Notifications",
          detail: "Alert grid for operational notifications.",
        },
      ],
      overview: [
        "The Enterprise Manufacturing Intelligence Platform is a web-based manufacturing operations platform used in an industrial environment to monitor and improve factory performance. It replaces fragmented, paper-based production tracking with one operational view of the shop floor — digital factory monitoring, equipment and cycle-time tracking, quality events and traceability in a single system.",
        "Production teams use it every day: digital factory stations and data logging capture what is happening on the line; OEE and Andon dashboards surface equipment performance and line issues; cycle time and production loss workflows keep exceptions visible until resolved; traceability, route cards and daily work management boards connect each order to its history; and defect analytics — trends, root cause analysis and Pareto views — turn quality data into decisions. Role-based access keeps each team's view scoped to its function.",
        "My role was QA automation on the platform. I built and maintained Playwright-based end-to-end coverage that exercised the product the way operators use it — validating dashboards, KPIs, charts, grids, filters and reports, and verifying production monitoring and traceability workflows across browsers. UI, functional, regression and cross-browser suites ran as a repeatable verification cycle that gave the team confidence in every release.",
      ],
      responsibilities: [
        "Automated end-to-end testing of manufacturing dashboards — OEE, Andon and Daily Work Management — and their operational workflows",
        "Developed reusable Playwright automation components, including chart, grid and card validators",
        "Automated validation of charts, tables, KPIs, reports and MIS/status/time filters",
        "Validated production monitoring and traceability workflows across the platform",
        "Executed UI, functional, regression and cross-browser testing",
        "Investigated automation failures and collaborated with developers to resolve defects",
        "Improved framework maintainability through reusable validation utilities",
      ],
      businessValue: [
        {
          title: "Improved Release Confidence",
          detail:
            "Every module re-verified consistently on every change, so releases ship with known quality.",
        },
        {
          title: "Reduced Manual Testing",
          detail:
            "Repeatable automated suites replaced repetitive manual checks across the platform.",
        },
        {
          title: "Reusable Automation",
          detail:
            "Shared validators and utilities make new test coverage fast to build and cheap to maintain.",
        },
        {
          title: "Consistent Regression Testing",
          detail: "The same critical flows verified the same way, every regression cycle.",
        },
        {
          title: "Enterprise Quality Assurance",
          detail:
            "Quality automation embedded in the lifecycle of an enterprise industrial product.",
        },
      ],
      skillGroups: [
        {
          group: "Testing",
          items: [
            "Playwright",
            "TypeScript",
            "Node.js",
            "UI Automation",
            "Regression Testing",
            "Cross-browser Testing",
          ],
        },
        {
          group: "Framework & Validation",
          items: [
            "Automation Framework Design",
            "Reusable Components",
            "Data Validation",
            "Chart Validation",
            "Test Reporting",
          ],
        },
        {
          group: "Manufacturing Domain",
          items: ["Manufacturing Domain Knowledge", "Enterprise Software"],
        },
      ],
      tags: [
        "Playwright",
        "TypeScript",
        "Node.js",
        "QA Automation",
        "Manufacturing",
        "Enterprise Software",
      ],
      note: "This project was completed as part of my professional work at PQSI Digital Private Limited. Due to confidentiality agreements, the source code, internal screenshots, system architecture and live deployment cannot be shared publicly. This page focuses only on publicly shareable functionality and my technical contributions.",
    },
  },
];

export type Credential = {
  id: string;
  name: string;
  organization: string;
  issueDate: string;
  type?: string;
  category?: "Professional Certification" | "Technical Credential";
  credentialId?: string;
  verifyUrl?: string;
  certificateUrl?: string;
  logo: string;
  accent: string;
  skills?: string[];
};

export const credentials: Credential[] = [
  {
    id: "oci-ai-foundations-2025",
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    organization: "Oracle",
    issueDate: "2025",
    category: "Professional Certification",
    certificateUrl: "/certificates/oracle-ai-foundations-certificate.pdf",
    logo: "OR",
    accent: "from-[#e8452c] to-[#c13b1f]",
    skills: ["AI Foundations", "Cloud", "OCI", "Generative AI"],
  },
  {
    id: "apache-maven-build",
    name: "Apache Maven — Build & Project Management",
    organization: "Infosys Springboard",
    issueDate: "2025",
    category: "Technical Credential",
    certificateUrl: "/certificates/apache-maven-certificate.pdf",
    logo: "MV",
    accent: "from-[#d03c2f] to-[#a5291f]",
    skills: ["Apache Maven", "Build Automation", "Java", "Project Management"],
  },
  {
    id: "infosys-springboard-java-se-8",
    name: "Java SE 8 Features",
    organization: "Infosys Springboard",
    issueDate: "February 21, 2025",
    type: "Course Completion Certificate",
    category: "Technical Credential",
    verifyUrl: "https://verify.onwingspan.com",
    certificateUrl: "/certificates/java-se-8-features.pdf",
    logo: "IS",
    accent: "from-[#5b5fc7] to-[#4145a8]",
    skills: ["Java", "Java SE 8", "Core Java"],
  },
  {
    id: "infosys-springboard-hibernate-basics",
    name: "Hibernate Framework - Basics",
    organization: "Infosys Springboard",
    issueDate: "February 28, 2025",
    type: "Course Completion Certificate",
    category: "Technical Credential",
    verifyUrl: "https://verify.onwingspan.com",
    certificateUrl: "/certificates/hibernate-framework-basics.pdf",
    logo: "IS",
    accent: "from-[#5b5fc7] to-[#4145a8]",
    skills: ["Java", "Hibernate", "ORM", "Persistence"],
  },
  {
    id: "infosys-springboard-spring-boot",
    name: "Spring 5 Basics with Spring Boot",
    organization: "Infosys Springboard",
    issueDate: "March 4, 2025",
    type: "Course Completion Certificate",
    category: "Technical Credential",
    verifyUrl: "https://verify.onwingspan.com",
    certificateUrl: "/certificates/spring-5-basics-with-spring-boot.pdf",
    logo: "IS",
    accent: "from-[#5b5fc7] to-[#4145a8]",
    skills: ["Spring 5", "Spring Boot", "Java", "Backend Development"],
  },
];

export const githubFocus = [
  {
    icon: "Star",
    title: "Featured repositories",
    detail:
      "Advocate Case Management System — a Spring Boot + React full stack application, documented as a case study.",
    href: "https://github.com/Chill-coding20/Advocate-Management-System",
  },
  {
    icon: "Code2",
    title: "Programming languages",
    detail:
      "Java · TypeScript · JavaScript · SQL — with JUnit, Mockito and Playwright around them.",
  },
  {
    icon: "Compass",
    title: "Current focus",
    detail: "Spring Security, JPA and REST API design that hold up when the schema grows.",
  },
  {
    icon: "Globe",
    title: "Open source",
    detail: "I build on and practise with Maven, Playwright and the Spring ecosystem every day.",
  },
  {
    icon: "Map",
    title: "Learning roadmap",
    detail: "Microservices · Docker & CI/CD pipelines · Cloud-native deployments on OCI.",
  },
];

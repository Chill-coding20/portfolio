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
  { label: "Featured projects", value: "2" },
  { label: "Public repositories", value: "5" },
  { label: "Core stack", value: "Java · React" },
  { label: "Automation", value: "Playwright" },
];

export const about = {
  summary:
    "Java full stack developer who builds with Java and Spring Boot, ships React.js interfaces, and treats automated verification as part of the product. I have hands-on test automation experience with TypeScript and Playwright from my internship, and I care about secure REST APIs, readable code, and interfaces that feel effortless.",
  timeline: [
    {
      period: "May 2026 — Jul 2026",
      title: "Test Automation Intern",
      org: "PQSI Digital Private Limited (IQC AIS Centre)",
      kind: "Experience",
      detail:
        "Developed end-to-end automated test scripts using TypeScript and Playwright for web application testing across multiple browsers, alongside UI, functional and regression suites for critical user flows.",
      bullets: [
        "Designed and executed UI, functional and regression test suites covering critical user flows",
        "Collaborated with the QA team to identify defects, improve test coverage and maintain structured test reports",
        "Participated in daily QA review meetings and documented test results for team-wide visibility",
      ],
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
      ],
    },
    {
      period: "2023 — 2026",
      title: "Bachelor of Computer Application (BCA)",
      org: "Madurai Kamaraj University",
      kind: "Education",
      detail:
        "Completed BCA with 75%. Built full-stack academic applications using Java and React.js while strengthening data structures, algorithms and problem-solving through regular LeetCode practice.",
      bullets: [
        "Overall score of 75%",
        "Full-stack academic projects in Java, Spring Boot and React.js",
        "Regular problem solving on LeetCode and competitive coding platforms",
      ],
    },
    {
      period: "2017 — 2023",
      title: "Higher Secondary (HSC)",
      org: "GBHSS Natrampalli",
      kind: "Education",
      detail:
        "Completed Higher Secondary with 77.3%, building the foundation for a career in software engineering.",
      bullets: ["Percentage: 77.3%"],
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

export const githubActivity = [
  { label: "Public repositories", value: "5" },
  { label: "Primary languages", value: "Java · TypeScript" },
  { label: "Featured project", value: "Advocate CMS" },
  { label: "Daily practice", value: "LeetCode" },
];

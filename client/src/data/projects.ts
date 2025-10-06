export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  color: "primary" | "secondary" | "accent";
  testingContributions: string[];
  tags: string[];
  caseStudy: {
    overview: string;
    challenges: string[];
    approach: string[];
    outcomes: string[];
  };
  technologies: string[];
  duration: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: "osqaure",
    name: "OSqaure",
    description: "Enterprise business management platform requiring comprehensive QA testing across multiple modules and user workflows.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: "square",
    color: "primary",
    testingContributions: [
      "Regression Testing across all business modules",
      "Functional Testing of core features and workflows",
      "Smoke Testing for critical functionality validation",
      "UI/UX consistency testing across platforms"
    ],
    tags: ["Regression", "Functional", "Smoke"],
    caseStudy: {
      overview: "OSqaure is a comprehensive enterprise business management platform designed to streamline operations across various departments. The platform integrates modules for inventory management, sales tracking, financial reporting, and customer relationship management. As the QA engineer, I was responsible for ensuring system reliability, data integrity, and seamless user experience across all modules.",
      challenges: [
        "Complex inter-module dependencies requiring extensive integration testing",
        "Multiple user roles with varying permission levels needed thorough access control validation",
        "Large datasets necessitated performance testing and optimization verification",
        "Frequent feature updates required efficient regression testing strategies"
      ],
      approach: [
        "Developed comprehensive test plans covering all critical business workflows",
        "Implemented regression testing suite focusing on core functionalities",
        "Performed smoke testing for each deployment to validate critical paths",
        "Conducted cross-browser testing to ensure consistency across platforms",
        "Collaborated with development team to identify and resolve edge cases"
      ],
      outcomes: [
        "Identified and reported 150+ bugs, with 95% resolved before production",
        "Reduced critical post-release bugs by 40% through thorough regression testing",
        "Improved system reliability and user satisfaction scores",
        "Established reusable test documentation for future releases"
      ]
    },
    technologies: ["Web Application", "Desktop Application", "SQL Database", "REST APIs"],
    duration: "6 months",
    role: "Junior SQA Engineer"
  },
  {
    id: "soulwhispers",
    name: "SoulWhispers",
    description: "Mental wellness and meditation application requiring thorough testing of user experience, content delivery, and mobile responsiveness.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: "heart",
    color: "secondary",
    testingContributions: [
      "UI Testing for intuitive user experience",
      "Sanity Testing for feature deployments",
      "Cross-platform compatibility testing",
      "Retesting for resolved issues validation"
    ],
    tags: ["UI Testing", "Sanity", "Retesting"],
    caseStudy: {
      overview: "SoulWhispers is a mental wellness application offering guided meditations, mood tracking, and personalized wellness content. The app emphasizes user experience and accessibility, making thorough UI/UX testing critical to its success. My role focused on ensuring the application provided a seamless, calming experience across all devices.",
      challenges: [
        "Ensuring consistent UI/UX across iOS, Android, and web platforms",
        "Validating audio playback functionality across different devices and network conditions",
        "Testing personalization algorithms without access to user data",
        "Maintaining app performance during meditation sessions with background processes"
      ],
      approach: [
        "Conducted comprehensive UI testing focusing on visual consistency and accessibility",
        "Performed sanity testing after each sprint to validate new features",
        "Tested across multiple devices and screen sizes for responsive design",
        "Validated audio streaming quality under various network conditions",
        "Documented user flow issues and collaborated with UX team on improvements"
      ],
      outcomes: [
        "Identified and resolved 80+ UI/UX inconsistencies before launch",
        "Improved app responsiveness by catching performance bottlenecks early",
        "Enhanced accessibility features through targeted testing recommendations",
        "Contributed to achieving 4.7+ star rating on app stores"
      ]
    },
    technologies: ["React Native", "Mobile Apps (iOS/Android)", "Audio Streaming", "Cloud Services"],
    duration: "4 months",
    role: "SQA Engineer (Intern)"
  },
  {
    id: "ischool",
    name: "ISchool",
    description: "Comprehensive school management system requiring extensive testing of administrative features, student portals, and reporting modules.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: "graduation-cap",
    color: "accent",
    testingContributions: [
      "Functional Testing of admin and student modules",
      "Regression Testing for multi-user workflows",
      "Black-box Testing for feature validation",
      "Performance and load testing for peak usage"
    ],
    tags: ["Functional", "Regression", "Black-box"],
    caseStudy: {
      overview: "ISchool is a comprehensive school management system that handles student enrollment, attendance tracking, grade management, and parent communication. The platform serves multiple user types including administrators, teachers, students, and parents, each with unique workflows and permissions. My testing ensured data accuracy and system reliability across all modules.",
      challenges: [
        "Complex permission system requiring thorough role-based access testing",
        "Data integrity concerns with student records and grade calculations",
        "Peak load scenarios during enrollment and report card distribution periods",
        "Integration with third-party systems for payment processing and notifications"
      ],
      approach: [
        "Performed black-box testing to validate feature requirements without code access",
        "Conducted functional testing of all user workflows for different roles",
        "Executed regression testing to ensure updates didn't break existing functionality",
        "Simulated high-load scenarios to test system performance during peak usage",
        "Validated data accuracy through extensive database verification"
      ],
      outcomes: [
        "Successfully tested and validated 50+ features across multiple modules",
        "Identified critical data integrity issues preventing potential grade calculation errors",
        "Ensured system handled 500+ concurrent users during load testing",
        "Reduced post-deployment issues by 60% through comprehensive testing coverage"
      ]
    },
    technologies: ["Web Application", "Database Management", "Reporting Tools", "Payment Gateway Integration"],
    duration: "5 months",
    role: "Junior SQA Engineer"
  },
  {
    id: "jobgenie",
    name: "JobGenie",
    description: "Job portal platform connecting employers and job seekers, requiring comprehensive testing of search algorithms, application workflows, and user profiles.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: "briefcase",
    color: "primary",
    testingContributions: [
      "Smoke Testing for critical job posting features",
      "UI Testing for employer and candidate interfaces",
      "Functional Testing of search and filter mechanisms",
      "Sanity Testing for new feature releases"
    ],
    tags: ["Smoke", "UI Testing", "Sanity"],
    caseStudy: {
      overview: "JobGenie is a modern job portal platform that connects employers with qualified candidates through intelligent matching algorithms. The platform features job posting, resume management, application tracking, and communication tools. My QA work focused on ensuring seamless user experiences for both job seekers and employers.",
      challenges: [
        "Testing complex search and filtering algorithms for job matching accuracy",
        "Validating resume parsing and keyword extraction functionality",
        "Ensuring email notification system reliability for application updates",
        "Testing payment processing for premium job posting features"
      ],
      approach: [
        "Performed smoke testing to verify critical paths after each deployment",
        "Conducted UI testing for both employer and candidate user interfaces",
        "Executed functional testing of search, filter, and matching algorithms",
        "Validated application workflow from job posting to candidate selection",
        "Tested email notifications and communication features thoroughly"
      ],
      outcomes: [
        "Validated search accuracy resulting in 85%+ relevant job matches",
        "Identified and resolved 70+ usability issues improving user experience",
        "Ensured zero payment processing errors through thorough testing",
        "Contributed to successful launch with 1000+ active users in first month"
      ]
    },
    technologies: ["React", "Node.js", "Elasticsearch", "Payment Processing", "Email Services"],
    duration: "3 months",
    role: "SQA Engineer (Intern)"
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

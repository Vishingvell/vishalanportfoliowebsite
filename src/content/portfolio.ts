export interface SocialLink {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  initials: string;
  introduction: string;
  supportingStatement: string;
  heroHeading: string;
  heroCopy: string;
  github: SocialLink;
  linkedinUrl: string;
  email: string;
  canonicalUrl: string;
}

export interface Experience {
  organisation: string;
  role: string;
  project?: string;
  dates?: string;
  summary: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  url: string;
  description: string;
  purpose: string;
  characteristics: string[];
  technologies: string[];
  collaborators: string[];
  statusNote: string;
  featured: boolean;
}

export interface Achievement {
  title: string;
  organisation: string;
  date: string;
  description: string;
  url: string;
  image?: string;
  verified: boolean;
}

export interface SkillGroup {
  title: string;
  description: string;
  items: string[];
}

export const profile: Profile = {
  name: "Vishalan Karunanithi",
  initials: "VK",
  introduction:
    "Computer Science student building practical tools across cloud engineering, cybersecurity and artificial intelligence.",
  supportingStatement:
    "I enjoy turning real-world problems into understandable and testable software, with an emphasis on reliability, privacy and clear user experiences.",
  heroHeading: "Building practical technology for real-world problems.",
  heroCopy:
    "I am a Computer Science student focused on cloud engineering, cybersecurity and practical AI. I build understandable and testable software with an emphasis on reliability, privacy and useful outcomes.",
  github: { label: "GitHub", url: "https://github.com/Vishingvell" },
  linkedinUrl: "https://www.linkedin.com/in/vishalan-karunanithi-258a99257",
  email: "",
  canonicalUrl: "",
};

export const interests = [
  "Cloud engineering",
  "Cloud security",
  "Cybersecurity",
  "Artificial intelligence",
  "Machine learning",
  "Software development",
  "Software testing",
  "Python automation",
  "Practical technology for real-world problems",
] as const;

export const experiences: Experience[] = [
  {
    organisation: "NTT DATA Singapore",
    role: "Software Testing Intern",
    project: "CORENET X",
    summary:
      "Contributed to manual quality assurance and submission-packaging workflows, combining careful status tracking with Python automation to reduce repetitive work.",
    responsibilities: [
      "Performed manual quality assurance and software testing.",
      "Supported submission and packaging workflows.",
      "Developed Python automation to reduce repetitive submission-packaging work.",
      "Used Airtable to organise observations and maintain status histories.",
      "Worked within an Agile and Scrum environment.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "ScamIntel",
    url: "https://scamintel.vercel.app/",
    description:
      "ScamIntel is a personal project designed to help people check suspicious messages, links and screenshots before acting on them.",
    purpose:
      "The project was created to support scam awareness and help reduce uncertainty when users receive suspicious digital content.",
    characteristics: [
      "Analyses suspicious messages, links and screenshots.",
      "Uses a hybrid risk-analysis approach.",
      "Combines structured detection rules, semantic analysis, threat-intelligence signals and explainable machine-learning components.",
      "Presents findings in understandable language.",
      "Focuses on privacy and does not store uploaded screenshots through the analyser.",
    ],
    technologies: [],
    collaborators: ["Rohith Shetty"],
    statusNote: "An evolving prototype, not a perfect or final scam-detection system.",
    featured: true,
  },
];

export const achievements: Achievement[] = [];

export const verifiedAchievements = achievements.filter(
  (achievement) =>
    achievement.verified &&
    achievement.title.trim().length > 0 &&
    /^https?:\/\//.test(achievement.url),
);

export const skillGroups: SkillGroup[] = [
  {
    title: "Engineering & automation",
    description:
      "Tools and practices used to make software work clearer, repeatable and easier to validate.",
    items: [
      "Python automation",
      "Workflow automation",
      "Software testing",
      "Manual quality assurance",
      "Git and GitHub",
      "Airtable status tracking",
    ],
  },
  {
    title: "Cloud & security",
    description:
      "The technical domains I am actively building towards through study and practical projects.",
    items: [
      "Cloud engineering",
      "Cloud security",
      "Cybersecurity",
      "Threat-intelligence signals",
      "Privacy-conscious design",
    ],
  },
  {
    title: "Applied AI",
    description:
      "Practical AI concepts demonstrated through ScamIntel and reflected in my professional focus.",
    items: [
      "Artificial intelligence",
      "Machine learning fundamentals",
      "Semantic analysis",
      "Structured detection rules",
      "Explainable machine-learning components",
    ],
  },
  {
    title: "Delivery & communication",
    description:
      "Ways of working that support shared understanding, dependable delivery and continuous improvement.",
    items: [
      "Agile",
      "Scrum",
      "Process optimisation",
      "Technical documentation",
      "Status history maintenance",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  profile.github,
  ...(profile.linkedinUrl
    ? [{ label: "LinkedIn", url: profile.linkedinUrl }]
    : []),
  ...(profile.email ? [{ label: "Email", url: `mailto:${profile.email}` }] : []),
];

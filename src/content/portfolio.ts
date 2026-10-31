export const profile = {
  name: "Vishalan Karunanithi",
  givenName: "Vishalan",
  familyName: "Karunanithi",
  nickname: "Wish",
  title: "Computer Science Student",
  introduction:
    "Computer Science student with experience in software testing, teaching and practical technology projects.",
  email: "kcj.vishalan@gmail.com",
  github: { label: "GitHub", url: "https://github.com/Vishingvell" },
  linkedinUrl: "https://www.linkedin.com/in/vishalan-karunanithi-258a99257/",
  canonicalUrl: "",
} as const;
export const education = [
  {
    title: "Bachelor of Computer Science (Digital Systems Security)",
    place: "University of Wollongong / SIM Global Education",
    dates: "2026–Present",
  },
  {
    title: "Diploma in Electrical and Computer Engineering",
    place: "Nanyang Polytechnic",
    dates: "",
  },
] as const;
export const experiences = [
  {
    role: "Part-Time Coding & Robotics Teacher",
    organisation: "NK Robotics",
    dates: "May 2026–Present",
    detail:
      "Teaching beginner Python to students aged 10–15, adapting guided exercises to different abilities, and supporting robotics activities, device setup and debugging.",
  },
  {
    role: "QA Software Engineer Intern",
    organisation: "NTT DATA",
    dates: "Nov 2023–Apr 2024",
    detail:
      "Performed black-box testing and defect identification on CORENET X submission workflows. Developed Python scripts for IFC file processing, JSON manifests and automated ZIP packaging.",
  },
  {
    role: "Security Trooper",
    organisation: "Singapore Armed Forces",
    dates: "May 2024–May 2026",
    detail:
      "Maintained operational records, processed enquiries and coordinated with shift-based teams.",
  },
] as const;
export const projects = [
  {
    name: "Legacy.Lite",
    description: "Awarded an Honourable Mention at the PyCon 2026 Hackathon.",
    url: "",
  },
  {
    name: "ScamIntel",
    description: "A multilingual scam-risk checker with OCR and a Vercel API.",
    url: "https://scamintel.vercel.app/",
  },
  {
    name: "SAF Duty Scheduler",
    description:
      "A Python tool for duty allocation, workload analytics and Excel / Google Sheets exports.",
    url: "",
  },
  {
    name: "Security Log Analyzer",
    description:
      "A Python, pandas and Flask solution with MITRE ATT&CK-aligned findings.",
    url: "",
  },
] as const;
// Exact titles, issuers and dates visible on the public LinkedIn profile, checked 2026-10-31.
// Course certificates and workshops are listed as training, not professional designations.
export const certifications = [
  { title: "AI Foundations", issuer: "OpenAI", issued: "Jul 2026" },
  { title: "Applied AI Foundations", issuer: "OpenAI", issued: "Jul 2026" },
  {
    title: "Connect and Protect: Networks and Network Security",
    issuer: "Coursera",
    issued: "Sep 2023",
  },
  {
    title: "Critical Thinking",
    issuer: "Change Maker Consultancy",
    issued: "Jul 2023",
  },
  {
    title: "Introduction to Cyber Security Learning Path",
    issuer: "TryHackMe",
    issued: "Jul 2023",
  },
  {
    title: "Play It Safe: Manage Security Risks",
    issuer: "Coursera",
    issued: "Jul 2023",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Coursera",
    issued: "Jun 2023",
  },
  {
    title: "Foundations of User Experience (UX) Design",
    issuer: "Coursera",
    issued: "Oct 2022",
  },
  {
    title: "Aerospace Fundamentals with Flight Simulation",
    issuer: "Singapore Polytechnic",
    issued: "Sep 2019",
  },
  {
    title: "Public Speaking Skills Workshop",
    issuer: "Julia Gabriel Centre Pte. Ltd.",
    issued: "Mar 2018",
  },
] as const;

export const skills = [
  {
    title: "Programming",
    items: ["Python", "C", "C++", "C#", "JavaScript", "HTML", "CSS", "JSON"],
  },
  {
    title: "Software & data",
    items: [
      "Black-box testing",
      "Debugging",
      "Scripting",
      "pandas",
      "NumPy",
      "openpyxl",
      "Git",
    ],
  },
  {
    title: "Systems & security",
    items: [
      "Windows",
      "Linux",
      "Kali Linux",
      "Burp Suite",
      "Cybersecurity fundamentals",
    ],
  },
] as const;
export const achievement = {
  title: "Honourable Mention",
  event: "PyCon 2026 Hackathon",
  project: "Legacy.Lite",
} as const;

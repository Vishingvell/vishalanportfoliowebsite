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
    name: "ScamIntel",
    description:
      "A multilingual scam-risk checker with OCR and a Vercel API. Received an Honourable Mention at the PyCon 2026 Hackathon.",
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
export const certifications = [
  "ISC2 Certified in Cybersecurity (CC)",
  "Google Cybersecurity courses",
  "TryHackMe Introduction to Cybersecurity",
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
  project: "ScamIntel",
} as const;

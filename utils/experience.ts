export interface TimelineItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
  icon: string;
  current: boolean;
  location: string;
}

const experienceData: TimelineItem[] = [
  {
    company: "PwC",
    role: "Experience Associate",
    period: "June 2026 - Present",
    description: [
      "Specializing in Cloud Security, User Lifecycle Management, and Identity & Access Management (IAM) within Oracle ERP & HCM Cloud ecosystems.",
      "Conducting Segregation of Duties (SOD) conflict analysis and designing secure custom roles to safeguard critical business processes."
    ],
    skills: ["Oracle Cloud AI Agents", "Oracle Cloud Fusion", "SOD Analysis", "Oracle Cloud Infrastructure", "Risk Mitigation","Oracle BI", "Oracle Risk Management Cloud"],
    icon: "💼",
    current: true,
    location : "Chennai, India"
  },
  {
    company: "Deloitte",
    role: "Managed Services Engineer I",
    period: "Feb 2023 - June 2026",
    description: [
      "Worked as an Oracle Fusion Cloud Security Analyst, supporting enterprise Oracle HCM and ERP applications.", 
      "Managed user lifecycle operations, access provisioning, role management, and security administration while ensuring compliance with organizational security policies and Segregation of Duties (SoD) controls.", 
      "Collaborated with global teams to resolve security incidents, fulfill access requests, and maintain secure access governance across multiple client environments."
    ],
    skills: ["Oracle Cloud Infrastructure", "Oracle Cloud Fusion HCM", "Oracle Cloud Fusion ERP", "Oracle Risk Management Cloud", "Access Governance", "Auditing"],
    icon: "🛡️",
    current: false,
    location : "Chennai, India"
  }
];

export default experienceData;
import { imagesData } from "@/imgData";

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
  year: string;
  role: string;
  overview: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  prototypeUrl?: string;
}

// You can use mock or real data here

export const caseStudies: CaseStudy[] = [
  {
    id: "atd",
    title: "Account Team Directory (ATD)",
    description:
      "Unified four disconnected sales tools into a single intuitive platform. Introduced smart search with ElasticSearch and crafted role-based views, significantly improving efficiency and redefining the team’s approach to UX.",
    images: imagesData.atd,
    category: "Enterprise",
    year: "2025",
    role: "UX Strategist",
    overview:
      "Streamlined the sales team’s workflow by consolidating scattered tools into one unified web application.",
    situation:
      "Cisco’s sales reps used four disconnected tools to find account owners, agents, and team structures, resulting in redundant work, fragmented communication, and missed opportunities to engage stakeholders.",
    task: "Design a centralized, intuitive platform to enable fast and reliable lookup of account teams, ownership details, and user responsibilities—while simplifying the complex backend logic.",
    action:
      "Pioneered UX research by tapping into Statement of Work (SOW) calls as natural discovery points. Defined user personas and flows for agents and managers. Integrated ElasticSearch with fuzzy logic for smart queries. Designed Table and Grid views to address information density needs. Led UX evangelism, elevating UX role from UI-only to strategic partner.",
    result:
      "Improved search success rate by 50% using intelligent filters. Enhanced clarity on account ownership through one-click visualizations. Inspired three other internal teams to adopt UX-driven approaches based on ATD’s success.",
    prototypeUrl: "https://prototype.link/atd",
  },
  {
    id: "ops-design-system",
    title: "OPS Design System",
    description:
      "Built a robust internal design system with 15+ components and 40+ variants, aligning internal Apple tools under a unified visual language. Improved onboarding clarity and achieved 80% developer engagement.",
    images: imagesData.ops,
    category: "Design System",
    year: "2024",
    role: "UX Systems Designer",
    overview:
      "Developed a unified design language for Apple’s internal operations and productivity tools.",
    situation:
      "Multiple internal platforms lacked visual and structural cohesion. Designers reused inconsistent components, and developers often duplicated UI logic—creating onboarding delays and reducing product polish.",
    task: "Establish a robust design system that reinforces Apple’s design standards, improves cross-platform consistency, and accelerates both design and engineering workflows.",
    action:
      "Audited interfaces across 5+ products. Defined component principles and built a library of 15+ components with 40+ stylistic variants. Integrated token-based theming for dark/light mode. Collaborated closely with engineers for spec accuracy and led adoption sessions with product teams.",
    result:
      "Reduced onboarding-related design confusion by 70%. Achieved 80% developer adoption. Established a scalable design language now used across Apple’s internal productivity tools.",
    prototypeUrl: "https://prototype.link/ops-design-system",
  },
  {
    id: "eportfolio",
    title: "ePortfolio Platform",
    description:
      "Designed a structured platform for students to manage learning events, log reflections, and collaborate with supervisors. Created a reusable, scalable B2B product model for deployment across multiple universities.",
    images: imagesData.ePortfolio,
    category: "B2B Application",
    year: "2023",
    role: "Lead UX Designer",
    overview:
      "Redesigned a fragmented academic system into a unified digital platform for students, supervisors, and administrators.",
    situation:
      "The university lacked a structured digital system to document student learning, event feedback, and progression. Students and supervisors relied on disjointed tools such as spreadsheets, shared drives, and emails, which led to inconsistent workflows, lost feedback, and delayed approvals.",
    task: "Design a centralized, scalable solution to manage learning events, supervisor feedback, student reflections, and automated portfolio creation—ensuring it could be reused across multiple educational institutions.",
    action:
      "Led contextual inquiries and stakeholder interviews with faculty, admin, and students. Created journey maps, service blueprints, and role-specific workflows. Applied card sorting and usability testing to refine the IA. Designed responsive, accessible interfaces and built a Figma component library for consistent handoffs.",
    result:
      "Reduced supervisor approval time by 60%, enabled students to generate a portfolio in 2 clicks, and improved transparency across the academic lifecycle. The platform gained interest from partner universities for scaled deployment.",
    prototypeUrl: "https://www.wallofportfolios.in/?company=All",
  },
  {
    id: "firstpass-patient-app",
    title: "Firstpass Patient Journey App",
    description:
      "Crafted a seamless mobile experience for patients to navigate hospital visits with real-time updates, pre-arrival planning, and guided in-hospital journeys—integrated with Firstpass’ unified healthcare platform.",
    images: imagesData.firstpass, // replace this with your image import
    category: "Healthcare App",
    year: "2022",
    role: "UI/UX Designer",
    overview:
      "Designed a mobile-first companion for Firstpass web platform that enhances patient experience by connecting touchpoints from pre-arrival to discharge through intelligent appointment and facility management.",
    situation:
      "Firstpass had a powerful backend web platform for hospital administrators, but patients lacked a streamlined digital interface to view appointments, receive directions, and track medical workflows. Hospitals often faced bottlenecks, patient confusion, and long waiting times due to disconnected communication.",
    task: "Create a companion mobile app that syncs with Firstpass’s unified hospital system to guide patients through their healthcare journey from pre-arrival planning to real time queue status while maintaining brand consistency and accessibility.",
    action:
      "Collaborated with external research partners for user insights. Defined the brand identity and built a custom design system in Figma. Designed user flows for check-ins, vitals, doctor visits, lab processes, and real-time updates. Advocated for Apple Watch integration to minimize phone dependency during hospital navigation. Conducted UX synthesis and ensured visual clarity across all modules.",
    result:
      "Improved patient satisfaction by reducing in-hospital confusion and idle time. Enabled real-time updates across vitals, prescriptions, and tests. Streamlined appointment flow reduced queue delays. The app complemented the Firstpass ecosystem by enhancing end-to-end patient journey visibility and contributed to better operational efficiency.",
    prototypeUrl: "https://www.wallofportfolios.in/?company=Firstpass", // Replace with your prototype if different
  },
];

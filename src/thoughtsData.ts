import { imagesData } from "@/imgData";

export interface Thought {
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
export const thoughts: Thought[] = [
  {
    id: "gPay",
    title: "Gpay",
    description: "Personalized & Effortless Transactions",
    images: imagesData.gpay,
    category: "Experiment",
    year: "2020",
    role: "UXer",
    overview:
      "Enhancing payment experience by streamlining transactions and providing personalized features for greater user convenience and satisfaction.",
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
    id: "eportfolio",
    title: "ePortfolio Platform",
    description:
      "A university tool for managing learning events and portfolios.",
    images: imagesData.ePortfolio,
    category: "Education",
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
];

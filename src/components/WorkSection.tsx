import { motion } from 'framer-motion';
import { useState } from 'react';
import CaseStudyCard from './CaseStudyCard';
import CaseStudyDetail from './CaseStudyDetail';
import caseStudy1 from '@/assets/case-study-1.jpg';
import caseStudy2 from '@/assets/case-study-2.jpg';
import caseStudy3 from '@/assets/case-study-3.jpg';
import caseStudy4 from '@/assets/case-study-4.jpg';

interface CaseStudy {
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

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'FinanceFlow Mobile App',
    description: 'Redesigned mobile banking experience for millennials with focus on budgeting and investment tracking.',
    images: [caseStudy1, caseStudy2, caseStudy3, caseStudy4],
    category: 'Mobile App',
    year: '2024',
    role: 'Lead UX Designer',
    overview: 'FinanceFlow is a mobile banking application designed specifically for millennials who want better control over their finances. The app combines traditional banking features with modern budgeting tools and investment tracking.',
    situation: 'Traditional banking apps were not meeting the needs of younger users who wanted more visual, intuitive ways to manage their money. Market research showed 73% of millennials were dissatisfied with their current banking experience.',
    task: 'Design a mobile-first banking experience that would appeal to millennials while maintaining security and compliance requirements. The app needed to simplify complex financial concepts and make money management engaging.',
    action: 'Conducted extensive user research with 50+ millennials, created personas, and developed a design system focused on clarity and visual hierarchy. Implemented gamification elements and interactive data visualization to make financial planning more engaging.',
    result: 'The redesigned app saw a 45% increase in daily active users and 60% improvement in user satisfaction scores. Time spent in-app increased by 35%, and users reported feeling more confident about their financial decisions.',
    prototypeUrl: 'https://figma.com/proto/example'
  },
  {
    id: '2',
    title: 'Enterprise Dashboard Pro',
    description: 'B2B SaaS dashboard for enterprise clients managing complex data workflows and team collaboration.',
    images: [caseStudy2, caseStudy1, caseStudy4, caseStudy3],
    category: 'B2B SaaS',
    year: '2024',
    role: 'Senior UX Designer',
    overview: 'Enterprise Dashboard Pro is a comprehensive B2B SaaS solution that helps large organizations manage complex data workflows, team collaboration, and project tracking in a unified interface.',
    situation: 'Enterprise clients were struggling with fragmented tools and inefficient workflows. Teams were spending 40% of their time switching between different platforms and struggling to maintain visibility across projects.',
    task: 'Create a unified dashboard that could handle complex enterprise workflows while remaining intuitive for users with varying technical expertise. The solution needed to scale across different team sizes and use cases.',
    action: 'Collaborated with stakeholders across 5 different enterprise clients to understand pain points. Designed a modular dashboard system with customizable widgets and implemented advanced filtering and search capabilities.',
    result: 'Reduced task completion time by 50% and increased team productivity metrics by 35%. Client retention rate improved by 25%, and the platform now serves over 100,000 enterprise users globally.',
    prototypeUrl: 'https://figma.com/proto/example2'
  },
  {
    id: '3',
    title: 'E-commerce Reimagined',
    description: 'Complete redesign of e-commerce platform focusing on conversion optimization and user experience.',
    images: [caseStudy3, caseStudy4, caseStudy1, caseStudy2],
    category: 'E-commerce',
    year: '2023',
    role: 'UX/UI Designer',
    overview: 'A complete overhaul of an existing e-commerce platform that was struggling with low conversion rates and poor user experience. The redesign focused on streamlining the purchase journey and building trust with customers.',
    situation: 'The existing platform had a 2.1% conversion rate, well below industry standards. Users were abandoning their carts at a rate of 78%, and customer feedback indicated frustration with the checkout process.',
    task: 'Redesign the entire user journey from product discovery to purchase completion. Focus on reducing friction, building trust, and creating a more engaging shopping experience that would increase conversions.',
    action: 'Conducted user testing sessions, analyzed heatmaps and user journey data, and redesigned the information architecture. Implemented a streamlined checkout process and improved product discovery through better search and filtering.',
    result: 'Conversion rate increased to 4.8% within 3 months of launch. Cart abandonment decreased to 45%, and average order value increased by 28%. Customer satisfaction scores improved from 6.2/10 to 8.7/10.',
    prototypeUrl: 'https://figma.com/proto/example3'
  },
  {
    id: '4',
    title: 'Healthcare Connect',
    description: 'Telemedicine platform connecting patients with healthcare providers through intuitive video consultations.',
    images: [caseStudy4, caseStudy3, caseStudy2, caseStudy1],
    category: 'Healthcare',
    year: '2023',
    role: 'Lead UX Designer',
    overview: 'Healthcare Connect is a telemedicine platform that makes it easy for patients to connect with healthcare providers through video consultations, appointment scheduling, and digital health records.',
    situation: 'The COVID-19 pandemic highlighted the need for accessible telehealth solutions. Existing platforms were complex and intimidating for older users, who represent a significant portion of healthcare consumers.',
    task: 'Design a telemedicine platform that would be accessible to users of all ages and technical abilities while maintaining HIPAA compliance and ensuring high-quality healthcare delivery.',
    action: 'Conducted extensive accessibility testing with users aged 65+, simplified the interface to essential functions, and created clear visual cues for navigation. Implemented voice guidance and large touch targets for better usability.',
    result: 'Platform adoption among users 65+ increased by 150%. Patient satisfaction scores reached 9.2/10, and the platform now facilitates over 10,000 consultations monthly with 95% successful connection rate.',
    prototypeUrl: 'https://figma.com/proto/example4'
  }
];

interface WorkSectionProps {
  sectionId: string;
  title: string;
  subtitle: string;
}

const WorkSection = ({ sectionId, title, subtitle }: WorkSectionProps) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleCaseStudyClick = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setTimeout(() => setSelectedCaseStudy(null), 300);
  };

  const getRelatedWorks = (currentId: string) => {
    return caseStudies.filter(cs => cs.id !== currentId).slice(0, 3);
  };

  return (
    <>
      <section id={sectionId} className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-grotesk font-bold mb-4">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
              {caseStudies.map((caseStudy, index) => (
                <div key={caseStudy.id} className="flex-shrink-0 w-80 snap-start">
                  <CaseStudyCard
                    {...caseStudy}
                    onClick={() => handleCaseStudyClick(caseStudy)}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop/Tablet: 2 per row */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={caseStudy.id}
                {...caseStudy}
                onClick={() => handleCaseStudyClick(caseStudy)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CaseStudyDetail
        caseStudy={selectedCaseStudy}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
        relatedWorks={selectedCaseStudy ? getRelatedWorks(selectedCaseStudy.id) : []}
        onRelatedWorkClick={handleCaseStudyClick}
      />
    </>
  );
};

export default WorkSection;
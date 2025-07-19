import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

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

interface CaseStudyDetailProps {
  caseStudy: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
  relatedWorks: CaseStudy[];
  onRelatedWorkClick: (caseStudy: CaseStudy) => void;
}

const CaseStudyDetail = ({ caseStudy, isOpen, onClose, relatedWorks, onRelatedWorkClick }: CaseStudyDetailProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 z-50 glass rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/50">
              <div>
                <h2 className="text-2xl font-grotesk font-bold">{caseStudy.title}</h2>
                <p className="text-muted-foreground">{caseStudy.role} • {caseStudy.year}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="magnetic"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Scrollable Content */}
            <div className="h-[calc(100%-80px)] overflow-y-auto">
              <div className="p-6 space-y-8">
                {/* Hero Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="rounded-xl overflow-hidden"
                >
                  <img
                    src={caseStudy.images[0]}
                    alt={caseStudy.title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </motion.div>

                {/* Overview */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-grotesk font-semibold mb-4">Project Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">{caseStudy.overview}</p>
                </motion.section>

                {/* STAR Framework */}
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'Situation', content: caseStudy.situation },
                    { title: 'Task', content: caseStudy.task },
                    { title: 'Action', content: caseStudy.action },
                    { title: 'Result', content: caseStudy.result },
                  ].map((section, index) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="space-y-3"
                    >
                      <h4 className="text-lg font-grotesk font-medium text-primary">
                        {section.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {section.content}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Images */}
                {caseStudy.images.length > 1 && (
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-grotesk font-semibold">Design Process</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {caseStudy.images.slice(1).map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="rounded-xl overflow-hidden"
                        >
                          <img
                            src={image}
                            alt={`${caseStudy.title} process ${index + 1}`}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>
                )}

                {/* Prototype CTA */}
                {caseStudy.prototypeUrl && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="text-center py-8"
                  >
                    <Button
                      onClick={() => window.open(caseStudy.prototypeUrl, '_blank')}
                      className="btn-gradient text-lg px-8 py-4 h-auto magnetic"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      View Prototype
                    </Button>
                  </motion.div>
                )}

                {/* Related Works */}
                {relatedWorks.length > 0 && (
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="border-t border-border/50 pt-8"
                  >
                    <h3 className="text-xl font-grotesk font-semibold mb-6">Other Works You Might Like</h3>
                    <div className="flex gap-4 overflow-x-auto pb-4">
                      {relatedWorks.map((work, index) => (
                        <div
                          key={work.id}
                          onClick={() => onRelatedWorkClick(work)}
                          className="flex-shrink-0 w-64 glass rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                        >
                          <img
                            src={work.images[0]}
                            alt={work.title}
                            className="w-full h-32 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-medium text-sm">{work.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">{work.category}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.section>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyDetail;
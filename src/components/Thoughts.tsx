import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyDetail from "./CaseStudyDetail";
import { thoughts, Thought } from "@/thoughtsData";

interface WorkSectionProps {
  sectionId: string;
  title: string;
  subtitle: string;
}

const WorkSection = ({ sectionId, title, subtitle }: WorkSectionProps) => {
  const [selectedCaseStudy, setSelectedThought] = useState<Thought | null>(
    null
  );
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCaseStudyClick = (Thought: Thought) => {
    setSelectedThought(Thought);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setTimeout(() => setSelectedThought(null), 300);
  };

  const getRelatedWorks = (currentId: string) => {
    return thoughts.filter((cs) => cs.id !== currentId).slice(0, 3);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(
        scrollRef.current.scrollLeft / scrollRef.current.offsetWidth
      );
      setActiveCardIndex(index);
    }
  };

  return (
    <>
      <section id={sectionId} className="py-20 px-0">
        <div className="container mx-auto max-w-7xl px-6">
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
            <div className="relative -mx-4 px-2">
              <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar"
                style={{
                  scrollSnapType: "x mandatory",
                  WebkitOverflowScrolling: "touch",
                }}
                onScroll={handleScroll}
              >
                {thoughts.map((caseStudy, index) => (
                  <div
                    key={caseStudy.id}
                    className="flex-shrink-0 snap-center w-[90vw] sm:w-[300px] max-w-[360px]"
                  >
                    <CaseStudyCard
                      {...caseStudy}
                      index={index}
                      onClick={() => handleCaseStudyClick(caseStudy)}
                      activeCardIndex={activeCardIndex}
                      totalCards={thoughts.length}
                    />
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2">
                  {thoughts.map((_, i) => (
                    <div
                      key={i}
                      className={`h-0.5 w-5 rounded-full transition-all duration-300 ${
                        i === activeCardIndex
                          ? "bg-primary"
                          : "bg-muted-foreground/30"
                      }`}
                    ></div>
                  ))}
                </div>

                <div className="text-xs text-muted-foreground bg-background/70 px-2 py-1 rounded-md backdrop-blur-sm">
                  {activeCardIndex + 1}/{thoughts.length}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet: 2 per row grid */}
          {/* Desktop/Tablet: 2 per row grid (only visible on md+) */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-10 md:px-10">
            {thoughts.map((cs, index) => (
              <CaseStudyCard
                key={cs.id}
                index={index}
                totalCards={thoughts.length}
                onClick={() => handleCaseStudyClick(cs)}
                {...cs}
              />
            ))}
          </div>
        </div>
      </section>

      <CaseStudyDetail
        caseStudy={selectedCaseStudy}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
        relatedWorks={
          selectedCaseStudy ? getRelatedWorks(selectedCaseStudy.id) : []
        }
        onRelatedWorkClick={handleCaseStudyClick}
      />
    </>
  );
};

export default WorkSection;

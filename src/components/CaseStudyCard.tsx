import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CaseStudyCardProps {
  title: string;
  description: string;
  images: string[];
  category: string;
  year: string;
  onClick: () => void;
  index: number;
  totalCards: number;
  activeCardIndex?: number;
}

const CaseStudyCard = ({
  title,
  description,
  images,
  category,
  year,
  onClick,
  index,
  totalCards,
}: CaseStudyCardProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(1);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const imageEls = container.querySelectorAll(".image-slide");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          const idx = Number(visible.target.getAttribute("data-index"));
          setActiveImage(idx + 1);
        }
      },
      { root: container, threshold: 0.5 }
    );

    imageEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [images]);

  return (
    <motion.div
      onClick={onClick}
      className="group relative w-full h-full max-w-[360px] md:max-w-none md:h-auto cursor-pointer rounded-xl md:rounded-2xl border border-transparent transition-all duration-500 
      hover:border-[1px] 
      hover:border-gradient 
      hover:shadow-[0_2px_3px_#1592FF] 
      "
    >
      {/* Card content (already using glass effect and rounded corners) */}
      <div className="glass h-full w-full overflow-hidden rounded-xl md:rounded-2xl">
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-t-xl aspect-[3/2] md:aspect-[16/9]">
          <div
            ref={scrollRef}
            className="flex h-full overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar md:overflow-hidden"
          >
            {images.map((image, idx) => (
              <div
                key={idx}
                data-index={idx}
                className="image-slide flex-shrink-0 w-full h-full snap-start"
              >
                <img
                  src={image}
                  alt={`${title} - Image ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Image Counter */}
          <div className="absolute bottom-2 right-3 text-[10px] bg-background/80 px-2 py-0.5 rounded-full shadow-md z-10 md:hidden">
            {activeImage} / {images.length}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 space-y-2 md:space-y-4">
          <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground">
            <span className="px-2 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs md:text-sm">
              {category}
            </span>
            <span>{year}</span>
          </div>

          {/* Title with hover gradient */}
          <h3 className="text-base md:text-xl font-semibold leading-snug line-clamp-2 md:line-clamp-2 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:text-gradient">
            {title}
          </h3>

          <p className="text-muted-foreground line-clamp-8">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;

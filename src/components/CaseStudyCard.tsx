import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface CaseStudyCardProps {
  title: string;
  description: string;
  images: string[];
  category: string;
  year: string;
  onClick: () => void;
  index: number;
}

const CaseStudyCard = ({ title, description, images, category, year, onClick, index }: CaseStudyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const animate = () => {
      if (!isHovered) {
        scrollPosition += 0.5;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="glass rounded-2xl overflow-hidden cursor-pointer group stack-effect"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container - 3/4 height */}
      <div className="h-80 relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex h-full transition-all duration-300 group-hover:scale-105"
          style={{ 
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory'
          }}
        >
          {/* Duplicate images for seamless loop */}
          {[...images, ...images].map((image, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full h-full"
              style={{ scrollSnapAlign: 'start' }}
            >
              <img
                src={image}
                alt={`${title} - Image ${(idx % images.length) + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container - 1/4 height */}
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground">
            {category}
          </span>
          <span>{year}</span>
        </div>
        
        <h3 className="text-xl font-grotesk font-semibold group-hover:bg-gradient-portfolio group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Hover indicator */}
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          className="h-0.5 bg-gradient-portfolio rounded-full"
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
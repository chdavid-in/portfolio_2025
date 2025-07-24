import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { testimonialMyData } from "@/data/testimonialMyData";

interface TestimonyProps {
  sectionId: string;
  title: string;
  subtitle: string;
}

export default function Testimony({
  sectionId,
  title,
  subtitle,
}: TestimonyProps) {
  return (
    <section
      id={sectionId}
      className="w-full py-20 px-4 md:px-10 rounded-xl text-foreground"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-grotesk font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <CircularTestimonials
          testimonials={testimonialMyData}
          autoplay={true}
          colors={{
            name: "var(--foreground)",
            designation: "var(--muted-foreground)",
            testimony: "var(--muted-foreground)",
            arrowBackground: "var(--card)",
            arrowForeground: "var(--foreground)",
            arrowHoverBackground: "var(--primary)",
          }}
          fontSizes={{
            name: "1.75rem",
            designation: "1.125rem",
            quote: "1.125rem",
          }}
        />
      </div>
    </section>
  );
}

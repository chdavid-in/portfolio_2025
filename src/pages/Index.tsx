import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import Thoughts from "@/components/Thoughts";
import Footer from "@/components/Footer";
import SplashCursor from "@/components/SplashCursor";
import Testimony from "@/components/testimony";
import ClientLogoMarquee from "@/components/ClientLogoMarquee";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SplashCursor />
      <Navigation />

      <main>
        <Hero />

        <WorkSection
          sectionId="work"
          title="Work that Works"
          subtitle="Crafting digital experiences that solve real problems and drive business results."
        />

        <ClientLogoMarquee />
        {/* Title with hover gradient 
        <Thoughts
          sectionId="thoughts"
          title="Work might work"
          subtitle="Personal projects and explorations in UI/UX design, motion graphics, and interaction design."
        />*/}
        <Testimony
          sectionId="about"
          title="About"
          subtitle="Crafting digital experiences that solve real problems and drive business results."
        />
      </main>

      <Footer />
    </div>
  );
};

export default Index;

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WorkSection from '@/components/WorkSection';
import Footer from '@/components/Footer';
import SplashCursor from '@/components/SplashCursor';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SplashCursor />
      <Navigation />
      
      <main>
        <Hero />
        
        <WorkSection 
          sectionId="work"
          title="My Work"
          subtitle="Crafting digital experiences that solve real problems and drive business results."
        />
        
        <WorkSection 
          sectionId="experiments"
          title="My Experiments"
          subtitle="Personal projects and explorations in UI/UX design, motion graphics, and interaction design."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

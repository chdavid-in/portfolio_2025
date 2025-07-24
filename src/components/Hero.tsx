import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Squares } from "@/components/ui/squares";

const Hero = () => {
  const scrollToWork = () => {
    const element = document.querySelector("#work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1f-wkvTKkqvWK9DP1ertqTj_uw8Dv0gNp/view?usp=drive_link",
      "_blank"
    );
  };

  // 🔁 Role flip animation
  const roles = ["David Ch", "a UXer", "a Designer", "a Gamer", "a Creator"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-background"
    >
      {/* 🔵 Squares animated background */}
      <div className="inset-0 z-0 pointer-events-none">
        <Squares className="absolute top-0 left-0 w-full h-full" />
      </div>

      {/* 🔵 Gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90 z-0" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* ✨ Main Heading with flipping roles */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-grotesk font-bold"
          >
            Hi, I'm{" "}
            <span className="text-gradient bg-clip-text text-transparent"></span>{" "}
            <span className="inline-block relative w-[200px] sm:w-[400px] h-[1.2em] align-middle">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-0 top-0 text-gradient bg-clip-text text-transparent"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* ✨ Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Designing intuitive enterprise UX with clarity, strategy, and
            impact.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-muted-foreground/80 flex items-center justify-center flex-wrap gap-2"
          >
            Championing user needs while aligning product goals
            <span className=" w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500 animate-pulse-dot " />
            <span>8+ years of doing</span>
          </motion.p>

          {/* ✨ Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              onClick={scrollToWork}
              className="w-[260px] sm:w-auto btn-gradient text-lg px-8 py-4 h-auto font-medium magnetic"
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              onClick={downloadResume}
              className="w-[260px] sm:w-auto border-border hover:border-primary text-lg px-8 py-4 h-auto font-medium smooth-transition magnetic"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* ✨ Floating animation elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-portfolio rounded-full opacity-60"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-gradient-portfolio rounded-full opacity-40"
        />
      </div>
    </section>
  );
};

export default Hero;

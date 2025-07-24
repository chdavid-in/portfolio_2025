import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toggleTheme } from "@/themeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect theme on mount
  useEffect(() => {
    const checkTheme = () => {
      const dark = document.documentElement.classList.contains("dark");
      setIsDarkMode(dark);
    };

    checkTheme();

    // Listen to changes in localStorage or document class
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },

    /*{ name: "Thoughts", href: "#experiments" },*/

    { name: "About", href: "#about" },
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/1f-wkvTKkqvWK9DP1ertqTj_uw8Dv0gNp/view?usp=drive_link",
      external: true,
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleToggleTheme = () => {
    toggleTheme();
    setIsDarkMode(!isDarkMode); // update manually to reflect immediately
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-grotesk font-bold text-gradient bg-clip-text text-transparent"
          >
            David Ch
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  {item.name}
                </a>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  {item.name}
                </button>
              )
            )}

            {/* Theme Toggle */}
            <button
              onClick={handleToggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-accent transition"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun size={18} className="text-foreground" />
              ) : (
                <Moon size={18} className="text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Menu + Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={handleToggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-accent transition"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun size={18} className="text-foreground" />
              ) : (
                <Moon size={18} className="text-foreground" />
              )}
            </button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 rounded-2xl px-4 pt-8 glass flex flex-col justify-between items-center"
          >
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center p-2 m-2 text-xl text-muted-foreground hover:text-foreground transition"
                >
                  {item.name}
                </a>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full m-2 p-2 text-centers text-xl text-muted-foreground hover:text-foreground transition"
                >
                  {item.name}
                </button>
              )
            )}

            {/* Let’s Connect Section */}
            <div className="mt-24 mb-12 text-center text-muted-foreground">
              <p className="text-lg font-medium">Let’s Connect</p>
              <p className="mt-2 text-md">
                {" "}
                <a
                  href="mailto:david.uiux7@gmail.com"
                  className="hover:text-foreground  transition"
                >
                  david.uiux7@gmail.com
                </a>
              </p>
              <p className="mt-1 text-md">
                {" "}
                <a
                  href="tel:+918179172822"
                  className="hover:text-foreground transition"
                >
                  +91 8686 143 753
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;

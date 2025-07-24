import { motion } from "framer-motion";
import { Github, Linkedin, Globe } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/davidch",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/davidch", label: "GitHub" },
    { icon: Globe, href: "https://dribbble.com/davidch", label: "Dribbble" },
  ];

  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="container max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side – Name & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-1 text-sm text-muted-foreground"
        >
          <p>Designed by David Ch</p>
          <p>&copy; 2024. All rights reserved.</p>
        </motion.div>

        {/* Right side – Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex space-x-6"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background text-foreground smooth-transition magnetic hover:bg-gradient-to-br hover:from-[hsl(var(--gradient-start))] hover:via-[hsl(var(--gradient-middle))] hover:to-[hsl(var(--gradient-end))]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

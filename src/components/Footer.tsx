import { motion } from 'framer-motion';
import { Github, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/davidch', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/davidch', label: 'GitHub' },
    { icon: Globe, href: 'https://dribbble.com/davidch', label: 'Dribbble' },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-primary/10 smooth-transition magnetic"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Designed by David Ch • Built with ❤️</p>
            <p>&copy; 2024 David Ch. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
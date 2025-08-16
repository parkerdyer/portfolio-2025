import ThemeToggle from "./ui/theme-toggle";
import { personalInfo } from "@/lib/data";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      body.style.overflow = "hidden";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md backdrop-filter bg-background/70 dark:bg-background/40 border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-4xl mx-auto p-4 flex justify-between items-center">
        <motion.a
          className="flex items-center text-lg font-medium"
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ✨ {personalInfo.name}
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {[
            "experience",
            "skills",
            "projects",
            "education",
            "additional info",
            "resume",
          ].map((item, index) => (
            <motion.a
              key={item}
              href={
                item === "resume"
                  ? `/Parker Dyer Resume 2025.pdf`
                  : `#${item.split(" ").join("-")}`
              }
              target={item === "resume" ? "_blank" : "_self"}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item === "experience" && "💼 "}
              {item === "skills" && "🛠️ "}
              {item === "projects" && "🚀 "}
              {item === "education" && "🎓 "}
              {item === "additional info" && "💡 "}
              {item === "resume" && "📄 "}
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-12 left-0 right-0 md:hidden py-4 px-4 border-t border-border/10 backdrop-blur-md backdrop-filter bg-background/90 overflow-y-scroll max-h-[80vh]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              {[
                "experience",
                "skills",
                "projects",
                "education",
                "additional info",
                "resume",
              ].map((item, index) => (
                <motion.a
                  key={item}
                  href={
                    item === "resume"
                      ? `/Parker Dyer Resume 2025.pdf`
                      : `#${item.split(" ").join("-")}`
                  }
                  target={item === "resume" ? "_blank" : "_self"}
                  className="transition-colors hover:text-foreground/80 text-foreground/60 py-2"
                  onClick={(e) => {
                    if (item !== "resume") {
                      document.body.style.overflow = "auto"; // Re-enable scrolling immediately
                      setTimeout(() => {
                        toggleMenu();
                      }, 750);
                    } else {
                      toggleMenu();
                    }
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  {item === "experience" && "💼 "}
                  {item === "skills" && "🛠️ "}
                  {item === "projects" && "🚀 "}
                  {item === "education" && "🎓 "}
                  {item === "additional info" && "💡 "}
                  {item === "resume" && "📄 "}
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

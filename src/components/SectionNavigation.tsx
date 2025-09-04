import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const SectionNavigation = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const sections = [
    "hero",
    "about", 
    "skills",
    "experience",
    "projects",
    "certifications",
    "contact"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      
      setIsVisible(window.scrollY > 100);
      
      
      const sectionElements = sections.map((id, index) => ({
        id,
        index,
        element: document.getElementById(id)
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (direction: "up" | "down") => {
    let targetIndex = currentSection;
    
    if (direction === "up" && currentSection > 0) {
      targetIndex = currentSection - 1;
    } else if (direction === "down" && currentSection < sections.length - 1) {
      targetIndex = currentSection + 1;
    }
    
    const targetElement = document.getElementById(sections[targetIndex]);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2"
    >
      {/* Up Arrow */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollToSection("up")}
          disabled={currentSection === 0}
          className={`w-12 h-12 rounded-full bg-background/80 backdrop-blur-lg border-border hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 ${
            currentSection === 0 ? "opacity-50 cursor-not-allowed" : "shadow-lg hover:shadow-xl"
          }`}
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      </motion.div>

      
      <div className="flex flex-col gap-1 py-2">
        {sections.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              const targetElement = document.getElementById(sections[index]);
              if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                  top: offsetTop,
                  behavior: "smooth"
                });
              }
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              currentSection === index
                ? "bg-primary border-primary shadow-lg scale-125"
                : "bg-transparent border-muted-foreground/50 hover:border-primary/60"
            }`}
          />
        ))}
      </div>

      {/* Down Arrow */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollToSection("down")}
          disabled={currentSection === sections.length - 1}
          className={`w-12 h-12 rounded-full bg-background/80 backdrop-blur-lg border-border hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 ${
            currentSection === sections.length - 1 ? "opacity-50 cursor-not-allowed" : "shadow-lg hover:shadow-xl"
          }`}
        >
          <ChevronDown className="h-5 w-5" />
        </Button>
      </motion.div>

      {/* Back to Top Button */}
      {currentSection > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="default"
            size="icon"
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full button-gradient glow-effect shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SectionNavigation;
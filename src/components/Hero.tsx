import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0 hero-gradient opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent animate-glow-pulse" />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-text mb-6"
          >
            Kumar Tanmay
          </motion.h1>
          
          {/* Roles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Full-Stack Developer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Data Analyst • AI Enthusiast
            </p>
          </motion.div>
          

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="default"
              size="lg"
              className="button-gradient glow-effect min-w-[140px] group"
              onClick={() => window.open("https://linkedin.com/in/k-tanmay", "_blank")}
            >
              <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="min-w-[140px] border-primary hover:bg-primary/10 group"
              onClick={() => window.open("https://github.com/KumarTanmay554", "_blank")}
            >
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              GitHub
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              className="min-w-[140px] group"
              onClick={() => window.open("/Kumar_Tanmay_CV.pdf", "_blank")}
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
      

      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 right-16 w-3 h-3 bg-accent rounded-full opacity-40"
      />
    </section>
  );
};

export default Hero;
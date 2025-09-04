import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Zap, Users, BarChart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Dine-In Restaurant Platform",
      description: "Full-stack restaurant management system with real-time ordering, inventory tracking, and customer analytics. Features modern UI/UX with seamless payment integration.",
      tech: ["Next.js", "Prisma", "Supabase", "TypeScript", "Stripe"],
      icon: Users,
      liveLink: "https://dinein-s.vercel.app/",
      githubLink: "https://github.com/KumarTanmay554/Dine-In",
      highlight: "Live Production App"
    },
    {
      title: "Medium Clone",
      description: "High-performance blogging platform with advanced text editor, user authentication, and social features. Achieved 95% Lighthouse performance score.",
      tech: ["React", "PostgreSQL", "Hono", "TypeScript", "Redis"],
      icon: Zap,
      liveLink: "https://medium-beige-eight.vercel.app/",
      githubLink: "https://github.com/KumarTanmay554/Medium",
      highlight: "95% Lighthouse Score"
    },
    {
      title: "HRMS System",
      description: "Enterprise HR management system with AI-powered analytics, employee performance tracking, and automated reporting using modern microservices architecture.",
      tech: ["Next.js", "Go", "Python", "AI Analytics", "Docker"],
      icon: BarChart,
      liveLink: "#",
      githubLink: "#",
      highlight: "AI-Powered Analytics"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="project-card h-full group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-3xl" />
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <project.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                      <Badge variant="secondary" className="text-xs">
                        {project.highlight}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs hover:bg-primary/10">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 group/btn"
                        onClick={() => window.open(project.liveLink, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group/btn"
                        onClick={() => window.open(project.githubLink, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
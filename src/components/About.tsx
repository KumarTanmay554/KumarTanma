import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Code, BarChart, Brain } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "CS Student @ VIT Bhopal",
      description: "Pursuing Computer Science with focus on emerging technologies"
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Building scalable applications with modern frameworks"
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "Extracting insights from complex datasets"
    },
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Exploring machine learning and AI applications"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="project-card mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-center">
                  Passionate about creating innovative solutions through code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  I'm a Computer Science student at VIT Bhopal with a passion for full-stack development, 
                  data analytics, and artificial intelligence. I love turning complex problems into elegant 
                  solutions and building applications that make a real impact. Currently exploring the 
                  intersection of AI and web development to create smarter, more intuitive user experiences.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="project-card h-full group">
                  <CardContent className="p-6 text-center">
                    <item.icon className="h-8 w-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
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

export default About;
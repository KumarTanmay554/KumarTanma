import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="project-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold mb-2">
                      Data Science Intern
                    </CardTitle>
                    <p className="text-xl text-primary font-semibold">
                      NoBroker Technologies Solution Pvt Ltd
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Jan 2025 – Mar 2025</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Bangalore, India</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20"
                    >
                      <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold text-primary">+30%</p>
                      <p className="text-sm text-muted-foreground">Model Accuracy</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="text-center p-4 rounded-lg bg-accent/10 border border-accent/20"
                    >
                      <div className="h-8 w-8 mx-auto mb-2 text-accent font-bold text-xl">50K+</div>
                      <p className="text-sm text-muted-foreground">Records Processed</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="text-center p-4 rounded-lg bg-secondary/10 border border-secondary/20"
                    >
                      <div className="h-8 w-8 mx-auto mb-2 text-foreground font-bold text-lg">ML</div>
                      <p className="text-sm text-muted-foreground">XGBoost & SHAP</p>
                    </motion.div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          Preprocessed and cleaned 50,000+ real estate records, implementing advanced data validation techniques
                        </span>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          Developed XGBoost machine learning model achieving 30% improvement in property valuation accuracy
                        </span>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          Implemented SHAP explainability framework for transparent model decision-making and feature importance analysis
                        </span>
                      </motion.li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {["Python", "XGBoost", "SHAP", "Data Analysis", "Machine Learning", "Real Estate"].map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
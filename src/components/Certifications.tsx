import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle AI Vector Search Certified Professional",
      issuer: "Oracle",
      date: "2024",
      credentialId: "OCI-VS-2024",
      badge: "Professional Level",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=AE3A5D434C01D3C502FB0242259509D6348BA0C701BF398C4FF6C19485665BB9"
    },
    {
      title: "Oracle Cloud Infrastructure Generative AI Professional",
      issuer: "Oracle",
      date: "2024",
      credentialId: "OCI-GAI-PRO-2024",
      badge: "Professional Level",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D2AA54D4DBDD6C46E459A9E902EABBB8A6C74EC20AE976627732E62A4EB022B3"
    },
    {
      title: "Oracle AI Foundations Associate",
      issuer: "Oracle",
      date: "2024",
      credentialId: "OCI-AI-FOUND-2024",
      badge: "Foundation Level",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8636720CC8BBC13D40949A46CE93C5143873ED72A0DFD27815CA719960EE4636"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Certifications
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="project-card h-full group cursor-pointer"
                      onClick={() => window.open(cert.link, "_blank")}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {cert.badge}
                        </Badge>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">{cert.issuer}</p>
                      <p>Issued: {cert.date}</p>
                      <p className="font-mono text-xs bg-muted/50 px-2 py-1 rounded">
                        {cert.credentialId}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Badge variant="outline" className="text-sm px-4 py-2">
              🚀 Continuously learning and expanding my skill set
            </Badge>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "TechCorp Inc.",
    role: "Software Engineering Intern",
    duration: "Jun 2024 - Aug 2024",
    location: "San Francisco, CA",
    description: [
      "Developed microservices using Node.js and TypeScript, improving API response times by 40%",
      "Collaborated with cross-functional teams to deliver a customer-facing dashboard used by 10,000+ users",
      "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 60%",
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
  },
  {
    company: "InnovateLabs",
    role: "Full Stack Developer Intern",
    duration: "Jan 2024 - May 2024",
    location: "New York, NY",
    description: [
      "Built responsive web applications using React and Next.js for an e-commerce platform",
      "Designed and optimized database schemas, reducing query times by 50%",
      "Mentored junior interns on best practices in code review and testing",
    ],
    technologies: ["Next.js", "Python", "MongoDB", "Docker", "Redis"],
  },
  {
    company: "StartupXYZ",
    role: "Backend Developer Intern",
    duration: "May 2023 - Aug 2023",
    location: "Austin, TX",
    description: [
      "Architected RESTful APIs handling 100,000+ daily requests with 99.9% uptime",
      "Integrated third-party payment systems, processing $500K+ in monthly transactions",
      "Wrote comprehensive unit and integration tests achieving 85% code coverage",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Stripe", "Jest"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-widest uppercase text-sm">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-primary mt-2">
                    <Building2 size={18} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col md:items-end mt-4 md:mt-0 text-muted-foreground text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

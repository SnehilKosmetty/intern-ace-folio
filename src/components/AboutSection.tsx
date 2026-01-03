import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Briefcase, Target } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "M.S. Computer Science", value: "2024-2026" },
  { icon: Briefcase, label: "Internships", value: "3 Completed" },
  { icon: Code2, label: "Projects", value: "10+ Built" },
  { icon: Target, label: "Focus", value: "Full-Stack Dev" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-widest uppercase text-sm">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated Software Developer currently pursuing my Master's degree in 
              Computer Science. With a strong foundation from three impactful internships at 
              leading tech companies, I've developed expertise in building robust, scalable 
              applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in software development is driven by curiosity and a passion for 
              creating solutions that make a difference. I specialize in full-stack development, 
              with particular expertise in React, Node.js, and cloud technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or mentoring fellow students in programming fundamentals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center hover:border-primary/50 transition-colors duration-300"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground mb-1">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

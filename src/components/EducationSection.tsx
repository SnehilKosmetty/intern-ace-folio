import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-widest uppercase text-sm">
            Education
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My Academic <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Master's Degree */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-xl">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Master of Science in Computer Science
                    </h3>
                    <p className="text-primary font-medium mt-1">Stanford University</p>
                  </div>
                  <span className="text-muted-foreground mt-2 md:mt-0">2024 - 2026</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Specializing in Artificial Intelligence and Distributed Systems. 
                  Conducting research on scalable machine learning infrastructure.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Distributed Systems", "Cloud Computing", "Data Structures"].map(
                    (course) => (
                      <span
                        key={course}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {course}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bachelor's Degree */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-xl">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-primary font-medium mt-1">UC Berkeley</p>
                  </div>
                  <span className="text-muted-foreground mt-2 md:mt-0">2020 - 2024</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Graduated Magna Cum Laude with a focus on Software Engineering. 
                  Active member of the Computer Science Student Association.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Algorithms", "Operating Systems", "Database Systems", "Software Engineering"].map(
                    (course) => (
                      <span
                        key={course}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {course}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-xl">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Achievements & Certifications
                </h3>
                <ul className="space-y-3">
                  {[
                    "Dean's List - All Semesters",
                    "AWS Certified Solutions Architect",
                    "Google Cloud Professional Developer",
                    "1st Place - University Hackathon 2023",
                  ].map((achievement) => (
                    <li key={achievement} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

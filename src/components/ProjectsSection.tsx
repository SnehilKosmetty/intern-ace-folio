import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart management, payment integration, and real-time inventory tracking. Built with performance and scalability in mind.",
    technologies: ["React", "Node.js", "Stripe", "PostgreSQL", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "AI Task Manager",
    description:
      "Smart task management app with AI-powered priority suggestions and natural language processing for task creation. Helps teams stay organized.",
    technologies: ["Next.js", "OpenAI", "Prisma", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Real-time Chat Application",
    description:
      "Scalable chat application supporting group conversations, file sharing, and end-to-end encryption with WebSocket-based real-time messaging.",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Portfolio Dashboard",
    description:
      "Investment portfolio tracker with live market data, performance analytics, and automated alerts for price movements.",
    technologies: ["Vue.js", "Python", "FastAPI", "Chart.js"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Weather Analytics",
    description:
      "Weather data visualization platform with historical analysis and machine learning-based predictions.",
    technologies: ["React", "D3.js", "Python", "TensorFlow"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Code Snippet Manager",
    description:
      "Developer tool for organizing and sharing code snippets with syntax highlighting and team collaboration features.",
    technologies: ["TypeScript", "Electron", "SQLite"],
    github: "https://github.com",
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-widest uppercase text-sm">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What I've <span className="gradient-text">Built</span>
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="glass-card rounded-2xl p-1 group">
                  <div className="bg-secondary rounded-xl aspect-video flex items-center justify-center overflow-hidden">
                    <div className="text-6xl text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                      <Folder size={80} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-4">
                <p className="text-primary font-medium text-sm">Featured Project</p>
                <h3 className="text-3xl font-bold text-foreground">{project.title}</h3>
                <div className="glass-card p-6 rounded-xl">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <Github size={22} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl font-bold text-center mb-8"
        >
          Other Noteworthy Projects
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-primary" size={36} />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs text-muted-foreground font-mono">
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

export default ProjectsSection;

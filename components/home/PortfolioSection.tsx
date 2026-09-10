'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Application',
    description: 'Full-featured e-commerce platform with real-time inventory and payment integration.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#',
    image: '/projects/ecommerce.jpg',
  },
  {
    title: 'Healthcare Dashboard',
    category: 'Web Application',
    description: 'Secure patient management system with real-time analytics and reporting.',
    tech: ['React', 'Node.js', 'MongoDB'],
    demoUrl: '#',
    githubUrl: '#',
    image: '/projects/healthcare.jpg',
  },
  {
    title: 'Mobile App - Fitness Tracker',
    category: 'Mobile Application',
    description: 'Cross-platform fitness tracking app with social features and gamification.',
    tech: ['React Native', 'Firebase', 'GraphQL'],
    demoUrl: '#',
    githubUrl: '#',
    image: '/projects/fitness.jpg',
  },
  {
    title: 'Business Automation Suite',
    category: 'Automation',
    description: 'End-to-end workflow automation system for enterprise operations.',
    tech: ['Python', 'Docker', 'Kafka'],
    demoUrl: '#',
    githubUrl: '#',
    image: '/projects/automation.jpg',
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Our Work
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-[--font-space-grotesk]">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Real solutions for real business problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.demoUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            Tell us about your project
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
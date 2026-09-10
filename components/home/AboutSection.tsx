'use client';

import { motion } from 'framer-motion';
import { Users, Code, Shield, Clock, Award, Zap } from 'lucide-react';

const stats = [
  { label: 'Team Members', value: '5-6', icon: Users },
  { label: 'Projects Delivered', value: '20+', icon: Code },
  { label: 'Security First', value: '100%', icon: Shield },
  { label: 'Response Time', value: '<24hr', icon: Clock },
];

const teamMembers = [
  {
    name: 'Team Lead',
    role: 'Full-Stack Developer',
    skills: ['Next.js', 'TypeScript', 'Python'],
    description: 'Leading development with 8+ years of experience.',
    image: '/member-1.jfif',
  },
  {
    name: 'Frontend Specialist',
    role: 'UI/UX Developer',
    skills: ['React', 'Tailwind', 'Figma'],
    description: 'Creating pixel-perfect, accessible interfaces.',
  },
  {
    name: 'Backend Engineer',
    role: 'API & Database Expert',
    skills: ['Node.js', 'PostgreSQL', 'AWS'],
    description: 'Building scalable and secure backend systems.',
  },
  {
    name: 'Mobile Developer',
    role: 'React Native Specialist',
    skills: ['React Native', 'iOS', 'Android'],
    description: 'Delivering cross-platform mobile experiences.',
  },
  {
    name: 'Project Manager',
    role: 'Agile Delivery Lead',
    skills: ['Agile', 'Scrum', 'JIRA'],
    description: 'Ensuring on-time, on-budget project delivery.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-[--font-space-grotesk]">
            About <span className="text-gradient">Our Team</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A small expert engineering team with big capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <Icon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gray-50 hover:bg-white transition-all duration-300 hover:shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-primary-600">{member.role}</p>
                </div>
                <div><img src={member.image} alt="iuyiyi" width=/></div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{member.description}</p>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary-50 to-indigo-50 border border-primary-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Looking for a reliable development partner?
              </h3>
              <p className="text-gray-600">
                We're here to help you build something great.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30"
            >
              Start a Project
              <Zap className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
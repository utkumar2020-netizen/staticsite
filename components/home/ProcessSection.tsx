'use client';

import { motion } from 'framer-motion';
import { 
  Search, FileText, Palette, Code, Rocket, ShieldCheck 
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We understand your business needs and project goals.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FileText,
    title: 'Planning',
    description: 'Detailed project architecture and technology selection.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'User-centric design with focus on experience and accessibility.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Clean, secure, and maintainable code with best practices.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Thorough testing, deployment, and performance optimization.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: ShieldCheck,
    title: 'Support',
    description: 'Ongoing maintenance and reliable technical support.',
    color: 'from-rose-500 to-rose-600',
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-[--font-space-grotesk]">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A structured approach to deliver quality results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur" />
                <div className="relative p-8 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-bold text-primary-600">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
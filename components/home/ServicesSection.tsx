'use client';

import { motion } from 'framer-motion';
import { 
  Globe, Layers, ShoppingCart, Smartphone, 
  Cpu, Shield, ArrowRight 
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom websites built for performance, security, and conversion.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Layers,
    title: 'Web Applications',
    description: 'Scalable web applications with modern architecture and clean code.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Online stores that are fast, secure, and optimized for sales.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps with native-like performance.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Cpu,
    title: 'Business Automation',
    description: 'Streamline operations with custom automation solutions.',
    color: 'from-rose-500 to-rose-600',
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: 'Reliable support to keep your systems running smoothly.',
    color: 'from-amber-500 to-amber-600',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-[--font-space-grotesk]">
            What We <span className="text-gradient">Build</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive IT services delivered with technical excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gray-50 hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const services = [
  {
    name: 'Website Development',
    price: '₹5,000',
    features: [
      'Custom design & development',
      'Responsive & mobile-first',
      'Performance optimized',
      'SEO ready',
      'Security implementation',
      '30-day support',
    ],
  },
  {
    name: 'Web Applications',
    price: '₹25,000',
    features: [
      'Full-stack development',
      'Scalable architecture',
      'API integration',
      'Database design',
      'Authentication & security',
      'Testing & deployment',
    ],
  },
  {
    name: 'E-Commerce',
    price: '₹70,000',
    features: [
      'Online store development',
      'Payment gateway integration',
      'Inventory management',
      'User accounts & orders',
      'Admin dashboard',
      'Performance optimization',
    ],
  },
  {
    name: 'Mobile Applications',
    price: '₹50,000',
    features: [
      'Cross-platform development',
      'Native-like performance',
      'API integration',
      'Push notifications',
      'App store deployment',
      '30-day support',
    ],
  },
  {
    name: 'Business Automation',
    price: '₹90,000',
    features: [
      'Workflow automation',
      'Custom dashboard',
      'Integration with existing systems',
      'Data processing & analytics',
      'Scalable architecture',
      'Training & documentation',
    ],
  },
  {
    name: 'Maintenance & Support',
    price: '₹15,000/month',
    features: [
      'Regular updates & patches',
      'Security monitoring',
      'Performance optimization',
      'Technical support',
      'Backup & recovery',
      'Priority response',
    ],
  },
];

export function PricingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-[--font-space-grotesk]">
            Starting <span className="text-gradient">Prices</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Every project is unique. These are starting ranges.
          </p>
          <div className="mt-3 text-sm text-gray-500">
            Contact us for a custom quote tailored to your needs.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gray-50 hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-t-2xl" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.name}
              </h3>
              <div className="text-3xl font-bold text-primary-600 mb-4">
                {service.price}
              </div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Need a custom solution?{' '}
            <a href="#contact" className="text-primary-600 font-semibold hover:underline">
              Let's discuss your project
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What types of projects do you work on?',
    answer: 'We work on websites, web applications, e-commerce platforms, mobile applications, business automation, API development, and AI integrations. We focus on custom solutions tailored to business needs.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. A simple website may take 4-6 weeks, while complex web applications or automation systems can take 2-4 months. We provide detailed timelines during project planning.',
  },
  {
    question: 'What is your development process?',
    answer: 'Our process follows a structured approach: Discovery, Planning, Design, Development, Launch, and Support. We maintain clear communication throughout and provide regular progress updates.',
  },
  {
    question: 'Do you work with clients internationally?',
    answer: 'Yes, we work with clients both in India and internationally. We use modern collaboration tools and follow professional communication practices suitable for global clients.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We primarily use Next.js, React, TypeScript, Node.js, Python, PostgreSQL, Supabase, and modern deployment platforms like Vercel and AWS. We choose the right technology for each project.',
  },
  {
    question: 'Do you provide maintenance and support?',
    answer: 'Yes, we offer maintenance and support packages for all projects. This includes security updates, performance monitoring, technical support, and regular maintenance.',
  },
  {
    question: 'How do you ensure project security?',
    answer: 'Security is our top priority. We implement HTTPS, secure authentication, input validation, database security, regular security updates, and follow OWASP best practices.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We provide starting prices for common service types. However, every project is unique, so we provide custom quotes based on specific requirements, complexity, and scope.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-600 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white rounded-b-2xl border border-t-0 border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="#contact" className="text-primary-600 font-semibold hover:underline">
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
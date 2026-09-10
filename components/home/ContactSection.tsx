'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, 
  MessageSquare, CheckCircle 
} from 'lucide-react';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For static demo, just show success message
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-[--font-space-grotesk]">
            Let's Start Your <span className="text-gradient">Project</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Tell us about your requirements and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
              <p className="text-gray-600">
                We're here to help you build something amazing. Reach out to us through any of these channels.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                  <Mail className="w-6 h-6 text-primary-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">utkumar2020@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                  <Phone className="w-6 h-6 text-primary-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone / WhatsApp</p>
                    <p className="text-gray-600">+91 8882603096</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                  <MapPin className="w-6 h-6 text-primary-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">India | International Clients Welcome</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                  <MessageSquare className="w-6 h-6 text-primary-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Response Time</p>
                    <p className="text-gray-600">Typically within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-primary-50 to-indigo-50 border border-primary-100">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Note:</span> This is a demo website showing our capabilities. 
                  For real project discussions, please reach out through the channels above.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Type
                </label>
                <select
                  id="project"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors outline-none"
                >
                  <option>Select a project type</option>
                  <option>Website Development</option>
                  <option>Web Application</option>
                  <option>E-Commerce Platform</option>
                  <option>Mobile Application</option>
                  <option>Business Automation</option>
                  <option>AI Integration</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors outline-none resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                This is a demo form. For real enquiries, please use the contact information above.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const Scene3D = dynamic(() => import('@/components/3d/Scene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-b from-dark-100 via-dark-200 to-dark-300 animate-pulse" />
  ),
});

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-dark-100 via-dark-200 to-dark-300"
    >
      <div className="absolute inset-0 opacity-30 grid-pattern" />
      
      <div className="absolute inset-0">
        <Scene3D />
      </div>

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-gray-300 font-medium">
                Expert Engineering Team
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-[--font-space-grotesk] text-5xl sm:text-7xl font-bold text-white leading-tight"
            >
              Websites, Applications &{' '}
              <span className="text-gradient-glow">Automation</span>
              <br />
              <span className="text-4xl sm:text-5xl text-gray-300">
                Built by Experts
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-gray-400 max-w-2xl leading-relaxed"
            >
              We build reliable, secure, and performant digital solutions for 
              businesses that need technical excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                Tell Us Your Requirement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                View Our Work
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex items-center gap-8 text-sm text-gray-400"
            >
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for projects
              </span>
              <span>•</span>
              <span>5-6 person team</span>
              <span>•</span>
              <span>India & International</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Button from '@/components/Button'
import Container from '@/components/Container'
import FeatureCard from '@/components/FeatureCard'
import PricingCard from '@/components/PricingCard'
import TestimonialSlide from '@/components/TestimonialSlide'
import Accordion from '@/components/Accordion'
import Footer from '@/components/Footer'
import AnimatedMesh from '@/components/AnimatedMesh' // ✅ Ensure this exists
import { features } from '@/constants/features'
import { pricingPlans } from '@/constants/pricing'
import { testimonials } from '@/constants/testimonials'
import { faqs } from '@/constants/faqs'

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section with AnimatedMesh */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 py-20">
          <AnimatedMesh />
          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                <span className="text-gradient">Run smarter ad campaigns</span> with AI
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-600 dark:text-gray-300 mb-10"
              >
                Launch ads 10x faster with AI — from strategy to execution.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Button variant="primary" size="lg">
                  Try for Free
                </Button>
                <Button variant="outline" size="lg">
                  See How It Works
                </Button>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white dark:bg-gray-900">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Everything you need to scale your ads
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Our AI-powered platform handles the heavy lifting so you can focus on growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Choose the plan that fits your needs. No hidden fees.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={plan.featured ? 'lg:mt-[-20px]' : ''}
                >
                  <PricingCard {...plan} />
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Trusted by marketing teams worldwide
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Don&apos;t just take our word for it. Here&apos;s what our customers say.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <TestimonialSlide {...testimonials[activeTestimonial]} />

              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === activeTestimonial ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently asked questions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Can&apos;t find what you&apos;re looking for? Contact our support team.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openAccordion === index}
                  onClick={() => toggleAccordion(index)}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to transform your ad strategy?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join thousands of marketers growing their business with AdVibe.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="secondary" size="lg">
                  Get Started Free
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}

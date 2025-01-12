"use client"

import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />
      <main className="flex-grow">
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold mb-6">Dominate Your FPL League with Our Advanced Analytics</h1>
              <p className="text-xl mb-8">Make data-driven decisions, track player performance, and stay ahead of the competition.</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/dashboard" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                title="Player Analytics" 
                description="Deep dive into player statistics and performance trends."
              />
              <FeatureCard 
                title="Team Insights" 
                description="Analyze team formations, strategies, and upcoming fixtures."
              />
              <FeatureCard 
                title="Transfer Suggestions" 
                description="Get AI-powered transfer recommendations to optimize your team."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function FeatureCard({ title, description }) {
  return (
    <motion.div 
      className="bg-gray-100 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

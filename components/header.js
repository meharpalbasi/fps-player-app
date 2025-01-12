"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold text-black">
              FPL Analyzer
            </Link>
          </motion.div>
          <nav>
            <motion.ul 
              className="flex space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <li><Link href="/" className="text-gray-600 hover:text-black">Home</Link></li>
              <li><Link href="/dashboard" className="text-gray-600 hover:text-black">Dashboard</Link></li>
            </motion.ul>
          </nav>
        </div>
      </div>
    </header>
  )
}


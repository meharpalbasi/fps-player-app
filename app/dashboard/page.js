'use client'

import { motion } from 'framer-motion'

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full bg-gray-50 p-8"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Welcome to Your FPL Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="Total Points" value="1,234" />
        <DashboardCard title="Overall Rank" value="123,456" />
        <DashboardCard title="Gameweek Points" value="78" />
      </div>
    </motion.div>
  )
}

function DashboardCard({ title, value }) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 sm:p-8 flex flex-col items-center justify-center h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-3xl sm:text-4xl font-bold text-black">{value}</p>
    </motion.div>
  )
}

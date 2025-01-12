'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, 
         SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, 
         SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { motion } from 'framer-motion'
import { LayoutDashboard, Users, Trophy, Menu } from 'lucide-react'
import { Sheet, SheetContent } from "@/components/ui/sheet"

export default function DashboardLayout({ children }) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const navItems = [
    { 
      title: 'Dashboard', 
      href: '/dashboard',
      icon: <LayoutDashboard className="h-4 w-4 mr-2" />
    },
    { 
      title: 'Teams', 
      href: '/dashboard/teams',
      icon: <Trophy className="h-4 w-4 mr-2" />
    },
    { 
      title: 'Players', 
      href: '/dashboard/players',
      icon: <Users className="h-4 w-4 mr-2" />
    },
  ]

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const sidebarContent = (
    <>
      <SidebarHeader>
        <motion.h2 
          className="text-xl font-semibold p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          FPL Analyzer
        </motion.h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      asChild 
                      variant={pathname === item.href ? 'active' : 'default'}
                    >
                      <Link href={item.href} className="flex items-center">
                        {item.icon}
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </>
  )

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Desktop Sidebar */}
        <Sidebar className="bg-gray-100 w-64 lg:w-72 hidden md:block">
          {sidebarContent}
        </Sidebar>

        {/* Mobile Sidebar */}
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetContent side="left" className="w-[300px] p-0 bg-gray-100">
            {sidebarContent}
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-screen w-full">
          {/* Header */}
          <header className="bg-white shadow-sm flex-shrink-0">
            <div className="flex items-center justify-between p-4">
              <button 
                onClick={toggleSidebar}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="h-6 w-6" />
              </button>
              <motion.h1 
                className="text-2xl font-semibold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {navItems.find(item => item.href === pathname)?.title || 'Dashboard'}
              </motion.h1>
            </div>
          </header>
          
          {/* Main Area */}
          <main className="flex-grow bg-gray-50 w-full">
            <div className="h-full w-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

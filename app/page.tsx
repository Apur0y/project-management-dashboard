'use client'
import TaskManagement from '@/components/TaskManagement'
import TopBar from '@/components/TopBar'
import React, { useState } from 'react'

export default function page() {
      const [activeTab, setActiveTab] = useState("List")
    
      const tabs = ["List"]
    
  return (
    <div >
         <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Header */}
          <TopBar/>

        {/* Project Header */}
        <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold">Project 2</h1>
              <div className="flex space-x-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 text-sm rounded ${
                      activeTab === tab ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white hover:bg-gray-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">Add Task</button>
            </div>
          </div>
        </div>

        {/* Task List */}
       <TaskManagement/>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"

export default function ProjectDashboard() {
  const [activeTab, setActiveTab] = useState("List")

  const tabs = ["List", "Board", "Calendar", "Gantt", "Table", "View"]

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700">
        {/* Workspace Header */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-teal-500 rounded flex items-center justify-center text-xs font-bold">A</div>
            <span className="font-medium">Apu Roy's Workspace</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 cursor-pointer">
              <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 001.414 1.414L2 12.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-4.586l.293.293a1 1 0 001.414-1.414l-9-9z" />
                </svg>
              </div>
              <span>Home</span>
            </div>

            <div className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 cursor-pointer">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <span>Inbox</span>
            </div>

            <div className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 cursor-pointer">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-9 0h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z"
                />
              </svg>
              <span>FollowUps</span>
            </div>

            <div className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 cursor-pointer">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <span>My Tasks</span>
            </div>
          </div>

          {/* Spaces Section */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400 uppercase tracking-wide">Spaces</span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 cursor-pointer">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <span className="text-sm">All Tasks - Apu Roy's Workspace</span>
              </div>

              <div className="ml-4 space-y-1">
                <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 cursor-pointer">
                  <div className="w-3 h-3 bg-purple-500 rounded"></div>
                  <span className="text-sm">Demo IT Space</span>
                </div>

                <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 cursor-pointer">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-sm">Team Space</span>
                </div>

                <div className="ml-6 space-y-1">
                  <div className="flex items-center justify-between p-2 rounded hover:bg-gray-700 cursor-pointer">
                    <span className="text-sm text-gray-300">Project 1</span>
                    <span className="text-xs text-gray-500">3</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-gray-700 cursor-pointer">
                    <span className="text-sm text-white">Project 2</span>
                    <span className="text-xs text-gray-400">3</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 cursor-pointer">
                    <span className="text-sm text-gray-300">Project Notes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="h-14 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">+ Create</button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span>Team Space</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Project 2</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Cmd + K"
                className="bg-gray-700 text-white placeholder-gray-400 px-3 py-1 rounded text-sm w-64"
              />
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
              AR
            </div>
          </div>
        </div>

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
        <div className="flex-1 bg-gray-900 p-6">
          {/* IN PROGRESS Section */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="font-medium text-blue-400">IN PROGRESS</span>
              <span className="text-gray-500 text-sm">1</span>
              <button className="text-gray-500 hover:text-white text-sm">+ Add Task</button>
            </div>

            {/* Task Header */}
            <div className="grid grid-cols-12 gap-4 text-xs text-gray-400 uppercase tracking-wide mb-2 px-4">
              <div className="col-span-3">Name</div>
              <div className="col-span-2">Assignee</div>
              <div className="col-span-2">Due date</div>
              <div className="col-span-2">Priority</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-1">Comments</div>
            </div>

            {/* Task Row */}
            <div className="grid grid-cols-12 gap-4 items-center p-4 bg-gray-800 rounded hover:bg-gray-750 cursor-pointer">
              <div className="col-span-3 flex items-center space-x-2">
                <div className="w-4 h-4 border border-gray-500 rounded"></div>
                <span>Task 1</span>
              </div>
              <div className="col-span-2">
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
              </div>
              <div className="col-span-2 text-gray-400">-</div>
              <div className="col-span-2 text-gray-400">-</div>
              <div className="col-span-2">
                <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">IN PROGR...</span>
              </div>
              <div className="col-span-1 text-gray-400">-</div>
            </div>

            <button className="mt-2 text-gray-500 hover:text-white text-sm px-4">+ Add Task</button>
          </div>

          {/* TO DO Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <span className="font-medium text-gray-300">TO DO</span>
              <span className="text-gray-500 text-sm">2</span>
              <button className="text-gray-500 hover:text-white text-sm">+ Add Task</button>
            </div>

            {/* Task Header */}
            <div className="grid grid-cols-12 gap-4 text-xs text-gray-400 uppercase tracking-wide mb-2 px-4">
              <div className="col-span-3">Name</div>
              <div className="col-span-2">Assignee</div>
              <div className="col-span-2">Due date</div>
              <div className="col-span-2">Priority</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-1">Comments</div>
            </div>

            {/* Task Rows */}
            <div className="space-y-1">
              <div className="grid grid-cols-12 gap-4 items-center p-4 bg-gray-800 rounded hover:bg-gray-750 cursor-pointer">
                <div className="col-span-3 flex items-center space-x-2">
                  <div className="w-4 h-4 border border-gray-500 rounded"></div>
                  <span>Task 2</span>
                </div>
                <div className="col-span-2">
                  <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                </div>
                <div className="col-span-2 text-gray-400">-</div>
                <div className="col-span-2 text-gray-400">-</div>
                <div className="col-span-2">
                  <span className="px-2 py-1 bg-gray-600 text-white text-xs rounded">TO DO</span>
                </div>
                <div className="col-span-1 text-gray-400">-</div>
              </div>

              <div className="grid grid-cols-12 gap-4 items-center p-4 bg-gray-800 rounded hover:bg-gray-750 cursor-pointer">
                <div className="col-span-3 flex items-center space-x-2">
                  <div className="w-4 h-4 border border-gray-500 rounded"></div>
                  <span>Task 3</span>
                </div>
                <div className="col-span-2">
                  <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                </div>
                <div className="col-span-2 text-gray-400">-</div>
                <div className="col-span-2 text-gray-400">-</div>
                <div className="col-span-2">
                  <span className="px-2 py-1 bg-gray-600 text-white text-xs rounded">TO DO</span>
                </div>
                <div className="col-span-1 text-gray-400">-</div>
              </div>
            </div>

            <button className="mt-2 text-gray-500 hover:text-white text-sm px-4">+ Add Task</button>
          </div>

          <button className="mt-6 text-blue-400 hover:text-blue-300 text-sm">+ New status</button>
        </div>
      </div>
    </div>
  )
}

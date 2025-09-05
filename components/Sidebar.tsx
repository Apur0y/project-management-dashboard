import React from 'react'

export default function Sidebar() {
  return (
    <div>
      <div className="w-64 bg-gray-800 border-r border-gray-700 min-h-screen"  >
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
    </div>
  )
}

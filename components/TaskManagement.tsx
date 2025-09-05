import React, { useRef } from 'react'

export default function TaskManagement() {

      const containerRef = useRef(null);
     
      const handleMouseDown=()=>{
          
      }



  return (

        <div  className="flex-1 bg-gray-900 p-6 min-h-screen">
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
            <div            
            ref={containerRef}
            onMouseDown={handleMouseDown}
            className="grid grid-cols-12 gap-4 items-center p-4 bg-gray-800 rounded hover:bg-gray-750 cursor-pointer">
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
  
  )
}

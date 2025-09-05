'use client'
import React, { useEffect, useState } from 'react';

export default function DraggableBox() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [positionNow, setPositionNow] = useState({ x: 0, y: 0 });

  

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };


  const handleStuck=(e)=>{
        setPositionNow({
      x: e.clientX ,
      y: e.clientY 
    });
  }

  useEffect(()=>{

  },[])

  return (

    <div 
      onMouseMove={handleMouseMove} 
      onMouseUp={handleMouseUp}
      className="w-screen h-screen bg-gray-200 relative"
    >
      <div
        onMouseDown={handleMouseDown}
        style={{
          position: 'absolute',
          left: position.x + 'px',
          top: position.y + 'px',
        }}
        className={`w-24 h-24 rounded-lg flex items-center justify-center text-white font-bold select-none transition-colors ${
          isDragging 
            ? 'bg-red-400 cursor-grabbing' 
            : 'bg-teal-400 cursor-grab hover:bg-teal-500'
        }`}
      >
        Drag Me!
      </div>


      <div 
      onMouseMove={handleStuck}
      style={{
        position:"absolute",
        left:positionNow.x,
        top:positionNow.y
      }}
      className='w-24 h-24 bg-pink-900 rounded flex justify-center items-center'>
        My Drag
      </div>

      
    </div>
  );
}
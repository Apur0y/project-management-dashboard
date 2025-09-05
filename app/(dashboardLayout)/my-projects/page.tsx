"use client";
import React, { useEffect, useState } from "react";

export default function DraggableBox() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    console.log(e.clientX, e.clientY);
    setIsDragging(true);
    console.log("Position:", position);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    console.log(dragStart);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX  ,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDragStart = (e) => {
    console.log("Drag started", e.clientX, e.clientY);
    e.target.style.opacity = "0.001";
    console.log(e);
  };

  return (
    <div
      //  onMouseMove={handleStuck}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className="w-screen h-screen bg-gray-200 relative"
    >
      <div
        onMouseDown={handleMouseDown}
        style={{
          position: "absolute",
          left: position.x + "px",
          top: position.y + "px",
        }}
        className={`w-24 h-24 rounded-lg flex items-center justify-center text-white font-bold select-none transition-colors ${
          isDragging
            ? "bg-red-400 cursor-grabbing"
            : "bg-teal-400 cursor-grab hover:bg-teal-500"
        }`}
      >
        Drag Me!
      </div>

      <div
        onDragStart={handleDragStart}
        onDragEnd={(e) => {
          e.target.style.opacity = "1";
        }}
        style={{
          position: "absolute",
          left: "300px",
          top: "100px",
        }}
        draggable
        className={`w-24 h-24 rounded-lg flex items-center justify-center text-white font-bold select-none transition-colors
            bg-teal-400 cursor-grab hover:bg-teal-500`}
      >
        Here me
      </div>
    </div>
  );
}

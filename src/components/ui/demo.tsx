import { useState, useEffect } from "react";
import { Component } from "./shapeblur"; 
import { Navbar1 } from "./navbar-1"

const DemoOne = () => {
  const [pixelRatio, setPixelRatio] = useState(1);
  const [isHovered] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPixelRatio(window.devicePixelRatio || 1);
    }
  }, []);

  // This component only contains the content (text and shapeblur)
  return (
    <div className="relative w-full h-full flex justify-center items-center cursor-pointer">
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <h1 
          className={`
            text-4xl sm:text-5xl font-bold select-none whitespace-nowrap
            transition-colors duration-200 ease-in-out
            ${isHovered ? 'text-gray-100' : 'text-gray-400'} 
          `}
        >
          Redefining Markets Through Math.
        </h1>
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none"> 
        <Component
          variation={0} 
          pixelRatioProp={pixelRatio}
          shapeSize={1.0}     
          roundness={0.50}    
          borderSize={0.0050}  
          circleEdge={1.0}
        />
      </div>
    </div>
  );
};

const Demo = () => {
    return (
        <>
            <Navbar1/>
        </>
    )
}

export { DemoOne, Demo }; 
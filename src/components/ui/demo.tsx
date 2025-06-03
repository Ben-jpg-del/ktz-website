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
      <div className="absolute inset-0 flex justify-center items-center z-0 px-4">
        <h1 
          className={`
            text-3xl sm:text-4xl md:text-5xl font-bold select-none
            transition-colors duration-200 ease-in-out text-center
            ${isHovered ? 'text-gray-100' : 'text-gray-400'}
            whitespace-normal sm:whitespace-nowrap
          `}
        >
          Redefining Markets<br className="sm:hidden" /> Through Math.
        </h1>
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none"> 
        <Component
          variation={0} 
          pixelRatioProp={pixelRatio}
          shapeSize={0.85}     
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
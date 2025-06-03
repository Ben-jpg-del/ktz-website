import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import DottedMap from "dotted-map";

interface MapContextType {
  preloadedMap: string | null;
}

const MapContext = createContext<MapContextType>({ preloadedMap: null });

export function MapProvider({ children }: { children: ReactNode }) {
  const [preloadedMap, setPreloadedMap] = useState<string | null>(null);

  useEffect(() => {
    // Load the map once when the app starts
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    const svgMap = map.getSVG({
      radius: 0.22,
      color: "#00000040",
      shape: "circle",
      backgroundColor: "white",
    });
    setPreloadedMap(svgMap);
  }, []);

  return (
    <MapContext.Provider value={{ preloadedMap }}>
      {children}
    </MapContext.Provider>
  );
}

export function useMap() {
  return useContext(MapContext);
} 
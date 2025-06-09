import { WorldMap } from "./world-map";
import { motion } from "framer-motion";
import { useMap } from "../../context/MapContext";

export function WorldMapDemo() {
  const { preloadedMap } = useMap();
  
  // City coordinates
  const cities = [
    { lat: 39.9167, lng: 116.3833 }, // Beijing
    { lat: 37.773972, lng: -122.431297 }, // San Francisco
    { lat: 34.0522, lng: -118.2437 }, // Los Angeles
    { lat: 39.9526, lng: -75.1652 }, // Philadelphia
    { lat: 40.7306, lng: -73.9352 }, // New York City
    { lat: 13.7563, lng: 100.5018 }, // Bangkok
  ];

  // Connect every city to every other city (fully connected)
  const dots = [];
  for (let i = 0; i < cities.length; i++) {
    for (let j = i + 1; j < cities.length; j++) {
      dots.push({ start: cities[i], end: cities[j] });
    }
  }

  return (
    <div className="pt-16 pb-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          KTZ{" "}
          <span className="text-neutral-400">
            {"Investments".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Pioneering the future of quantitative investing through innovation, transparency, and excellence.
        </p>
      </div>
      <WorldMap
        dots={dots}
        lineColor="#0ea5e9"
        preloadedMap={preloadedMap || undefined}
      />
    </div>
  );
} 
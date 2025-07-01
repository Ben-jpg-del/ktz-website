import { lazy, Suspense } from 'react';
import mars from '../assets/mars-astronauts.png';

const WorldMapDemo = lazy(() => import("../components/ui/world-map-demo").then(module => ({
  default: module.WorldMapDemo
})));

const About = () => {
  return (
    <div className="bg-white">
      {/* World Map Demo Section */}
      <Suspense fallback={
        <div className="py-40 dark:bg-black bg-white w-full flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-64 bg-gray-100 rounded"></div>
          </div>
        </div>
      }>
        <WorldMapDemo />
      </Suspense>

      {/* Mission Section */}
      <div className="py-16 bg-gray-900 relative" style={{ backgroundImage: `url(${mars})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-black/60" style={{ zIndex: 1 }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 2 }}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-8 md:mb-6 text-left">Our Mission</h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-300 md:mt-0 text-left">
              KTZ is an AI-powered investment fund leveraging quantitative strategies and deep regional expertise to deliver superior returns. Founded by partners in the United States with extensive connections across Asia, KTZ focuses on a unique niche: small-cap Asian companies driving AI compute and connectivity infrastructure. 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Niche Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 lg:text-center">Our Investment Niche</h2>
            <p className="mt-4 max-w-5xl text-xl text-gray-600 lg:mx-auto">
            We identify and invest in smaller companies critical to the future of AI infrastructure, uncovering undervalued assets through local Asian insights and global investment acumen. KTZ aims to capture high-growth opportunities utilizing a systematic hedge strategy driven by unsupervised machine-learning algorithms that detect latent factors and pricing anomalies across small-cap Asian AI-infrastructure equities. These smaller companies (typically sitting in the US $250 million-2 billion market cap bracket) are often overlooked by large institutional investors, who may perceive them as too risky or not large enough to bother with. The result is a relative lack of analyst coverage and lower visibility, leading to market inefficiencies in pricing that we build our strategies on. 
            </p>
            
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Semiconductors</h3>
                <p className="text-gray-600">
                  AI-focused semiconductors generated $53.4 B in 2023 revenue (- up 20.9 % YoY) and are forecast to more than double to $119 B by 2027 (Gartner). High-performance GPUs, AI accelerators, and edge-optimized chips now power nearly every ML workload, creating outsized demand for the niche component makers KTZ targets. Asia supplies the backbone: the region produced ≈70 % of the world's chips in 2022, with TSMC (&gt;50 % global output) and South Korea (≈17 % via Samsung & SK Hynix) leading fabrication, Japan dominating materials and equipment, and China scaling domestic capacity from ~9 % share today toward 25 % by 2030.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Connectivity Infrastructure</h3>
                <p className="text-gray-600 text-left">
                5G, and soon 6G, provides the high-speed, low-latency backbone that AI, IoT, and autonomous systems demand. Asia-Pacific leads this buildout: China deployed 3.38 M 5G base stations and reached 805 M users by end-2023, driving ≈$260 B in economic output (+ ~30 % YoY). Beijing targets commercial 6G by 2030 (standards by 2025), ensuring years of investment momentum for 5G equipment makers and 6G innovators alike.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Small Cap Focus</h3>
                <p className="text-gray-600 text-left">
                KTZ targets under-researched Asian small-caps powering AI infrastructure, firms too small for most institutions, thinly covered by analysts, and therefore often mispriced. This inefficiency lets diligent investors capture outsized alpha. Hidden Value: Many niche tech players trade well below intrinsic worth. Shenzhen Farben grew earnings +9.4 % in 2024 while China's IT sector shrank -15 %, yet still trades at P/E ≈ 80, under the sector average. Bank of America recently flagged similar small-cap chip firms for their "quality exposure to rising design complexity." Agility & Innovation: Lean 100-person teams pivot faster than billion-dollar giants, ideal for rapidly evolving AI hardware and 5G/6G niches. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 
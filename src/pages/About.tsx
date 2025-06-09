import { lazy, Suspense } from 'react';

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
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              We harness proprietary AI-driven research and our unique US–Tsinghua network to uncover and scale overlooked small-cap innovators powering Asia's AI compute and connectivity infrastructure. We deliver durable, risk-balanced alpha with transparency and client-centric care.
            </p>
          </div>
        </div>
      </div>

      {/* Investment Niche Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Investment Niche</h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 lg:mx-auto">
              We focus on small-cap companies based in Asia with a specialization in AI compute and connectivity infrastructure, including:
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Semiconductors</h3>
                <p className="text-gray-600">
                  Cutting-edge chip manufacturers and designers powering the next generation of AI computing.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Network Technology</h3>
                <p className="text-gray-600">
                  Advanced cellular and connectivity solutions enabling seamless AI infrastructure deployment.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Future Infrastructure</h3>
                <p className="text-gray-600">
                  Companies developing critical components and technologies for the future of AI infrastructure.
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
import bull from '../assets/bull.mp4';

const Portfolio = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative text-white" style={{ marginTop: '-80px', paddingTop: '80px', minHeight: '100vh' }}>
        <div className="absolute inset-0">
          <video
            src={bull}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
            style={{ zIndex: 0 }}
          />
          <div className="absolute inset-0 bg-black/60" style={{ zIndex: 1 }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 z-10" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
          <h1 
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl transition-transform duration-300 hover:scale-105 cursor-pointer" 
            style={{ transformOrigin: '20% center' }}
            onClick={() => {
              document.getElementById('portfolio-content')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Our Portfolio
          </h1>
          <p className="mt-6 text-xl max-w-3xl transition-transform duration-300 hover:scale-105 cursor-pointer">
            Explore our investment strategies and performance.
          </p>
        </div>
      </div>

      {/* Portfolio Content Section */}
      <div id="portfolio-content" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Coming Soon</h2>
            <p className="mt-4 text-xl text-gray-600">
              Our portfolio section is currently under development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 
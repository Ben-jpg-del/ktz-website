const Portfolio = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Our Portfolio
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Explore our investment strategies and performance.
          </p>
        </div>
      </div>

      {/* Portfolio Content Section */}
      <div className="py-16 bg-white">
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
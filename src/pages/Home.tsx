const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Unlocking Alpha Through Data-Driven Innovation
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            KTZ is a quantitative investment firm leveraging advanced machine learning and big data analytics to deliver superior risk-adjusted returns for institutional investors.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block bg-blue-600 py-3 px-8 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Analytics</h3>
              <p className="text-gray-600">
                Leveraging cutting-edge machine learning algorithms and big data analytics to identify market inefficiencies.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Management</h3>
              <p className="text-gray-600">
                Sophisticated risk management systems ensuring consistent performance across market conditions.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600">
                Clear communication and regular reporting to keep our investors informed about their investments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Research-Driven Strategy</h3>
              <p className="text-gray-600 mb-4">
                Our investment process is built on rigorous research and continuous innovation. We combine traditional financial theory with modern data science to develop robust trading strategies.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Advanced machine learning models</li>
                <li>Real-time market data analysis</li>
                <li>Proprietary trading algorithms</li>
                <li>Continuous strategy optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Management</h3>
              <p className="text-gray-600 mb-4">
                We maintain strict risk controls and portfolio diversification to protect investor capital while maximizing returns.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Comprehensive risk monitoring</li>
                <li>Dynamic position sizing</li>
                <li>Portfolio stress testing</li>
                <li>Real-time risk analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 
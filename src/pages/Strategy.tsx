const Strategy = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Our Strategy
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            A systematic, research-driven approach to quantitative investing.
          </p>
        </div>
      </div>

      {/* Investment Process Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Investment Process</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-4">01</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Research</h3>
              <p className="text-gray-600">
                Continuous analysis of market data and academic research to identify potential alpha sources.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-4">02</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Development</h3>
              <p className="text-gray-600">
                Building and testing quantitative models using machine learning and statistical methods.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-4">03</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h3>
              <p className="text-gray-600">
                Deploying strategies with robust risk management and execution systems.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-4">04</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Monitoring</h3>
              <p className="text-gray-600">
                Continuous performance analysis and strategy optimization.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Technology</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Machine Learning</h3>
              <p className="text-gray-600">
                Advanced algorithms that adapt to changing market conditions and identify complex patterns.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Big Data Analytics</h3>
              <p className="text-gray-600">
                Processing and analyzing vast amounts of market data to uncover hidden opportunities.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">High-Performance Computing</h3>
              <p className="text-gray-600">
                State-of-the-art infrastructure for real-time data processing and execution.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Management Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Risk Management</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              Our comprehensive risk management framework ensures consistent performance while protecting investor capital.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Portfolio Risk</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Dynamic position sizing</li>
                <li>Portfolio stress testing</li>
                <li>Correlation analysis</li>
                <li>Drawdown management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Operational Risk</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Redundant systems</li>
                <li>Real-time monitoring</li>
                <li>Automated controls</li>
                <li>Regular audits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy; 
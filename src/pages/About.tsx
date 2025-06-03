import { WorldMapDemo } from "../components/ui/world-map-demo";

const About = () => {
  return (
    <div className="bg-white">
      {/* World Map Demo Section */}
      <WorldMapDemo />

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            About KTZ
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Pioneering the future of quantitative investing through innovation, transparency, and excellence.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              To deliver superior risk-adjusted returns through innovative quantitative strategies while maintaining the highest standards of transparency and client service.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously push the boundaries of quantitative finance, leveraging cutting-edge technology and research to identify new opportunities.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600">
                We believe in clear communication and full disclosure, ensuring our clients understand our strategies and performance.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from research and development to client service and risk management.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Journey</h2>
            <div className="mt-8 space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900">2023</h3>
                <p className="mt-2 text-gray-600">
                  Founded with a vision to revolutionize quantitative investing through advanced machine learning and big data analytics.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900">2024</h3>
                <p className="mt-2 text-gray-600">
                  Launched our flagship quantitative strategy, combining traditional financial theory with modern data science.
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
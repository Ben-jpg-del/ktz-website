const Insights = () => {
  const articles = [
    {
      title: "The Future of Quantitative Investing",
      excerpt: "Exploring how machine learning and big data are transforming the investment landscape.",
      date: "May 15, 2024",
      category: "Research",
      image: "https://via.placeholder.com/600x400"
    },
    {
      title: "Risk Management in Volatile Markets",
      excerpt: "How our adaptive risk management systems navigate market turbulence.",
      date: "April 28, 2024",
      category: "Strategy",
      image: "https://via.placeholder.com/600x400"
    },
    {
      title: "Big Data in Financial Markets",
      excerpt: "Leveraging alternative data sources for alpha generation.",
      date: "April 10, 2024",
      category: "Technology",
      image: "https://via.placeholder.com/600x400"
    },
    {
      title: "Machine Learning in Portfolio Construction",
      excerpt: "How AI is revolutionizing portfolio optimization and asset allocation.",
      date: "March 25, 2024",
      category: "Research",
      image: "https://via.placeholder.com/600x400"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Insights
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Research highlights and thought leadership from our team.
          </p>
        </div>
      </div>

      {/* Articles Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {articles.map((article, index) => (
              <article key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm font-medium text-blue-600">{article.category}</span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Read More
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Stay Updated</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Subscribe to our newsletter for the latest insights and research.
            </p>
            <div className="mt-8 max-w-md mx-auto">
              <form className="sm:flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights; 
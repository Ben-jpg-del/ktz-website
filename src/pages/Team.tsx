const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      title: "Chief Investment Officer",
      bio: "20+ years of experience in quantitative trading and portfolio management. Former head of quantitative strategies at a leading investment bank.",
      image: "https://via.placeholder.com/400x400"
    },
    {
      name: "Sarah Johnson",
      title: "Head of Research",
      bio: "PhD in Computer Science with a focus on machine learning. Previously led AI research at a top technology firm.",
      image: "https://via.placeholder.com/400x400"
    },
    {
      name: "Michael Chen",
      title: "Chief Technology Officer",
      bio: "Expert in high-performance computing and algorithmic trading systems. Built trading infrastructure for major financial institutions.",
      image: "https://via.placeholder.com/400x400"
    },
    {
      name: "Emily Rodriguez",
      title: "Head of Risk Management",
      bio: "15+ years of experience in risk management and portfolio optimization. Former risk manager at a global hedge fund.",
      image: "https://via.placeholder.com/400x400"
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
            Our Team
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Meet the experts behind our innovative quantitative strategies.
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="mt-1 text-blue-600">{member.title}</p>
                  <p className="mt-4 text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Join Our Team</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team; 
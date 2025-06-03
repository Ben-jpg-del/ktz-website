import { Navbar1 } from "../components/ui/navbar-1";

const Team = () => {
  const teamMembers = [
    {
      name: "Pippin Kantakom",
      title: "Managing Partner",
      bio: "Mathematical Economics @ UPenn",
      image: "https://via.placeholder.com/400x400"
    },
    {
      name: "Albert Tsao",
      title: "Managing Partner",
      bio: "Computer Science @ NYU",
      image: "https://via.placeholder.com/400x400"
    },
    {
      name: "Ben Zhou",
      title: "Managing Partner",
      bio: "Applied Math @ UC Berkeley",
      image: "https://via.placeholder.com/400x400"
    },
    {
      name: "Tristan Furlow",
      title: "Senior Partner",
      bio: "Business @ USC Marshall",
      image: "https://via.placeholder.com/400x400"
    }
  ];

  // Split members by title
  const managingPartners = teamMembers.filter(m => m.title === "Managing Partner");
  const seniorPartners = teamMembers.filter(m => m.title === "Senior Partner");

  return (
    <div className="bg-white">
      <Navbar1 />
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
          {/* Managing Partners Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {managingPartners.map((member, index) => (
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
          {/* Senior Partner Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {seniorPartners.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm md:col-start-2">
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
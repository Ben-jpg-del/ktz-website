import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import { BackgroundPaths } from './components/ui/background-paths';
import { MapProvider } from './context/MapContext';
import logo from './assets/logo.png';

function App() {
  return (
    <MapProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BackgroundPaths />} />
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/login" element={
              <div className="min-h-[calc(100vh-80px)] relative bg-black">
                <div className="relative flex items-center justify-center min-h-[calc(100vh-80px)]">
                  <div className="relative">
                    {/* Outer glow */}
                    <div className="absolute -inset-2 bg-white/5 rounded-lg blur-2xl"></div>
                    {/* Middle glow */}
                    <div className="absolute -inset-1 bg-white/10 rounded-lg blur-xl"></div>
                    {/* Inner glow */}
                    <div className="absolute -inset-0.5 bg-white/20 rounded-lg blur-md"></div>
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mx-4 relative">
                      <div className="flex justify-center mb-8">
                        <img src={logo} alt="KTZ Logo" className="h-16 w-auto" />
                      </div>
                      <h1 className="text-2xl font-bold mb-6 text-center">Investor Login</h1>
                      <form className="space-y-4">
                        <div>
                          <label htmlFor="identifier" className="block text-sm font-medium text-gray-700 mb-1">
                            Email / Phone Number
                          </label>
                          <input
                            type="text"
                            id="identifier"
                            name="identifier"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email or phone number"
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                          />
                        </div>
                        <div className="mt-2 text-center">
                          <Link
                            to="/contact"
                            className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
                          >
                            Become an Investor
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            } />
          </Route>
        </Routes>
      </Router>
    </MapProvider>
  );
}

export default App;

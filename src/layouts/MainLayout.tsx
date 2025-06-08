import { Outlet } from 'react-router-dom';
import { Navbar1 } from '../components/ui/navbar-1';
import logo from '../assets/logo.png';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar1 />
      <main className="">
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src={logo} alt="KTZ Logo" className="h-10 mb-4" />
              <p className="text-gray-400">Deepseek to OpenAI, bridging the gap of American and Asian AI infrastructure.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">Email: pkntkm@sas.upenn.edu</p>
              <p className="text-gray-400">Phone: +1 (978) 494-7359</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A107173680&keywords=ktz&origin=RICH_QUERY_SUGGESTION&position=0&searchId=c066e120-96b0-4a6a-8640-e643669eb954&sid=!MK&spellCorrectionEnabled=false" 
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} KTZ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 
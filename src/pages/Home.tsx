import { DemoOne } from "../components/ui/demo";
import { FlowingMenu } from "../components/ui/flowing-menu";
import { Navbar1 } from "../components/ui/navbar-1";

const menuItems = [
  {
    link: '#hero',
    text: 'Unlocking Alpha Through Data-Driven Innovation',
    image: 'https://picsum.photos/seed/hero/600/400'
  },
  {
    link: '#stats',
    text: 'Our Impact',
    image: 'https://picsum.photos/seed/stats/600/400'
  },
  {
    link: '#approach',
    text: 'Our Scientific Approach',
    image: 'https://picsum.photos/seed/approach/600/400'
  }
];

const Home = () => {
  return (
    <div className="bg-black p-0 m-0">
      <Navbar1 />
      {/* ShapeBlur Section */}
      <section className="w-full h-screen bg-black flex justify-center items-center">
        <DemoOne />
      </section>

      {/* Flowing Menu Section */}
      <section className="w-full bg-black">
        <style>
          {`
            @keyframes marqueeScroll {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-marquee {
              animation: marqueeScroll 25s linear infinite;
            }
          `}
        </style>

        <div
          className="relative shadow-xl overflow-hidden w-full"
          style={{ height: '600px' }}
        >
          <FlowingMenu items={menuItems} />
        </div>
      </section>
    </div>
  );
};

export default Home; 
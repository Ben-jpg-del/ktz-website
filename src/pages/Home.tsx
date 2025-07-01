import { DemoOne } from "../components/ui/demo";
import { FlowingMenu } from "../components/ui/flowing-menu";

const menuItems = [
  {
    link: '/about',
    text: 'Deepseek to OpenAI, bridging the gap of American and Asian AI infrastructure',
    image: 'https://picsum.photos/seed/hero/600/400'
  },
  {
    link: '/portfolio',
    text: 'Advisors and managers from Ivy League & Wall Street students and faculty',
    image: 'https://picsum.photos/seed/stats/600/400'
  },
  {
    link: '/team',
    text: 'Elite STEM talent from top Asian universities',
    image: 'https://images.unsplash.com/photo-1610842590655-b0e6b1874f8b'  // Tsinghua University
  }
];

export default function Home() {
  return (
    <div className="bg-black p-0 m-0">
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
} 
import { Suspense } from 'react';
import Image from "next/image";

import About from "./sections/About";
import DynamicRoleText from "./sections/DynamicRoleText";
import SectionNav from "./sections/SectionNav";
import { MapPin } from 'iconoir-react';
import Work from './sections/Work';
import Playground from './sections/Playground';

interface PageProps {
  searchParams: { section?: string };
}
export default function Home({ searchParams }: PageProps) {
  const currentSection = searchParams.section || 'about';
  
  const renderSection = () => {
    switch (currentSection) {
      case 'work':
        return <Work />;
      case 'playground':
        return <Playground />;
      default:
        return <About />;
    }
  };

   return (
    <div className="font-sans h-screen flex flex-col md:h-screen">
      <main className="flex-1 flex flex-col md:overflow-hidden min-h-0">
        <div className="flex flex-col md:flex-row w-full h-full">
          {/* Left section */}
          <div className="bg-violet-200 p-10 flex flex-col justify-center md:min-w-[300px]">
            <Image
              className="bio-avatar grayscale hidden md:block"
              src="/assets/image.jpeg"
              width="320"
              height="320"
              alt="JV"
            />
            <h1 className="mt-2 text-center">
              Jacqueline 
              <br />
              Villamor
            </h1>
            <div id="role-subheader">
              <DynamicRoleText />
            </div>
            <div className="flex self-center">
              <MapPin />
              Jersey City, NJ
            </div>
          </div>
          
          {/* Right section */}
          <div className="bg-amber-50 flex-1 md:border-l flex flex-col min-h-0">
            <div className="flex-shrink-0">
              <SectionNav currentSection={currentSection} />
            </div>
            
            {/* Content area */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-8">
                <Suspense fallback={<div>Loading...</div>}>
                  {renderSection()}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="flex-shrink-0 flex gap-[24px] flex-wrap items-center justify-center p-4 bg-gray-50 border-t">
        This site built with NextJS & Tailwind. Icons from Iconoir. Made with an iced ube latte. 2025.
      </footer>
    </div>
  );
}
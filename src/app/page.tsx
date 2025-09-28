import About from "./sections/About";

import { Github, Linkedin, MailOut, MapPin } from 'iconoir-react';
import Image from "next/image";
import { Suspense } from 'react';
import DynamicRoleText from "./sections/DynamicRoleText";
import Experience from "./sections/Experience";
import SectionNav from "./sections/SectionNav";

interface PageProps {
  searchParams: { section?: string };
}
export default function Home({ searchParams }: PageProps) {
  const currentSection = searchParams.section || 'about';
  
  const renderSection = () => {
    switch (currentSection) {
      case 'experience':
        return <Experience />;
      case 'projects':
        return <div>Projects coming soon...</div>;
      case 'contact':
        return <div>Contact coming soon...</div>;
      default:
        return <About />;
    }
  };

   return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Give main a specific height so h-full works inside */}
      <main className="flex-1 flex flex-col">
        <div className="flex flex-col md:flex-row w-full flex-1">
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
          
          {/* Right section - content (bottom on mobile, right on desktop) */}
          <div className="bg-amber-50 flex-1 md:border-l">
            <SectionNav currentSection={currentSection} />
            
            {/* Content row */}
            <div className="flex flex-1 items-center justify-center p-8">
              <Suspense fallback={<div>Loading...</div>}>
                {renderSection()}
              </Suspense>
            </div>
          </div>
       </div>
      </main>
      
      {/* Footer - always at bottom */}
      <footer className="flex gap-[24px] flex-wrap items-center justify-center p-4 bg-gray-50 border-t">
        This site built with NextJS & Tailwind. Icons from Iconoir. Made with an iced ube latte. 2025.
      </footer>
    </div>
  );
}
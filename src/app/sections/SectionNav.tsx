// sections/SectionNav.tsx (Client Component for navigation)
'use client';
import { useRouter, useSearchParams } from 'next/navigation';

interface SectionNavProps {
  currentSection: string;
}

const SectionNav: React.FC<SectionNavProps> = ({ currentSection }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const navigateToSection = (section: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('section', section);
    router.push(`?${params.toString()}`);
  };

  const sections = [
    { key: 'about', label: 'About' },
    { key: 'experience', label: 'Experience' },
    { key: 'projects', label: 'Projects' },
    { key: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="flex justify-center md:justify-end gap-4 px-6 py-2 border-t border-b md:border-t-0">
            {sections.map((section) => (
                <button
                key={section.key}
                onClick={() => navigateToSection(section.key)}
                className={`px-4 py-2 rounded font-bold ${
                    currentSection === section.key 
                    ? 'bg-violet-500 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                    >
                {section.label}
                </button>
            ))}
    </nav>
  );
};

export default SectionNav;
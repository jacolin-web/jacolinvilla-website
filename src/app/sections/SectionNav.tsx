// sections/SectionNav.tsx (Client Component for navigation)
'use client';
import { HalfMoon, SunLight } from 'iconoir-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface SectionNavProps {
  currentSection: string;
}

const SectionNav: React.FC<SectionNavProps> = ({ currentSection }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [theme, setTheme] = useState<string>('light'); // Changed default

  const navigateToSection = (section: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('section', section);
    router.push(`?${params.toString()}`);
  };

  const sections = [
    { key: 'about', label: 'ABOUT' },
    { key: 'work', label: 'WORK' },
    { key: 'playground', label: 'PLAY' },
  ];

  const themes = ['light', 'dark']; // Only two themes

  const toggleTheme = () => {
    // Toggle between light and dark only
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    // Default to light if no saved theme or if saved theme is invalid
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Default to light theme
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  return (
    <nav className="flex justify-center md:justify-end gap-4 px-6 py-2 border-t border-b md:border-t-0">
      {sections.map((section) => (
        <button
          key={section.key}
          onClick={() => navigateToSection(section.key)}
          className={`px-4 py-2 rounded font-bold ${
            currentSection === section.key 
              ? 'bg-[var(--midground)] text-[var(--foreground)]' 
              : 'bg-[var(--footer)] hover:bg-[var(--midground)] text-[var(--foreground)]'
          }`}
        >
          {section.label}
        </button>
      ))}
      
      <div
        onClick={toggleTheme}
        className="pt-2 rounded text-xl hover:text-fuchsia-400 cursor-pointer"
        title={`Current theme: ${theme}`}
      >
        {theme === 'light' ? <HalfMoon/> : <SunLight/> }
      </div>
    </nav>
  );
};

export default SectionNav;
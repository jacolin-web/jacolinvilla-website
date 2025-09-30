'use client';
import { useState, useEffect, useRef } from 'react';

const DynamicRoleText: React.FC = () => {
  const jobTitles: string[] = [
    "front-end engineer",
    "design technologist", 
    "design systems engineer"
  ];
  
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [displayText, setDisplayText] = useState<string>(jobTitles[0]);
  const [isChanging, setIsChanging] = useState<boolean>(false);
  const [isPixelated, setIsPixelated] = useState<boolean>(false);
  const [isScrambling, setIsScrambling] = useState<boolean>(false);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const randomChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  
  const getRandomChar = (): string => randomChars[Math.floor(Math.random() * randomChars.length)];
  
  const scrambleText = (originalText: string, scramblePercentage: number = 0.7): string => {
    return originalText
      .split('')
      .map(char => {
        if (char === ' ') return ' ';
        return Math.random() < scramblePercentage ? getRandomChar() : char;
      })
      .join('');
  };
  
  const sleep = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));
  
  const changeText = async (): Promise<void> => {
    if (isChanging) return;
    setIsChanging(true);
    
    const currentText = jobTitles[currentIndex];
    const nextIndex = (currentIndex + 1) % jobTitles.length;
    const nextText = jobTitles[nextIndex];
    
    // Phase 1: Pixelated effect
    setIsPixelated(true);
    await sleep(400);
    
    // Phase 2: Scrambling
    setIsScrambling(true);
    for (let i = 0; i < 8; i++) {
      setDisplayText(scrambleText(currentText, 0.8));
      await sleep(100);
    }
    
    // Phase 3: Final reveal
    setDisplayText(nextText);
    await sleep(200);
    
    // Cleanup
    setIsPixelated(false);
    setIsScrambling(false);
    setCurrentIndex(nextIndex);
    setIsChanging(false);
  };
  
  useEffect(() => {
    const startTimer = () => {
      timeoutRef.current = setTimeout(() => {
        changeText();
      }, 3000);
    };
    
    if (!isChanging) {
      startTimer();
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isChanging]);
  
  const textClasses = `
    text-center text-lg transition-all duration-300
    ${isPixelated ? 'pixelated' : ''}
    ${isScrambling ? 'scrambling' : ''}
  `;
  
  return (
    <>
      <style jsx>{`
        .pixelated {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
          filter: contrast(2) saturate(1.5);
          transform: scale(0.95);
        }
        
        .scrambling {
          animation: scrambleGlitch 0.1s infinite;
          color: blacks;
          font-family: var(--font-dreamer);
        }
        
        @keyframes scrambleGlitch {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(1px, -1px); }
          50% { transform: translate(-1px, 1px); }
          75% { transform: translate(1px, 1px); }
        }
      `}</style>
      
      <div className={textClasses}>
        {displayText}
      </div>
    </>
  );
};

export default DynamicRoleText;
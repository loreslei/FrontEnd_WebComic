/* eslint-disable react-hooks/purity */
import './Sky.css'
import { useMemo } from 'react';

const Sky = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 120 }).map((_, index) => { 
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 10; 
      const duration = Math.random() * 7 + 5; 
      const size = Math.random() * 1.5 + 0.5; 

      return (
        <div
          key={`star-${index}`}
          className="absolute bg-white rounded-full star-twinkle"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `-${delay}s`, 
            animationDuration: `${duration}s`,
          }}
        />
      );
    });
  }, []);

  const shootingStars = useMemo(() => {
    return Array.from({ length: 4 }).map((_, index) => { 
      const top = Math.random() * 40;
      const left = Math.random() * 90;
      const delay = Math.random() * 15 + 5; 

      return (
        <div
          key={`shooting-${index}`}
          className="absolute bg-white h-px w-30 rounded-full opacity-0 shooting-star"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            transform: 'rotate(-35deg)', 
            animationDelay: `-${delay}s`,
          }}
        />
      );
    });
  }, []);

  return (
    
    <div className="fixed top-0 left-0 w-full h-svh bg-neutral-950 z-0 overflow-hidden pointer-events-none translate-z-0">      
      {stars}
      {shootingStars}
    </div>
  );
};

export default Sky;
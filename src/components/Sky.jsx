/* eslint-disable react-hooks/purity */
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
    
    <div className="fixed inset-0 w-full h-full bg-neutral-950 -z-10 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); } 
          50% { opacity: 0.7; transform: scale(1); } 
        }
        
        .star-twinkle {
          animation-name: twinkle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          opacity: 0.1; 
        }

        @keyframes shooting {
          0% { 
              transform: translateX(0) translateY(0) rotate(-35deg); 
              opacity: 0; 
          }
          10% { opacity: 1; } 
          80% { opacity: 0.8; }
          100% { 
              transform: translateX(-700px) translateY(500px) rotate(-35deg); 
              opacity: 0; 
          }
        }
        .shooting-star {
          animation: shooting 7s ease-in-out infinite;
          box-shadow: 0 0 8px 1px rgba(180, 200, 255, 0.4);
          background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
        }
      `}</style>
      
      {stars}
      {shootingStars}
    </div>
  );
};

export default Sky;
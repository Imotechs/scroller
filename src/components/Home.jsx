import React, { useState, useEffect } from 'react';
export default function DescentLanding() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollPercent(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Woman animation
  const womanTop = -300 + (window.innerHeight * 0.55 + 300) * scrollPercent;
  const womanScale = 0.3 + scrollPercent * 0.7;
  const womanOpacity = scrollPercent < 0.05 ? scrollPercent * 20 : 1;

  // Text fade out
  const textOpacity = scrollPercent < 0.15 ? 1 - scrollPercent * 6.67 : 0;

  // Split background animation: starts at scroll 0.4, completes by 1.0
  const bgRevealProgress = scrollPercent > 0.4 ? Math.min((scrollPercent - 0.4) / 0.6, 1) : 0;
  const leftOffset = -50 * (1 - bgRevealProgress); // from -50% to 0%
  const rightOffset = 50 * (1 - bgRevealProgress); // from +50% to 0%

  // End content fade in
  const endContentOpacity = scrollPercent > 0.75 ? (scrollPercent - 0.75) * 4 : 0;

  // Sky fade
  const skyOpacity = Math.max(1 - scrollPercent * 0.4, 0.6);

  return (

    <div className="relative">
      <div className="h-[500vh]">
        <div className="fixed top-0 left-0 w-full h-screen overflow-hidden">
          {/* Sky Background */}
          <div 
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(to bottom, #0a1929 0%, #1e3a8a 20%, #3b82f6 40%, #87CEEB 70%, #E0F6FF 100%)',
              opacity: skyOpacity
            }}
          />

          {/* Clouds (unchanged) */}
          <div className="absolute top-[10%] left-[15%] w-32 h-16 bg-white/70 rounded-full animate-float" style={{ animationDelay: '0s' }}>
            <div className="absolute w-20 h-16 bg-white/70 rounded-full -top-8 left-4" />
            <div className="absolute w-24 h-14 bg-white/70 rounded-full -top-6 right-4" />
          </div>
          <div className="absolute top-[25%] right-[10%] w-40 h-20 bg-white/70 rounded-full animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute w-24 h-20 bg-white/70 rounded-full -top-10 left-6" />
            <div className="absolute w-28 h-16 bg-white/70 rounded-full -top-8 right-6" />
          </div>
          <div className="absolute top-[45%] left-[25%] w-36 h-18 bg-white/70 rounded-full animate-float" style={{ animationDelay: '6s' }}>
            <div className="absolute w-20 h-18 bg-white/70 rounded-full -top-9 left-5" />
          </div>

          {/* Text Overlay */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 transition-opacity duration-500"
            style={{ opacity: textOpacity }}
          >
            <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl">Scrollytelling </h1>
            <p className="text-2xl text-white/90 drop-shadow-lg">Scroll to begin the journey</p>
          </div>

          {/* Split Background - Left Half */}
          <div
            className="absolute bottom-0 w-1/2 h-full z-10 overflow-hidden"
            style={{
              left: 0,
              transform: `translateX(${leftOffset}%)`,
              transition: 'transform 0.1s linear'
            }}
          >
            <img
              src="/imgs/an2.png"
              alt="Background left"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'left' }}
            />
          </div>

          {/* Split Background - Right Half */}
          <div
            className="absolute bottom-0 w-1/2 h-full z-10 overflow-hidden"
            style={{
              right: 0,
              transform: `translateX(${rightOffset}%)`,
              transition: 'transform 0.1s linear'
            }}
          >
            <img
              src="/imgs/an2.png"
              alt="Background right"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'right' }}
            />
          </div>

          {/* Woman Descending */}
          <div
            className="absolute left-1/2 -translate-x-1/2 transition-opacity duration-300 z-20"
            style={{
              top: `${womanTop}px`,
              transform: `translateX(-50%) scale(${womanScale})`,
              opacity: womanOpacity
            }}
          >
            <img
              src="/imgs/an1.png"
              alt="Woman"
              className="w-48 h-72 object-cover "
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))'
              }}
            />
          </div>

          {/* End Content */}
          <div
            className="absolute bottom-72 w-full text-center transition-opacity duration-500 px-5"
            style={{ opacity: endContentOpacity }}
          >
            <h2 className="text-5xl font-bold text-blue-800 mb-4 drop-shadow-md">
              Our story Begings
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto drop-shadow-sm">
              Every journey brings us closer. United in purpose, stronger as one.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(30px); }
        }

        .animate-float {
          animation: float 20s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
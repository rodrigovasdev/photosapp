"use client";  
interface LoadingSpinnerProps {
  fullscreen?: boolean;
  bg?: string;
}

export default function LoadingSpinner({ fullscreen = false, bg }: LoadingSpinnerProps) {
    const containerClasses = fullscreen 
        ? `fixed inset-0 flex flex-col justify-center items-center ${bg}`
        : "flex flex-col items-center justify-center";

    return (
        <div className={containerClasses}>
            {/* Camera Animation Container */}
            <div className="relative">
                {/* Camera Body - Main Rectangle */}
                <div className="w-24 h-16 bg-stone-700 border-2 border-stone-800 relative animate-bounce">
                    {/* Camera Lens - Large Circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-stone-800 rounded-full">
                        {/* Lens Inner Circle */}
                        <div className="w-full h-full bg-stone-200 rounded-full flex items-center justify-center">
                            <div className="w-6 h-6 bg-stone-800 rounded-full">
                                {/* Lens Reflection */}
                                <div className="w-2 h-2 bg-amber-400 rounded-full ml-1 mt-1"></div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Flash - Small Rectangle */}
                    <div className="absolute top-2 left-2 w-3 h-2 bg-amber-400 border border-stone-800 animate-pulse"></div>
                    
                    {/* Viewfinder - Small Rectangle */}
                    <div className="absolute top-2 right-2 w-2 h-1 bg-stone-800 border border-stone-600"></div>
                    
                    {/* Brand Text Area */}
                    <div className="absolute bottom-1 left-2 w-4 h-1 bg-orange-600"></div>
                </div>
                
                {/* Camera Top - Pentaprism */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-stone-700 border-2 border-stone-800"></div>
                
                {/* Flash Effect */}
                <div 
                  className="absolute inset-0 w-24 h-16 bg-amber-400 opacity-0"
                  style={{
                    animation: 'delayedFlash 3s',
                    animationDelay: '2s'
                  }}
                ></div>
            </div>
            
            {/* Wave Loading Effect */}
            <div className="relative w-24 h-6 mt-3 overflow-hidden">
              {/* First cyan wave */}
              <svg
                className="absolute bottom-4 w-full h-4"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,60 C300,20 600,100 900,40 C1050,10 1150,80 1200,60 L1200,120 L0,120 Z"
                  fill="#155e75"
                  style={{
                    animation: 'loadingWaveCyan 2s ease-in-out infinite alternate'
                  }}
                />
              </svg>
              
              {/* Second sky wave */}
              <svg
                className="absolute bottom-2 w-full h-4"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,40 C200,80 500,20 800,70 C950,90 1100,30 1200,50 L1200,120 L0,120 Z"
                  fill="#0c4a6e"
                  style={{
                    animation: 'loadingWaveSky 2.5s ease-in-out infinite alternate'
                  }}
                />
              </svg>
              
              {/* Orange wave */}
              <svg
                className="absolute bottom-0 w-full h-4"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,80 C300,40 600,120 900,60 C1050,30 1150,100 1200,80 L1200,120 L0,120 Z"
                  fill="#ea580c"
                  style={{
                    animation: 'loadingWaveOrange 1.8s ease-in-out infinite alternate'
                  }}
                />
              </svg>
            </div>
            
            <style jsx>{`
              @keyframes loadingWaveCyan {
                0% { fill: #155e75; opacity: 0.6; }
                50% { fill: #0891b2; opacity: 1; }
                100% { fill: #0e7490; opacity: 0.8; }
              }
              
              @keyframes loadingWaveSky {
                0% { fill: #0c4a6e; opacity: 0.5; }
                50% { fill: #0284c7; opacity: 0.9; }
                100% { fill: #075985; opacity: 0.7; }
              }
              
              @keyframes loadingWaveOrange {
                0% { fill: #ea580c; opacity: 0.7; }
                50% { fill: #f97316; opacity: 1; }
                100% { fill: #dc2626; opacity: 0.8; }
              }
              
              @keyframes delayedFlash {
                0%, 85% { opacity: 0; }
                90%, 95% { opacity: 0.8; }
                100% { opacity: 0; }
              }
            `}</style>
        </div>
    );          
}
  
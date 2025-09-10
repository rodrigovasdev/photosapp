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
                            <div className="w-6 h-6 bg-stone-800 rounded-full animate-pulse">
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
                <div className="absolute inset-0 w-24 h-16 bg-amber-400 opacity-0 animate-flash"></div>
            </div>
            
            {/* Loading Dots */}
            <div className="flex space-x-1 mt-3">
                <div className="w-3 h-3 bg-orange-600 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                <div className="w-3 h-3 bg-orange-600 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                <div className="w-3 h-3 bg-orange-600 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
            </div>
        </div>
    );          
}
  
export default function About() {
  return (
    <div className="min-h-screen bg-neutral-300 pt-20">
      {/* Hero Section */}
      <div className="text-center py-16 px-6">
        <h1 className="text-6xl font-bold text-stone-800 mb-6">
          Acerca de <span className="text-orange-600">Photosgram</span>
        </h1>
        <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
      </div>

      {/* Section 1 - Left Image, Right Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Visual Element */}
          <div className="lg:w-1/2">
            <div className="bg-stone-700 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-stone-800">Galería Visual</h3>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-orange-600">
              <h2 className="text-3xl font-bold text-stone-800 mb-6">Tu Portal Fotográfico</h2>
              <p className="text-lg text-stone-600 leading-8">
                Bienvenido a <strong className="text-orange-600">Photosgram</strong>, tu portal para explorar increíbles imágenes de alta calidad
                directamente desde mi cámara. Ya sea que estés buscando inspiración fotográfica, fondos de pantalla impresionantes, o simplemente quieras disfrutar de una galería visual,
                <strong className="text-orange-600"> Photosgram</strong> es el lugar perfecto para explorar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Right Image, Left Content (Zigzag) */}
      <div className="bg-stone-100 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Visual Element */}
            <div className="lg:w-1/2">
              <div className="bg-orange-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="w-20 h-20 bg-stone-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-stone-800">Infraestructura</h3>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-amber-400">
                <h2 className="text-3xl font-bold text-stone-800 mb-6">Tecnología Robusta</h2>
                <p className="text-lg text-stone-600 leading-8">
                  El backend está construido con <strong className="text-orange-600">Django</strong> y utiliza <strong className="text-orange-600">AWS S3</strong> para el almacenamiento de las imágenes
                  y <strong className="text-orange-600">AWS RDS</strong> para la base de datos. Esto nos permite alojar fotos en alta resolución sin compresiones innecesarias, 
                  garantizando así una experiencia visual de la más alta calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - Left Image, Right Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Visual Element */}
          <div className="lg:w-1/2">
            <div className="bg-amber-400 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-20 h-20 bg-stone-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-stone-800">Frontend Moderno</h3>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-stone-700">
              <h2 className="text-3xl font-bold text-stone-800 mb-6">Experiencia Moderna</h2>
              <p className="text-lg text-stone-600 leading-8 mb-6">
                <strong>Photosgram</strong> fue construida utilizando tecnologías modernas como 
                <span className="text-orange-600 font-semibold"> Next.js</span>, 
                <span className="text-orange-600 font-semibold"> Tailwind CSS</span>, y 
                <span className="text-orange-600 font-semibold"> TypeScript</span>. 
                Estas herramientas nos permiten ofrecerte una experiencia rápida, eficiente y con un diseño adaptable a cualquier dispositivo.
              </p>
              <div className="bg-stone-50 rounded-lg p-4 border-l-4 border-amber-400">
                <p className="text-stone-700 font-medium">
                  Gracias por visitarnos y esperamos que disfrutes tu experiencia en <strong className="text-orange-600">Photosgram</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


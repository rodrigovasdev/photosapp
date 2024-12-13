export default function About() {
  return (
    <div className="flex flex-col h-full sm:h-screen bg-neutral-300 text-center items-center gap-y-12 pt-14">
      <h1 className="text-5xl font-bold mt-10">Acerca de Photosgram</h1>
  
      <p className="text-lg w-3/4 leading-7 mb-4">
        Bienvenido a <strong>Photosgram</strong>, tu portal para explorar increíbles imágenes de alta calidad
        directamente desde mi cámara.
        Ya sea que estés buscando inspiración fotográfica, fondos de pantalla impresionantes, o simplemente quieras disfrutar de una galería visual,
        <strong className="text-orange-600 font-semibold"> Photosgram</strong> es el lugar perfecto para explorar. 
      </p>
  
      <p className="text-lg leading-7 w-3/4 mb-4">
        El backend de la página está construido con <strong className="text-orange-600 font-semibold">Django</strong> y utiliza <strong className="text-orange-600 font-semibold">AWS S3</strong> para el almacenamiento de las imágenes
        y <strong className="text-orange-600 font-semibold">AWS RDS</strong> para la base de datos. Esto nos permite alojar fotos en alta resolución sin compresiones innecesarias, 
        garantizando así una experiencia visual de la más alta calidad. Queremos que puedas admirar cada detalle sin que la calidad de las imágenes se vea afectada.
      </p>
  
      <p className="text-lg leading-7 w-3/4 mb-4">
        <strong>Photosgram</strong> fue construida utilizando tecnologías modernas como 
        <span className="text-orange-600 font-semibold"> Next.js</span>, 
        <span className="text-orange-600 font-semibold"> Tailwind CSS</span>, y 
        <span className="text-orange-600 font-semibold"> TypeScript</span>. 
        Estas herramientas nos permiten ofrecerte una experiencia rápida, eficiente y con un diseño adaptable a cualquier dispositivo. 
        Nuestro objetivo es proporcionarte una navegación fluida mientras exploras imágenes impresionantes con el mejor rendimiento.
      </p>
  
      <p className="text-lg w-3/4 leading-7">
        Gracias por visitarnos y esperamos que disfrutes tu experiencia en <strong>Photosgram</strong>.
      </p>
    </div>
  );
  
}


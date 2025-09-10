'use client'

import { useState } from 'react';

export default function Form(){
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Limpiar errores cuando el usuario empiece a escribir
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Reset errores
        setErrors({ email: '', message: '' });
        
        // Validaciones
        const newErrors = { email: '', message: '' };
        
        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es obligatorio';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Ingresa un correo electrónico válido';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje es obligatorio';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
        }
        
        // Si hay errores, mostrarlos
        if (newErrors.email || newErrors.message) {
            setErrors(newErrors);
            return;
        }
        
        // Simular envío
        setIsLoading(true);
        
        try {
            // Aquí iría la lógica real de envío
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Éxito
            setIsSubmitted(true);
            setFormData({ email: '', message: '' });
        } catch (error) {
            console.error('Error al enviar:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Mostrar mensaje de éxito
    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-neutral-300 flex items-center justify-center pt-24 px-8">
                <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 max-w-2xl w-full text-center">
                    <div className="space-y-6">
                        {/* Icono de éxito */}
                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900">¡Mensaje enviado!</h2>
                        <p className="text-gray-600">
                            Muchas gracias por tu mensaje. Te responderé lo antes posible.
                        </p>
                        
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                        >
                            Enviar otro mensaje
                        </button>
                    </div>
                    
                    {/* Wave effect at bottom */}
                    <div className="absolute -bottom-2 left-0 w-full overflow-hidden h-6 rounded-b-2xl">
                        <svg className="absolute bottom-4 w-full h-4 animate-pulse" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,60 C300,20 600,100 900,40 C1050,10 1150,80 1200,60 L1200,120 L0,120 Z" fill="#155e75" opacity="0.8" />
                        </svg>
                        <svg className="absolute bottom-2 w-full h-4" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,40 C200,80 500,20 800,70 C950,90 1100,30 1200,50 L1200,120 L0,120 Z" fill="#0c4a6e" opacity="0.7" />
                        </svg>
                        <svg className="absolute bottom-0 w-full h-4" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,80 C300,40 600,120 900,60 C1050,30 1150,100 1200,80 L1200,120 L0,120 Z" fill="#ea580c" opacity="0.9" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
    return(
        <div className="min-h-screen bg-neutral-300 flex items-center justify-center pt-24 px-8">
          <form onSubmit={handleSubmit} className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 max-w-2xl w-full">
            {/* Contenido del formulario */}
            <div className="space-y-8">
              <div className="border-b border-gray-900/10 pb-8">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 text-center">Formulario de contacto</h2>
                <p className="mt-4 text-sm leading-6 text-gray-600 text-center">
                  Si estas interesado en trabajar juntos o quieres hablar acerca de fotografia, Hablame!
                </p>
      
                <div className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Tu correo *
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ejemplo@mail.com"
                        autoComplete="email"
                        className={`block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 ${
                          errors.email ? 'ring-red-500' : 'ring-gray-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>
    
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                      Mensaje *
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 ${
                          errors.message ? 'ring-red-500' : 'ring-gray-300'
                        }`}
                        placeholder="Deja un mensaje... (mínimo 10 caracteres)"
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full flex justify-center items-center rounded-lg px-6 py-3 text-sm font-semibold leading-6 text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors duration-200 ${
                        isLoading 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-orange-600 hover:bg-orange-700'
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        'Enviar'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Wave effect at bottom */}
            <div className="absolute -bottom-2 left-0 w-full overflow-hidden h-6 rounded-b-2xl">
              {/* First cyan wave */}
              <svg
                className="absolute bottom-4 w-full h-4 animate-pulse"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,60 C300,20 600,100 900,40 C1050,10 1150,80 1200,60 L1200,120 L0,120 Z"
                  fill="#155e75"
                  opacity="0.8"
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
                  opacity="0.7"
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
                  opacity="0.9"
                />
              </svg>
            </div>
          </form>
        </div>      
    );
            
}
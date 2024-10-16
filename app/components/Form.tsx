export default function Form(){
    return(
        <form>
          <div className="space-y-12 pt-24 px-8 h-screen bg-neutral-300">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Formulario de contacto</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Si estas interesado en trabajar juntos o quieres hablar acerca de fotografia, Hablame!
              </p>
    
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                        Tu correo
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          
                          <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder=" ejemplo@mail.com"
                            autoComplete="username"
                            className="block flex-1 border-0 rounded-lg  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
      
                    <div className="col-span-full">
                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                          Mensaje
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="block w-full sm:w-1/4 rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={''}
                          />
                        </div>
                        <p className="mt-2 text-sm leading-6 text-gray-600">Deja un mensaje.</p>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="flex -mt-4  justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>      
              </form>
            );
}
function SignUpPage() {
    return (
        //  write the html code for a signup page here  
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
        <form className="flex  w-1/2 flex-col items-center justify-center bg-white rounded-lg shadow-xl p-12">
            <h1 className="text-3xl font-bold mb-6">Registrarse</h1>
            <div className="flex flex-col mb-4">
             <label className="mb-2 font-bold text-lg text-gray-800">
                Nombre
                </label>
        <input
            className="border py-2 px-3 text-grey-800"
            id="name"
            name="name"
            type="text"
            placeholder="Nombre"
        />
        </div>
        <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-800">
                Apellido
                </label>
        <input
            className="border py-2 px-3 text-grey-800"
            id="lastname"   
            name="lastname"
            type="text"
            placeholder="Apellido"
        />
        </div>
        <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-800">
                Email
                </label>
        <input
            className="border py-2 px-3 text-grey-800"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
        />
        </div>
        <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-800">
                Contraseña
                </label>
        <input
            className="border py-2 px-3 text-grey-800"
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
        />
        </div>
        <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-800">
                Confirmar Contraseña
                </label>
        <input
            className="border py-2 px-3 text-grey-800"
            id="password"
            name="password"
            type="password"
            placeholder="Confirmar Contraseña"
        />
        </div>
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
        >
            Registrarse
        </button>
        </form>
        </div>    
    );
  }
  
  export default SignUpPage;
  
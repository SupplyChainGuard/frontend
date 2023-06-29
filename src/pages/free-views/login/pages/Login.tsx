import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    navigate('/auth');
  }

  return (
    //Make A login page here
    <>
      <div className="flex flex-col items-center justify-center bg-gray-900 w-full h-full">
        <form className="flex h-1/2 w-1/2 flex-col items-center justify-center bg-white rounded-lg shadow-xl p-12" onSubmit={handleFormSubmit}>
          <h1 className="text-3xl font-bold mb-6">Iniciar Sesión</h1>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-gray-800">
              Usuario
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              id="username"
              name="username"
              type="text"
              placeholder="Usuario"
            />
          </div>
          <div className="flex flex-col mb-6">
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
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        apellido:'',
        email: '',
        password: ''
    });

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del formulario a tu backend
        console.log(formData);
        // Una vez que el registro sea exitoso, puedes redirigir al usuario a otra página
        navigate('/auth');
    };

    const handleInputChange = (e:any) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center bg-gray-900 w-full h-full">
                <form
                    className="flex h-max w-1/2 flex-col items-center justify-center bg-white rounded-lg shadow-xl p-12"
                    onSubmit={handleFormSubmit}
                >
                    <h1 className="text-3xl font-bold mb-6">Registro</h1>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-800">Nombre</label>
                        <input
                            className="border py-2 px-3 text-gray-800"
                            id="Nombre"
                            name="Nombre"
                            type="text"
                            placeholder="Nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-800">Apellidos</label>
                        <input
                            className="border py-2 px-3 text-gray-800"
                            id="Apellido"
                            name="Apellido"
                            type="text"
                            placeholder="Apellidos"
                            value={formData.apellido}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-2 font-bold text-lg text-gray-800">Correo electrónico</label>
                        <input
                            className="border py-2 px-3 text-gray-800"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Correo electrónico"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-800">Contraseña</label>
                        <input
                            className="border py-2 px-3 text-gray-800"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Contraseña"
                            value={formData.password}
                            onChange={handleInputChange}
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
        </>
    );
}

export default Register;


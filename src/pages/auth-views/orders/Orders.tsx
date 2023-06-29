import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Orders() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleSaveOrder = () => {
        // Aquí puedes agregar la lógica para guardar la orden
        console.log('Orden guardada');
        closeModal();
    };
    return (
        <>
            <div>
                <div className="flex justify-end mx-20">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit" onClick={openModal}>Nueva Orden</button>
                </div>
                {isModalOpen && (
                    <div className="modal">
                        <div className="fixed inset-0 flex items-center justify-center z-10">
                            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                            <div className="bg-white rounded-lg p-10 z-20 h-max w-1/2">
                                <h2 className="text-xl font-bold mb-4">Nueva Orden</h2>
                                <div className="mb-4 flex flex-col">
                                    <label className="font-bold">Proveedor</label>
                                    <input type="text" className="border border-gray-300 p-2" />
                                </div>
                                <div className="mb-4 flex flex-col">
                                    <label className="font-bold">Producto</label>
                                    <input type="text" className="border border-gray-300 p-2" />
                                </div>
                                <div className="mb-4 flex flex-col">
                                    <label className="font-bold">Cantidad</label>
                                    <input type="text" className="border border-gray-300 p-2" />
                                </div>
                                <div className="flex justify-end space-x-4">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        type="submit"
                                        onClick={closeModal}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        type="submit"
                                        onClick={handleSaveOrder}
                                    >
                                        Guardar
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button onClick={closeModal}>Cerrar Modal</button>
                    </div>
                )}
                <div className="flex justify-center items-center h-full">
                    <table className="h-2/3 w-2/4">
                        <thead>
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Provider ID</th>
                            <th className="px-4 py-2">Product SKU</th>
                            <th className="px-4 py-2">Quantity</th>
                            <th className="px-4 py-2">Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border px-4 py-2">Product 1</td>
                            <td className="border px-4 py-2">100</td>
                            <td className="border px-4 py-2">50</td>
                            <td className="border px-4 py-2">50</td>
                            <td className="border px-4 py-2">50</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">Product 2</td>
                            <td className="border px-4 py-2">200</td>
                            <td className="border px-4 py-2">100</td>
                            <td className="border px-4 py-2">50</td>
                            <td className="border px-4 py-2">50</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Product 3</td>
                            <td className="border px-4 py-2">300</td>
                            <td className="border px-4 py-2">150</td>
                            <td className="border px-4 py-2">50</td>
                            <td className="border px-4 py-2">50</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

}

export default Orders;

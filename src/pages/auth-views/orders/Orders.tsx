import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "../shared/components/Table";
import useFetchOrders from "./hooks/useGetOrders";
function Orders() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //get all orders with useGetOrders hook
  const { orders, loadingGetOrders, errorGetOrders, fetchOrders } =
    useFetchOrders();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSaveOrder = () => {
    // Aquí puedes agregar la lógica para guardar la orden
    console.log("Orden guardada");
    closeModal();
  };

  const tableProp = {
    headers: ["ID", "Proveedor", "Producto SKU", "Cantidad", "Fecha", "Action"],
    //set data props with orders data but first convert it to Item type with map function and empty array if error
    data:
      orders?.map((order) => ({
        id: order.id,
        values: [
          order.id.toString(),
          order.providerId.toString(),
          order.productSKU.toString(),
          order.quantity.toString(),
          order.date.toString(),
        ],
      })) || [],
    action: () => {},
  };

  return (
    <>
      <div>
        <div className="flex justify-end mx-20">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={openModal}
          >
            Nueva Orden
          </button>
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
        <main className="flex justify-center mx-4">
          <Table
            headers={tableProp.headers}
            data={tableProp.data}
            action={tableProp.action}
          />
        </main>
      </div>
    </>
  );
}

export default Orders;

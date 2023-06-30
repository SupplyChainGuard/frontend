import { useState } from "react";
import Table from "../shared/components/Table";
import useGetProducts from "./hooks/useGetProducts";

function Inventory() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { products, loadingGetProducts, errorGetProducts, getProducts } =
    useGetProducts();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSaveOrder = () => {
    closeModal();
  };

  const tableProp = {
    headers: ["SKU", "Name", "Stock", "Category", "Status", "Action"],
    data:
      products?.map((product) => ({
        id: product.id,
        values: [
          product.id.toString(),
          product.name.toString(),
          product.stock.toString(),
          product.category.toString(),
          product.status.toString(),
        ],
      })) || [],
    action: () => {},
  };

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-4">
        <div className="flex justify-end mx-20">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={openModal}
          >
            New Product
          </button>
        </div>
        {isModalOpen && (
          <div className="modal">
            <div className="fixed inset-0 flex items-center justify-center z-10">
              <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
              <div className="bg-white rounded-lg p-10 z-20 h-max w-1/2">
                <h2 className="text-xl font-bold mb-4">New Product</h2>
                <div className="mb-4 flex flex-col">
                  <label className="font-bold">Name</label>
                  <input type="text" className="border border-gray-300 p-2" />
                </div>
                <div className="mb-4 flex flex-col">
                  <label className="font-bold">Category</label>
                  <input type="text" className="border border-gray-300 p-2" />
                </div>
                <div className="mb-4 flex flex-col">
                  <label className="font-bold">Stock</label>
                  <input type="text" className="border border-gray-300 p-2" />
                </div>
                <div className="mb-4 flex flex-col">
                  <label className="font-bold">Status</label>
                  <input type="text" className="border border-gray-300 p-2" />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                    onClick={handleSaveOrder}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <Table
          headers={tableProp.headers}
          data={tableProp.data}
          action={tableProp.action}
        />
      </div>
    </>
  );
}

export default Inventory;

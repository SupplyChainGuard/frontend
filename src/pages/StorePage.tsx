function StorePage() {
  return (
    <>
      <div className="fixed h-screen w-80 bg-gray-900 border-black border-r-2 overflow-auto container text-white">
        <div className="p-3 font-semibold text-xl h-12 text-center">
          <h1>SUPLY CHAIN GUARD</h1>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <a
                href="#"
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-lg"
              >
                <span className="text-gray-400"></span>
                <span>Dashboard</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg"
              >
                <span className="text-gray-400"></span>
                <span>Orders</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg"
              >
                <span className="text-gray-400"></span>
                <span>Products</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg"
              >
                <span className="text-gray-400"></span>
                <span>Customers</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg"
              >
                <span className="text-gray-400"></span>
                <span>Reports</span>
              </a>
            </div>
            <div className="flex flex-col space-y-1">
              <a
                href="#"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg"
              >
                <span className="text-gray-400"></span>
                <span>Settings</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg"
              >
                <span className="text-gray-400"></span>
                <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full flex-1 flex-col space-y-8 p-8 pl-96">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Bienvenido</h2>
            <p className="text-muted-foreground">
              Lista de Productos Disponibles
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <table className="h-2/3 w-2/4">
            <thead>
              <tr>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Product 1</td>
                <td className="border px-4 py-2">100</td>
                <td className="border px-4 py-2">50</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2">Product 2</td>
                <td className="border px-4 py-2">200</td>
                <td className="border px-4 py-2">100</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Product 3</td>
                <td className="border px-4 py-2">300</td>
                <td className="border px-4 py-2">150</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default StorePage;
